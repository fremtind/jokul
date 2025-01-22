import React, { FormEventHandler, useEffect, useId } from "react";
import ReactDOM from "react-dom";
import { SecondaryButton } from "../button/Button.js";
import {
    Modal,
    ModalActions,
    ModalBody,
    ModalContainer,
    ModalHeader,
    ModalOverlay,
    ModalTitle,
} from "../modal/Modal.js";
import { useModal } from "../modal/useModal.js";
import { useInternalState } from "./CookieConsentContext.js";
import {
    convertBooleanConsentObjectToConsentObject,
    setConsentCookie,
} from "./cookieConsentUtils.js";
import { RequirementCheckbox } from "./RequirementCheckbox.js";
import { AcceptConsentCallback, Consent } from "./types.js";

export interface CookieConsentProps {
    blocking?: boolean;
    onAccept?: AcceptConsentCallback;
}

export const CookieConsent = ({
    blocking,
    onAccept,
    ...rest
}: CookieConsentProps): JSX.Element | null => {
    const {
        currentConsent,
        cookieName,
        cookieDomain,
        requirement,
        isOpen,
        setIsOpen,
        updateCurrentConsents,
    } = useInternalState();

    const [instance, modalConfig] = useModal({
        id: `jkl-cookie-modal-${useId()}`,
        // The optional `role` attribute of the dialog element, either `dialog`
        // (default) or `alertdialog` to make it a modal (preventing closing on
        // click outside of ESC key).
        role: blocking ? "alertdialog" : "dialog",
        // The required dialog title, mandatory in the document
        // to provide context to assistive technology.
        title: "Informasjonskapsler",
    });

    useEffect(() => {
        if (isOpen) {
            instance?.show();
        } else {
            instance?.hide();
        }
    }, [instance, isOpen]);

    useEffect(() => {
        const onHide = () => setIsOpen(false);
        instance?.on("hide", onHide);
        return () => {
            instance?.off("hide", onHide);
        };
    }, [instance, setIsOpen]);

    if (typeof document === "undefined") {
        return null;
    }

    // Cookies are disabled in the browser
    if (typeof navigator !== "undefined" && !navigator.cookieEnabled) {
        if (onAccept) {
            onAccept({
                functional: "denied",
                marketing: "denied",
                statistics: "denied",
            });
        }

        return null;
    }

    const accept = (
        selection = convertBooleanConsentObjectToConsentObject(
            {
                functional: true,
                statistics: true,
                marketing: true,
            },
            requirement,
        ),
    ) => {
        const selectionWithoutEmptyValues = Object.fromEntries(
            Object.entries(selection).filter(
                ([, value]) => typeof value !== "undefined",
            ),
        );

        const updatedConsent: Consent = {
            ...currentConsent,
            ...selectionWithoutEmptyValues,
        };

        setConsentCookie({
            consent: updatedConsent,
            name: cookieName,
            domain: cookieDomain,
        });

        updateCurrentConsents();

        onAccept?.(updatedConsent);

        instance?.hide();
    };

    const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const newConsents = convertBooleanConsentObjectToConsentObject(
            {
                functional: formData.get("functional") === "true",
                statistics: formData.get("statistics") === "true",
                marketing: formData.get("marketing") === "true",
            },
            requirement,
        );

        accept(newConsents);
    };

    return ReactDOM.createPortal(
        <ModalContainer
            {...modalConfig.container}
            {...rest}
            data-cookie-consent-open={isOpen}
        >
            <ModalOverlay {...modalConfig.overlay} />
            <Modal component="form" {...modalConfig.modal} {...{ onSubmit }}>
                <ModalHeader>
                    <ModalTitle {...modalConfig.title}>
                        Velg informasjonskapsler
                    </ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <p>
                        For at nettsidene skal fungere må vi bruke tekniske
                        informasjonskaplser. Disse lagres derfor uten samtykke.
                    </p>
                    {requirement.functional && (
                        <RequirementCheckbox
                            name="functional"
                            label="Tillat funksjonelle"
                            defaultChecked={
                                currentConsent.functional === "accepted"
                            }
                            key={`functional-${currentConsent.functional}`}
                        >
                            Funksjonelle informasjonskapsler lagrer opplysninger
                            om din bruk av nettsidene og hvilke innstillinger du
                            har gjort, slik at du kan få funksjonalitet
                            tilpasset deg.
                        </RequirementCheckbox>
                    )}
                    {requirement.statistics && (
                        <RequirementCheckbox
                            name="statistics"
                            label="Tillat statistikk"
                            defaultChecked={
                                currentConsent.statistics === "accepted"
                            }
                            key={`statistics-${currentConsent.statistics}`}
                        >
                            Informasjonskapslene lagrer statistikk som hjelper
                            oss med å forstå hvordan nettsidene blir brukt, slik
                            at vi kan gjøre dem bedre og enklere å bruke.
                        </RequirementCheckbox>
                    )}
                    {requirement.marketing && (
                        <RequirementCheckbox
                            name="marketing"
                            label="Tillat personlig markedsføring"
                            defaultChecked={
                                currentConsent.marketing === "accepted"
                            }
                            key={`marketing-${currentConsent.marketing}`}
                        >
                            Dette gjør at vi kan gi deg mer relevant og
                            tilpasset markedsføring, også gjennom våre
                            samarbeidspartnere, på for eksempel nettsider,
                            annonser og i sosiale medier.
                        </RequirementCheckbox>
                    )}
                </ModalBody>
                <ModalActions>
                    <SecondaryButton
                        data-testid="jkl-cookie-consent-godta-alle"
                        type="button"
                        onClick={() => accept()}
                    >
                        Godta alle
                    </SecondaryButton>
                    <SecondaryButton
                        data-testid="jkl-cookie-consent-godta"
                        type="submit"
                    >
                        Godta mine valg
                    </SecondaryButton>
                </ModalActions>
            </Modal>
        </ModalContainer>,
        document.body,
    );
};
