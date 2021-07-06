import React from "react";
// @ts-ignore: wait for nrk to supply types
import CoreDialog from "@nrk/core-dialog/jsx";
import { CheckListItem, UnorderedList } from "@fremtind/jkl-list-react";
import { Checkbox } from "@fremtind/jkl-checkbox-react";
import { PrimaryButton, TertiaryButton } from "@fremtind/jkl-button-react";
import { useForm } from "react-hook-form";
import { Consent, ConsentComponentBaseProps } from "./types";
import { useCookieConsentState } from "./CookieConsentContext";
import { convertBooleanConsentObjectToConsentObject, convertConsentObjectToBooleans } from "./cookieConsentUtils";

interface FormValues {
    functional?: boolean;
    marketing?: boolean;
    statistics?: boolean;
}

export const CookieConsentModal = ({ onAccept }: ConsentComponentBaseProps) => {
    const { consent, dispatch, isOpen, requirement, showSettings } = useCookieConsentState();
    const { register, handleSubmit } = useForm<FormValues>({
        defaultValues: convertConsentObjectToBooleans(consent),
    });

    const handleAccept = (v: Consent | "implicit") => {
        if (v === "implicit") {
            onAccept(convertBooleanConsentObjectToConsentObject(requirement));
        } else {
            onAccept(v);
        }
    };

    const onFormSubmit = (formValues: FormValues) => {
        handleAccept(convertBooleanConsentObjectToConsentObject(formValues));
    };

    return (
        <CoreDialog
            backdrop
            strict
            hidden={!isOpen}
            aria-label="Informasjonskapsler"
            className={`jkl-cookie-consent-modal jkl-cookie-consent-modal--${showSettings ? "settings" : "implicit"}`}
            data-testautoid="jkl-cookie-consent-modal"
        >
            {!showSettings ? (
                <>
                    <h1 className="jkl-cookie-consent-modal__header">Vi bruker informasjonskapsler slik at:</h1>

                    <UnorderedList className="jkl-cookie-consent-modal__info">
                        <CheckListItem>Nettsidene skal fungere teknisk</CheckListItem>
                        {requirement.functional && (
                            <CheckListItem>
                                Nettsidene skal tilpasses din bruk, dine valg og dine innstillinger.
                            </CheckListItem>
                        )}
                        {requirement.statistics && (
                            <CheckListItem>
                                Vi kan samle statistikk på hvordan nettsidene brukes og dermed kunne forbedre tjenestene
                                våre.
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
                        <PrimaryButton onClick={() => handleAccept("implicit")} data-testid="jkl-cookie-consent-godta">
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
                        <CheckListItem>Nettsidene skal fungere teknisk</CheckListItem>
                    </UnorderedList>
                    <p>
                        For at nettsidene skal fungere, må vi bruke tekniske informasjonskapsler. Denne kan derfor ikke
                        slås av.
                    </p>
                    <form onSubmit={handleSubmit(onFormSubmit)}>
                        {requirement.functional && (
                            <>
                                <Checkbox
                                    name="functional"
                                    value="True"
                                    ref={register()}
                                    className="jkl-cookie-consent-modal__checkbox"
                                >
                                    Tillat funksjonelle
                                </Checkbox>
                                <p>
                                    Funksjonelle informasjonskapsler lagrer opplysninger om din bruk av nettsidene og
                                    hvilke innstillinger du har gjort, slik at du kan få funksjonalitet tilpasset deg.
                                </p>
                            </>
                        )}

                        {requirement.statistics && (
                            <>
                                <Checkbox
                                    name="statistics"
                                    value="True"
                                    ref={register()}
                                    className="jkl-cookie-consent-modal__checkbox"
                                >
                                    Tillat statistikk
                                </Checkbox>
                                <p>
                                    Informasjonskapslene lagrer statistikk som hjelper oss med å forstå hvordan
                                    nettsidene blir brukt, slik at vi kan gjøre dem bedre og enklere å bruke.
                                </p>
                            </>
                        )}

                        {requirement.marketing && (
                            <>
                                <Checkbox
                                    name="marketing"
                                    value="True"
                                    ref={register()}
                                    className="jkl-cookie-consent-modal__checkbox"
                                >
                                    Tillat personlig markedsføring
                                </Checkbox>
                                <p>
                                    Dette gjør at vi kan gi deg mer relevant og tilpasset markedsføring, også gjennom
                                    våre samarbeidspartnere, på for eksempel nettsider, annonser og i sosiale medier.
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
    );
};
