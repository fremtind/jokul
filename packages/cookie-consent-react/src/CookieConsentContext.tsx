import React, { useContext, useMemo, useState } from "react";
import {
    buildRequirementsObject,
    getConsentCookie,
    shouldShowConsentDialog,
} from "./cookieConsentUtils";
import { Consent, CookieConsentProviderProps, InternalContext } from "./types";

export const DEFAULT_COOKIE_NAME = "fremtind-cookie-consent";

const Context = React.createContext<InternalContext | undefined>(undefined);

export const CookieConsentProvider: React.FC<CookieConsentProviderProps> = ({
    children,
    cookieAdapter,
    marketing,
    functional,
    statistics,
    cookieName = DEFAULT_COOKIE_NAME,
    cookieDomain,
    cookiePath,
}) => {
    const [timestamp, setTimestamp] = useState(() => Date.now());

    const requirement = useMemo(
        () => buildRequirementsObject({ marketing, functional, statistics }),
        [marketing, functional, statistics],
    );

    const consentCookie = useMemo(() => {
        return (
            getConsentCookie({ adapter: cookieAdapter, name: cookieName }) ?? {
                marketing: null,
                functional: null,
                statistics: null,
            }
        );
        /* Use timestamp as a dependency to be ablet to force re-reading of cookie */
        /* eslint-disable-next-line react-hooks/exhaustive-deps */
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
