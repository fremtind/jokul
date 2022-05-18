import { PrimaryButton, TertiaryButton } from "@fremtind/jkl-button-react";
import { Checkbox } from "@fremtind/jkl-checkbox-react";
import { WithChildren } from "@fremtind/jkl-core";
import { CheckListItem, UnorderedList } from "@fremtind/jkl-list-react";
// @ts-ignore: wait for nrk to supply types
import CoreDialog from "@nrk/core-dialog/jsx";
import React, { FC } from "react";
import { useForm, useFormContext, FormProvider } from "react-hook-form";
import { useCookieConsentState } from "./CookieConsentContext";
import { convertBooleanConsentObjectToConsentObject, convertConsentObjectToBooleans } from "./cookieConsentUtils";
import { Consent, ConsentComponentBaseProps } from "./types";

interface FormValues {
    functional?: boolean;
    marketing?: boolean;
    statistics?: boolean;
}

interface RequirementCheckboxProps extends WithChildren {
    name: "functional" | "marketing" | "statistics";
    label: string;
}

const RequirementCheckbox = ({ name, label, children }: RequirementCheckboxProps) => {
    const { register } = useFormContext<FormValues>();

    return (
        <>
            <Checkbox value="True" {...register(name)} className="jkl-cookie-consent-modal__checkbox">
                {label}
            </Checkbox>
            <p className="jkl-cookie-consent-modal__info-text">{children}</p>
        </>
    );
};

export const CookieConsentModal: FC<ConsentComponentBaseProps> = ({ onAccept }) => {
    const { consent, dispatch, isOpen, requirement, showSettings } = useCookieConsentState();
    const formMethods = useForm<FormValues>({
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
            backdrop="on"
            strict
            hidden={!isOpen}
            aria-label="Informasjonskapsler"
            className="jkl-cookie-consent-modal"
            data-testautoid="jkl-cookie-consent-modal"
        >
            {!showSettings ? (
                <>
                    <h1 className="jkl-cookie-consent-modal__header">Vi bruker informasjonskapsler slik at:</h1>

                    <UnorderedList className="jkl-cookie-consent-modal__checklist">
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
                <FormProvider {...formMethods}>
                    <h1 className="jkl-cookie-consent-modal__header">Informasjonskapsler</h1>

                    <UnorderedList className="jkl-cookie-consent-modal__checklist">
                        <CheckListItem>Nettsidene skal fungere teknisk</CheckListItem>
                    </UnorderedList>
                    <p className="jkl-cookie-consent-modal__info-text">
                        For at nettsidene skal fungere, må vi bruke tekniske informasjonskapsler. Denne kan derfor ikke
                        slås av.
                    </p>
                    <form onSubmit={formMethods.handleSubmit(onFormSubmit)}>
                        {requirement.functional && (
                            <RequirementCheckbox name="functional" label="Tillat funksjonelle">
                                Funksjonelle informasjonskapsler lagrer opplysninger om din bruk av nettsidene og hvilke
                                innstillinger du har gjort, slik at du kan få funksjonalitet tilpasset deg.
                            </RequirementCheckbox>
                        )}

                        {requirement.statistics && (
                            <RequirementCheckbox name="statistics" label="Tillat statistikk">
                                Informasjonskapslene lagrer statistikk som hjelper oss med å forstå hvordan nettsidene
                                blir brukt, slik at vi kan gjøre dem bedre og enklere å bruke.
                            </RequirementCheckbox>
                        )}

                        {requirement.marketing && (
                            <RequirementCheckbox name="marketing" label="Tillat personlig markedsføring">
                                Dette gjør at vi kan gi deg mer relevant og tilpasset markedsføring, også gjennom våre
                                samarbeidspartnere, på for eksempel nettsider, annonser og i sosiale medier.
                            </RequirementCheckbox>
                        )}

                        <div className="jkl-cookie-consent-modal__button-group">
                            <PrimaryButton data-testid="jkl-cookie-consent-godta">Godta</PrimaryButton>
                        </div>
                    </form>
                </FormProvider>
            )}
        </CoreDialog>
    );
};
