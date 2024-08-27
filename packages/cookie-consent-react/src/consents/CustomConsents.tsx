import { PrimaryButton } from "@fremtind/jkl-button-react";
import { CheckListItem, UnorderedList } from "@fremtind/jkl-list-react";
import { Modal, ModalActions, ModalBody, ModalConfig, ModalHeader, ModalTitle } from "@fremtind/jkl-modal-react";
import React, { FC, FormEvent, useCallback } from "react";
import { useCookieConsentState } from "../CookieConsentContext";
import { convertBooleanConsentObjectToConsentObject } from "../cookieConsentUtils";
import { Consent } from "../types";
import { RequirementCheckbox } from "./RequirementCheckbox";

type Props = {
    modalConfig: ModalConfig;
    handleAccept: (v: Consent | "implicit") => void;
};

export const CustomConsents: FC<Props> = ({ modalConfig, handleAccept }) => {
    const { consent, requirement } = useCookieConsentState();

    const onSubmit = useCallback(
        (event: FormEvent<HTMLFormElement>) => {
            event.preventDefault();

            const formValues: Partial<Record<keyof Consent, boolean>> = {};
            const requiredFormNames = Object.entries(requirement)
                .map(([name, required]) => (required ? name : undefined))
                .filter(Boolean) as Array<keyof Consent>;

            const formData = new FormData(event.target as HTMLFormElement);
            requiredFormNames.forEach((name) => {
                formValues[name] = formData.get(name) === "True";
            });

            handleAccept(convertBooleanConsentObjectToConsentObject(formValues));
        },
        [handleAccept, requirement],
    );

    return (
        <Modal component="form" {...modalConfig.modal} {...{ onSubmit }}>
            <ModalHeader>
                <ModalTitle {...modalConfig.title}>Informasjonskapsler</ModalTitle>
            </ModalHeader>
            <ModalBody>
                <UnorderedList className="jkl-cookie-consent-modal__checklist">
                    <CheckListItem>Nettsidene skal fungere teknisk</CheckListItem>
                </UnorderedList>
                <p className="jkl-cookie-consent-modal__info-text">
                    For at nettsidene skal fungere, må vi bruke tekniske informasjonskapsler. Denne kan derfor ikke slås
                    av.
                </p>
                {requirement.functional && (
                    <RequirementCheckbox
                        name="functional"
                        label="Tillat funksjonelle"
                        defaultChecked={consent.functional === "accepted"}
                    >
                        Funksjonelle informasjonskapsler lagrer opplysninger om din bruk av nettsidene og hvilke
                        innstillinger du har gjort, slik at du kan få funksjonalitet tilpasset deg.
                    </RequirementCheckbox>
                )}

                {requirement.statistics && (
                    <RequirementCheckbox
                        name="statistics"
                        label="Tillat statistikk"
                        defaultChecked={consent.statistics === "accepted"}
                    >
                        Informasjonskapslene lagrer statistikk som hjelper oss med å forstå hvordan nettsidene blir
                        brukt, slik at vi kan gjøre dem bedre og enklere å bruke.
                    </RequirementCheckbox>
                )}

                {requirement.marketing && (
                    <RequirementCheckbox
                        name="marketing"
                        label="Tillat personlig markedsføring"
                        defaultChecked={consent.marketing === "accepted"}
                    >
                        Dette gjør at vi kan gi deg mer relevant og tilpasset markedsføring, også gjennom våre
                        samarbeidspartnere, på for eksempel nettsider, annonser og i sosiale medier.
                    </RequirementCheckbox>
                )}
            </ModalBody>
            <ModalActions>
                <PrimaryButton data-testid="jkl-cookie-consent-godta">Godta</PrimaryButton>
            </ModalActions>
        </Modal>
    );
};
