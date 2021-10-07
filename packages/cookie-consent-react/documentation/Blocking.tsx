import React, { VFC } from "react";
import { CookieConsentProvider, CookieConsent, useCookieConsent } from "../src";
import { TertiaryButton } from "@fremtind/jkl-button-react";

const Content = () => {
    const { openConsentModalWithSettings } = useCookieConsent();

    return (
        <TertiaryButton data-testid="trigger-cookie-consent" onClick={openConsentModalWithSettings}>
            Informasjonskapsler
        </TertiaryButton>
    );
};

export const Blocking: VFC = () => {
    if (typeof window === "undefined") {
        return null;
    }

    return (
        <CookieConsentProvider>
            <Content />
            <CookieConsent blocking />
        </CookieConsentProvider>
    );
};
