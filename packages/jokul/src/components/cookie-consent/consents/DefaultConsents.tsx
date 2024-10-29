import React, { FC, FormEvent, useCallback } from "react";
import { PrimaryButton, TertiaryButton } from "../../button/Button.js";
import { UnorderedList } from "../../list/List.js";
import { CheckListItem } from "../../list/ListItem.js";
import {
    Modal,
    ModalActions,
    ModalBody,
    ModalHeader,
    ModalTitle,
} from "../../modal/Modal.js";
import { ModalConfig } from "../../modal/useModal.js";
import { useCookieConsentState } from "../CookieConsentContext.js";
import { Consent } from "../types.js";

type Props = {
    modalConfig: ModalConfig;
    handleAccept: (v: Consent | "implicit") => void;
};

export const DefaultConsents: FC<Props> = ({ modalConfig, handleAccept }) => {
    const { dispatch, requirement } = useCookieConsentState();

    const onSubmit = useCallback(
        (event: FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            handleAccept("implicit");
        },
        [handleAccept],
    );

    return (
        <Modal component="form" {...modalConfig.modal} {...{ onSubmit }}>
            <ModalHeader>
                <ModalTitle {...modalConfig.title}>
                    Vi bruker informasjonskapsler slik at:
                </ModalTitle>
            </ModalHeader>
            <ModalBody>
                <UnorderedList className="jkl-cookie-consent-modal__checklist">
                    <CheckListItem>
                        Nettsidene skal fungere teknisk
                    </CheckListItem>
                    {requirement.functional && (
                        <CheckListItem>
                            Nettsidene skal tilpasses din bruk, dine valg og
                            dine innstillinger.
                        </CheckListItem>
                    )}
                    {requirement.statistics && (
                        <CheckListItem>
                            Vi kan samle statistikk på hvordan nettsidene brukes
                            og dermed kunne forbedre tjenestene våre.
                        </CheckListItem>
                    )}
                    {requirement.marketing && (
                        <CheckListItem>
                            Vi kan gi deg personlig tilpasset innhold og
                            relevante annonser, også gjennom våre
                            samarbeidspartnere, på for eksempel nettsider og i
                            sosiale medier.
                        </CheckListItem>
                    )}
                </UnorderedList>
            </ModalBody>
            <ModalActions>
                <PrimaryButton
                    data-testid="jkl-cookie-consent-godta"
                    {...modalConfig.closeButton}
                    type={"submit"}
                >
                    Godta
                </PrimaryButton>

                <TertiaryButton
                    type="button"
                    onClick={() => {
                        dispatch({ type: "SET_SHOW_SETTINGS", payload: true });
                    }}
                >
                    Innstillinger
                </TertiaryButton>
            </ModalActions>
        </Modal>
    );
};
