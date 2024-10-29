import React, { FC, useCallback, useEffect } from "react";
import ReactDOM from "react-dom";
import { useId } from "../../hooks/useId/useId.js";
import { ModalContainer, ModalOverlay } from "../modal/Modal.js";
import { useModal } from "../modal/useModal.js";
import { CustomConsents } from "./consents/CustomConsents.js";
import { DefaultConsents } from "./consents/DefaultConsents.js";
import { useCookieConsentState } from "./CookieConsentContext.js";
import { convertBooleanConsentObjectToConsentObject } from "./cookieConsentUtils.js";
import { Consent, ConsentComponentBaseProps } from "./types.js";

export const CookieConsentModal: FC<ConsentComponentBaseProps> = ({
    onAccept,
    ...rest
}) => {
    const { isOpen, requirement, showSettings } = useCookieConsentState();

    const handleAccept = useCallback(
        (v: Consent | "implicit") => {
            if (v === "implicit") {
                onAccept(
                    convertBooleanConsentObjectToConsentObject(requirement),
                );
            } else {
                onAccept(v);
            }
        },
        [onAccept, requirement],
    );

    const [instance, modalConfig] = useModal({
        id: useId("jkl-cookie-modal"),
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

    if (typeof document === "undefined") {
        return null;
    }

    return ReactDOM.createPortal(
        <ModalContainer
            {...rest}
            {...modalConfig.container}
            data-testautoid="jkl-cookie-consent-modal"
        >
            <ModalOverlay {...modalConfig.overlay} />
            {showSettings ? (
                <CustomConsents
                    modalConfig={modalConfig}
                    handleAccept={handleAccept}
                />
            ) : (
                <DefaultConsents
                    modalConfig={modalConfig}
                    handleAccept={handleAccept}
                />
            )}
        </ModalContainer>,
        document.body,
    );
};
