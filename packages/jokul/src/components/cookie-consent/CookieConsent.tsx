import React, { useEffect, useId } from "react";
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
import { setConsentCookie } from "./cookieConsentUtils.js";
import type { Consent, ConsentState, CookieConsentProps } from "./types.js";

export const CookieConsent = ({
    blocking,
    onAccept,
    aboutPage = "https://www.fremtind.no/informasjonskapsler",
    ...rest
}: CookieConsentProps): JSX.Element | null => {
    const {
        currentConsent,
        cookieName,
        cookieDomain,
        cookiePath,
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
        onAccept?.({
            functional: "denied",
            statistics: "denied",
            marketing: "denied",
        });

        return null;
    }

    const updateCookies = (state: ConsentState) => {
        const updatedConsent: Consent = {
            ...currentConsent,
            functional: state,
            statistics: state,
            marketing: "denied",
        };

        setConsentCookie({
            consent: updatedConsent,
            name: cookieName,
            domain: cookieDomain,
            path: cookiePath,
        });

        onAccept?.(updatedConsent);

        updateCurrentConsents();

        instance?.hide();
    };

    return ReactDOM.createPortal(
        <ModalContainer
            {...modalConfig.container}
            {...rest}
            data-cookie-consent-open={isOpen}
        >
            <ModalOverlay {...modalConfig.overlay} />
            <Modal {...modalConfig.modal}>
                <ModalHeader>
                    <ModalTitle {...modalConfig.title}>
                        Får vi bruke valgfrie informasjonskapsler?
                    </ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <Flex direction="column" gap="m">
                        <p>
                            Vi ønsker å samle anonym statistikk for å forstå
                            hvordan nettsidene våre brukes. Det hjelper oss til
                            å gjøre innhold og løsninger bedre og mer
                            brukervennlige.
                        </p>
                        <p>
                            <Link href={aboutPage} target="_blank">
                                Les mer om hvilke informasjonskapsler vi lagrer
                                her
                            </Link>
                            .
                        </p>
                    </Flex>
                </ModalBody>
                <ModalActions>
                    <Button
                        variant="secondary"
                        data-testid="jkl-cookie-consent-godta"
                        type="button"
                        onClick={() => updateCookies("accepted")}
                    >
                        Ja, det er greit
                    </Button>
                    <Button
                        variant="secondary"
                        data-testid="jkl-cookie-consent-nekt"
                        type="button"
                        onClick={() => updateCookies("denied")}
                    >
                        Nei takk
                    </Button>
                </ModalActions>
            </Modal>
        </ModalContainer>,
        document.body,
    );
};
