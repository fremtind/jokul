import React, { type FormEventHandler, useEffect, useId } from "react";
import ReactDOM from "react-dom";
import { Button } from "../button/Button.js";
import { Flex } from "../flex/index.js";
import { Link } from "../link/index.js";
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
import type { Consent, CookieConsentProps } from "./types.js";

export const CookieConsent = ({
    blocking,
    onAccept,
    aboutPage,
    ...rest
}: CookieConsentProps): JSX.Element | null => {
    const {
        currentConsent,
        cookieName,
        cookieDomain,
        cookiePath,
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
            path: cookiePath,
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
                <form>
                    <ModalHeader>
                        <ModalTitle {...modalConfig.title}>
                            Får vi bruke valgfrie informasjonskapsler?
                        </ModalTitle>
                    </ModalHeader>
                    <ModalBody>
                        <Flex direction="column" gap={24}>
                            <p>
                                Vi ønsker å samle anonym statistikk for å forstå
                                hvordan nettsidene våre brukes. Det hjelper oss
                                til å gjøre innhold og løsninger bedre og mer
                                brukervennlige.
                            </p>
                            <p>
                                <Link href={aboutPage}>
                                    Les mer om hvilke informasjonskapsler vi
                                    lagrer her
                                </Link>
                                .
                            </p>
                        </Flex>
                    </ModalBody>
                    <ModalActions>
                        <Button
                            variant="secondary"
                            data-testid="jkl-cookie-consent-godta-alle"
                            type="button"
                            onClick={() => accept()}
                        >
                            Ja, det er greit
                        </Button>
                        <Button
                            variant="secondary"
                            data-testid="jkl-cookie-consent-godta"
                            type="submit"
                        >
                            Nei takk
                        </Button>
                    </ModalActions>
                </form>
            </Modal>
        </ModalContainer>,
        document.body,
    );
};
