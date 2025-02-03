"use client";

import { CookieConsentProvider } from "@fremtind/jokul/components/cookie-consent";

type CookieConsentProps = {
    children: React.ReactNode;
};

export const CookieConsent: React.FC<CookieConsentProps> = ({ children }) => {
    return (
        <CookieConsentProvider statistics functional>
            {children}
        </CookieConsentProvider>
    );
};
