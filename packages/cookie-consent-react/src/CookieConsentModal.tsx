import React from "react";
// @ts-ignore: wait for nrk to supply types
import CoreDialog from "@nrk/core-dialog/jsx";
import { ListItem, UnorderedList } from "@fremtind/jkl-list-react";
import { Checkbox } from "@fremtind/jkl-checkbox-react";
import { PrimaryButton, TertiaryButton } from "@fremtind/jkl-button-react";
import { useForm } from "react-hook-form";
import { Consent, ConsentComponentBaseProps } from "./types";
import { useCookieConsentState } from "./CookieConsentContext";
import { convertConsentValueToFormValue, convertBooleanToConsentValue } from "./cookieConsentUtils";

interface FormValues {
    functional?: boolean;
    marketing?: boolean;
    statistics?: boolean;
}

export const CookieConsentModal = ({ onAccept }: ConsentComponentBaseProps) => {
    const { consent, dispatch, isOpen, requirement, showSettings } = useCookieConsentState();
    const { register, handleSubmit } = useForm<FormValues>({
        defaultValues: {
            functional: convertConsentValueToFormValue(consent.functional),
            marketing: convertConsentValueToFormValue(consent.marketing),
            statistics: convertConsentValueToFormValue(consent.statistics),
        },
    });

    const handleAccept = (v: Consent | "implicit") => {
        if (v === "implicit") {
            onAccept({
                functional: convertBooleanToConsentValue(requirement.functional),
                marketing: convertBooleanToConsentValue(requirement.marketing),
                statistics: convertBooleanToConsentValue(requirement.statistics),
            });
        } else {
            onAccept(v);
        }
    };

    const onFormSubmit = (formValues: FormValues) => {
        handleAccept({
            functional: convertBooleanToConsentValue(formValues.functional),
            marketing: convertBooleanToConsentValue(formValues.marketing),
            statistics: convertBooleanToConsentValue(formValues.statistics),
        });
    };

    return (
        <div>
            <CoreDialog
                backdrop
                strict
                hidden={!isOpen}
                aria-label="Informasjonskapsler"
                className="jkl-cookie-consent-modal"
                data-testautoid="jkl-cookie-consent-modal"
            >
                {!showSettings ? (
                    <>
                        <h1 className="jkl-cookie-consent-modal__header">Vi bruker informasjonskapsler slik at:</h1>

                        <UnorderedList className="jkl-cookie-consent-modal__info">
                            <ListItem>Nettsidene skal fungere teknisk</ListItem>
                            {requirement.statistics && (
                                <ListItem>
                                    Vi kan samle statistikk på hvordan nettsidene brukes og dermed kunne forbedre
                                    tjenestene våre.
                                </ListItem>
                            )}
                            {requirement.functional && (
                                <ListItem>
                                    Nettsidene skal tilpasses din bruk, dine valg og dine innstillinger.
                                </ListItem>
                            )}
                            {requirement.marketing && (
                                <ListItem>
                                    Vi kan gi deg personlig tilpasset innhold og relevante annonser, også gjennom våre
                                    samarbeidspartnere, på for eksempel nettsider og i sosiale medier.
                                </ListItem>
                            )}
                        </UnorderedList>

                        <div className="jkl-cookie-consent-modal__button-group">
                            <PrimaryButton
                                onClick={() => handleAccept("implicit")}
                                data-testid="jkl-cookie-consent-godta"
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
                        <h1 className="jkl-cookie-consent-modal__header">Informasjonskapsler</h1>

                        <UnorderedList>
                            <ListItem>Nettsidene skal fungere teknisk</ListItem>
                        </UnorderedList>
                        <p>
                            For at nettsidene skal fungere, må vi bruke tekniske informasjonskapsler. Denne kan derfor
                            ikke slås av.
                        </p>
                        <form onSubmit={handleSubmit(onFormSubmit)}>
                            {requirement.statistics && (
                                <>
                                    <Checkbox
                                        className="jkl-cookie-consent-modal__settings"
                                        name="statistics"
                                        value="True"
                                        ref={register()}
                                    >
                                        Tillat statistikk
                                    </Checkbox>
                                    <p>
                                        Denne informasjonen hjelper oss til å forstå hvordan nettsidene blir brukt, slik
                                        at vi kan gjøre dem bedre og enklere å bruke. Informasjonskapslene lagrer
                                        statistikk, og brukes for å analysere hva du gjør på nettsidene.
                                    </p>
                                </>
                            )}

                            {requirement.marketing && (
                                <>
                                    <Checkbox
                                        className="jkl-cookie-consent-modal__settings"
                                        name="marketing"
                                        value="True"
                                        ref={register()}
                                    >
                                        Tillat personlig markedsføring
                                    </Checkbox>
                                    <p>
                                        Dette gjør at vi kan gi deg mer relevant og tilpasset markedsføring, også
                                        gjennom våre samarbeidspartnere, på for eksempel nettsider, annonser og i
                                        sosiale medier
                                    </p>
                                </>
                            )}

                            {requirement.functional && (
                                <>
                                    <Checkbox
                                        className="jkl-cookie-consent-modal__settings"
                                        name="functional"
                                        value="True"
                                        ref={register()}
                                    >
                                        Tillat funksjonelle informasjonskapsler
                                    </Checkbox>
                                    <p>
                                        Funksjonelle informasjonskapsler lagrer opplysninger om din bruk av nettsidene
                                        og hvilke innstillinger du har gjort, slik at du kan få funksjonalitet tilpasset
                                        deg
                                    </p>
                                </>
                            )}

                            <div className="jkl-cookie-consent-modal__button-group">
                                <PrimaryButton data-testid="jkl-cookie-consent-godta">Godta</PrimaryButton>
                            </div>
                        </form>
                    </>
                )}
            </CoreDialog>
        </div>
    );
};
