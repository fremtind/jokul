import React, { FC, FormEvent, useCallback, useEffect } from "react";
import ReactDOM from "react-dom";
import { useA11yDialog } from "react-a11y-dialog";
import { WithChildren } from "@fremtind/jkl-core";
import { CheckListItem, UnorderedList } from "@fremtind/jkl-list-react";
import { Checkbox } from "@fremtind/jkl-checkbox-react";
import { PrimaryButton, TertiaryButton } from "@fremtind/jkl-button-react";
import { Consent, ConsentComponentBaseProps } from "./types";
import { useCookieConsentState } from "./CookieConsentContext";
import { convertBooleanConsentObjectToConsentObject } from "./cookieConsentUtils";
import { useId } from "@fremtind/jkl-react-hooks";

interface RequirementCheckboxProps extends WithChildren {
    defaultChecked: boolean;
    name: "functional" | "marketing" | "statistics";
    label: string;
}

const RequirementCheckbox = ({ defaultChecked, name, label, children }: RequirementCheckboxProps) => {
    return (
        <>
            <Checkbox
                className="jkl-cookie-consent-modal__checkbox"
                value="True"
                name={name}
                defaultChecked={defaultChecked}
            >
                {label}
            </Checkbox>
            <p className="jkl-cookie-consent-modal__info-text">{children}</p>
        </>
    );
};

export const CookieConsentModal: FC<ConsentComponentBaseProps> = ({ onAccept }) => {
    const { consent, dispatch, isOpen, requirement, showSettings } = useCookieConsentState();

    const handleAccept = useCallback(
        (v: Consent | "implicit") => {
            if (v === "implicit") {
                onAccept(convertBooleanConsentObjectToConsentObject(requirement));
            } else {
                onAccept(v);
            }
        },
        [onAccept, requirement],
    );

    const onFormSubmit = useCallback(
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

    const id = useId("jkl-cookie-modal");
    const [instance, attr] = useA11yDialog({
        id,
        // The optional `role` attribute of the dialog element, either `dialog`
        // (default) or `alertdialog` to make it a modal (preventing closing on
        // click outside of ESC key).
        role: "alertdialog",
        // The required dialog title, mandatory in the document
        // to provide context to assistive technology.
        title: "Informasjonskapsler",
    });

    useEffect(() => {
        if (!instance) {
            return;
        }
        if (isOpen) {
            instance.show();
        } else {
            instance.hide();
        }
    }, [instance, isOpen]);

    return ReactDOM.createPortal(
        <div
            {...(attr.container as unknown)}
            className="jkl-cookie-consent-modal"
            data-testautoid="jkl-cookie-consent-modal"
        >
            <div {...attr.overlay} className="jkl-cookie-consent-modal__overlay" />
            <div {...attr.dialog} className="jkl-cookie-consent-modal__content">
                {!showSettings ? (
                    <>
                        <h1 className="jkl-cookie-consent-modal__header" {...attr.title}>
                            Vi bruker informasjonskapsler slik at:
                        </h1>

                        <UnorderedList className="jkl-cookie-consent-modal__checklist">
                            <CheckListItem>Nettsidene skal fungere teknisk</CheckListItem>
                            {requirement.functional && (
                                <CheckListItem>
                                    Nettsidene skal tilpasses din bruk, dine valg og dine innstillinger.
                                </CheckListItem>
                            )}
                            {requirement.statistics && (
                                <CheckListItem>
                                    Vi kan samle statistikk på hvordan nettsidene brukes og dermed kunne forbedre
                                    tjenestene våre.
                                </CheckListItem>
                            )}
                            {requirement.marketing && (
                                <CheckListItem>
                                    Vi kan gi deg personlig tilpasset innhold og relevante annonser, også gjennom våre
                                    samarbeidspartnere, på for eksempel nettsider og i sosiale medier.
                                </CheckListItem>
                            )}
                        </UnorderedList>

                        <div className="jkl-cookie-consent-modal__button-group">
                            <PrimaryButton
                                data-testid="jkl-cookie-consent-godta"
                                {...attr.closeButton}
                                onClick={() => {
                                    handleAccept("implicit");
                                }}
                            >
                                Godta
                            </PrimaryButton>

                            <TertiaryButton
                                onClick={() => {
                                    dispatch({ type: "SET_SHOW_SETTINGS", payload: true });
                                }}
                            >
                                Innstillinger
                            </TertiaryButton>
                        </div>
                    </>
                ) : (
                    <>
                        <h1 className="jkl-cookie-consent-modal__header" {...attr.title}>
                            Informasjonskapsler
                        </h1>

                        <UnorderedList className="jkl-cookie-consent-modal__checklist">
                            <CheckListItem>Nettsidene skal fungere teknisk</CheckListItem>
                        </UnorderedList>
                        <p className="jkl-cookie-consent-modal__info-text">
                            For at nettsidene skal fungere, må vi bruke tekniske informasjonskapsler. Denne kan derfor
                            ikke slås av.
                        </p>
                        <form onSubmit={onFormSubmit}>
                            {requirement.functional && (
                                <RequirementCheckbox
                                    name="functional"
                                    label="Tillat funksjonelle"
                                    defaultChecked={consent.functional === "accepted"}
                                >
                                    Funksjonelle informasjonskapsler lagrer opplysninger om din bruk av nettsidene og
                                    hvilke innstillinger du har gjort, slik at du kan få funksjonalitet tilpasset deg.
                                </RequirementCheckbox>
                            )}

                            {requirement.statistics && (
                                <RequirementCheckbox
                                    name="statistics"
                                    label="Tillat statistikk"
                                    defaultChecked={consent.statistics === "accepted"}
                                >
                                    Informasjonskapslene lagrer statistikk som hjelper oss med å forstå hvordan
                                    nettsidene blir brukt, slik at vi kan gjøre dem bedre og enklere å bruke.
                                </RequirementCheckbox>
                            )}

                            {requirement.marketing && (
                                <RequirementCheckbox
                                    name="marketing"
                                    label="Tillat personlig markedsføring"
                                    defaultChecked={consent.marketing === "accepted"}
                                >
                                    Dette gjør at vi kan gi deg mer relevant og tilpasset markedsføring, også gjennom
                                    våre samarbeidspartnere, på for eksempel nettsider, annonser og i sosiale medier.
                                </RequirementCheckbox>
                            )}

                            <div className="jkl-cookie-consent-modal__button-group">
                                <PrimaryButton data-testid="jkl-cookie-consent-godta">Godta</PrimaryButton>
                            </div>
                        </form>
                    </>
                )}
            </div>
        </div>,
        document.body,
    );
};
