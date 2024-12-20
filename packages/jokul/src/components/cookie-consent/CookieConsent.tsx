import React, { useEffect } from "react";
import { usePreviousValue } from "../../hooks/usePreviousValue/usePreviousValue.js";
import { useCookieConsentState } from "./CookieConsentContext.js";
import { CookieConsentModal } from "./CookieConsentModal.js";
import { setConsentCookie } from "./cookieConsentUtils.js";
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
    const { dispatch, consent, cookieName, cookieDomain } =
        useCookieConsentState();
    const prevConsent = usePreviousValue(consent);

    useEffect(() => {
        if (onAccept) {
            // Prevent onAccept from being triggered every time state changes\
            if (consent !== prevConsent) {
                onAccept(consent);
            }
        }
    }, [onAccept, consent, prevConsent]);

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

    const handleAccept = (newConsent: Partial<Consent>) => {
        // Filter out null values from the new consent
        const newConsentWithoutNullValues = Object.fromEntries(
            Object.entries(newConsent).filter(([, value]) => value != null),
        );

        // Merge the existing consent with the new consent
        const updatedConsent: Consent = {
            ...consent,
            ...newConsentWithoutNullValues,
        };

        dispatch({ type: "UPDATE_CONSENT", payload: updatedConsent });
        dispatch({ type: "SET_SHOW_CONSENT", payload: false });
        setConsentCookie({
            consent: updatedConsent,
            name: cookieName,
            domain: cookieDomain,
        });
    };

    // This returns different variants of consents based on the behavior required to get the consent
    // Blocking implies a blocking modal demanding an active action before the user can interact with the application
    if (blocking) {
        return <CookieConsentModal {...rest} onAccept={handleAccept} />;
    }

    return null;
};
