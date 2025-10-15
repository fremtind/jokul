import React, { useContext, useMemo, useState } from "react";
import {
    buildRequirementsObject,
    getConsentCookie,
    shouldShowConsentDialog,
} from "./cookieConsentUtils.js";
import type {
    Consent,
    CookieConsentProviderProps,
    InternalContext,
} from "./types.js";

export const DEFAULT_COOKIE_NAME = "fremtind-cookie-consent";

const Context = React.createContext<InternalContext | undefined>(undefined);

export const CookieConsentProvider: React.FC<CookieConsentProviderProps> = ({
    children,
    cookieAdapter,
    functional,
    statistics,
    cookieName = DEFAULT_COOKIE_NAME,
    cookieDomain,
    cookiePath,
}) => {
    const [timestamp, setTimestamp] = useState(() => Date.now());

    const requirement = useMemo(
        () => buildRequirementsObject({ functional, statistics }),
        [functional, statistics],
    );

    /* Use timestamp as a dependency to be able to force re-reading of cookie */
    // biome-ignore lint/correctness/useExhaustiveDependencies:
    const consentCookie = useMemo(() => {
        return (
            getConsentCookie({ adapter: cookieAdapter, name: cookieName }) ?? {
                functional: null,
                statistics: null,
            }
        );
    }, [cookieAdapter, cookieName, timestamp]);

    const [isOpen, setIsOpen] = useState(() => {
        return shouldShowConsentDialog(requirement, consentCookie);
    });

    return (
        <Context.Provider
            value={{
                isOpen,
                setIsOpen,
                updateCurrentConsents: () => setTimestamp(Date.now()),
                requirement,
                currentConsent: consentCookie,
                cookieName,
                cookieDomain,
                cookiePath,
            }}
        >
            {children}
        </Context.Provider>
    );
};

export const useInternalState = () => {
    const context = React.useContext(Context);
    if (context === undefined) {
        throw new Error(
            "CookieConsent must be used within a CookieConsentProvider",
        );
    }

    return context;
};

type UseCookieConsent = {
    openConsentModal: () => void;
    consents: Consent;
};

export const useCookieConsent = (): UseCookieConsent => {
    const context = useContext(Context);

    if (context === undefined) {
        throw new Error(
            "useCookieConsent must be used within a CookieConsentProvider",
        );
    }

    const openConsentModal = () => {
        context.setIsOpen(true);
    };

    const consents = context.currentConsent;

    return { openConsentModal, consents };
};
