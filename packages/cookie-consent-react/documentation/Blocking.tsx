import React from "react";
import { ExampleComponentProps } from "@fremtind/jkl-portal-components";
import { CookieConsentProvider, CookieConsent, useCookieConsent } from "../src";
import { TertiaryButton } from "@fremtind/jkl-button-react";
import "@fremtind/jkl-cookie-consent/cookie-consent.min.css";
import "@fremtind/jkl-button/button.min.css";
import "@fremtind/jkl-list/list.min.css";

const Content = () => {
    const { openConsentModalWithSettings } = useCookieConsent();

    return (
        <TertiaryButton data-testid="trigger-cookie-consent" onClick={openConsentModalWithSettings}>
            Informasjonskapsler
        </TertiaryButton>
    );
};

export const Blocking = ({}: ExampleComponentProps) => {
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
