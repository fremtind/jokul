import React from "react";
import { ExampleComponentProps } from "@fremtind/jkl-portal-components";
import { CookieConsentProvider, CookieConsent, useCookieConsent } from "../src";
import { TertiaryButton } from "@fremtind/jkl-button-react";
import "@fremtind/jkl-cookie-consent/cookie-consent.min.css";

const Content = () => {
    const { openConsentModalWithSettings } = useCookieConsent();

    return <TertiaryButton onClick={openConsentModalWithSettings}>Informasjonskapsler</TertiaryButton>;
};

export const Blocking = ({}: ExampleComponentProps) => {
    return (
        <CookieConsentProvider>
            <Content />
            <CookieConsent blocking />
        </CookieConsentProvider>
    );
};
