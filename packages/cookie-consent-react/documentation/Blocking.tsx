import React from "react";
import { ExampleComponentProps } from "@fremtind/jkl-portal-components";
import { CookieConsentProvider, CookieConsent, useCookieConsent } from "../src";
import { TertiaryButton } from "@fremtind/jkl-button-react";
import "@fremtind/jkl-cookie-consent/cookie-consent.min.css";

const Content = () => {
    const { openConsentModalWithSettings } = useCookieConsent();

    return (
        <TertiaryButton data-testId="trigger-cookie-consent" onClick={openConsentModalWithSettings}>
            Informasjonskapsler
        </TertiaryButton>
    );
};

export const Blocking = ({}: ExampleComponentProps) => {
    if (typeof window === "undefined") {
        return null;
    }

    return (
        <CookieConsentProvider functional marketing statistics>
            <Content />
            <CookieConsent blocking />
        </CookieConsentProvider>
    );
};
