import { usePreviousValue } from "@fremtind/jkl-react-hooks";
import React, { useEffect } from "react";
import { useCookieConsentState } from "./CookieConsentContext";
import { CookieConsentModal } from "./CookieConsentModal";
import { setConsentCookie } from "./cookieConsentUtils";
import { AcceptConsentCallback, Consent } from "./types";

export interface CookieConsentProps {
    blocking?: boolean;
    onAccept?: AcceptConsentCallback;
}

export const CookieConsent = ({ blocking, onAccept }: CookieConsentProps): JSX.Element | null => {
    const { dispatch, consent } = useCookieConsentState();
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
    if (navigator && !navigator.cookieEnabled) {
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
        setConsentCookie(updatedConsent);
    };

    // This returns different variants of consents based on the behavior required to get the consent
    // Blocking implies a blocking modal demanding an active action before the user can interact with the application
    if (blocking) {
        return <CookieConsentModal onAccept={handleAccept} />;
    }

    return null;
};
