import { TertiaryButton } from "@fremtind/jkl-button-react";
import React, { FC, useEffect, useState } from "react";
import {
    CodeExample,
    ExampleComponentProps,
    ExampleKnobsProps,
} from "../../../doc-utils";
import { CookieConsent, CookieConsentProvider, useCookieConsent } from "../src";
import { setConsentCookie } from "../src/cookieConsentUtils";

const Example: FC<{ blocking: boolean }> = ({ blocking }) => {
    const { openConsentModal, consents } = useCookieConsent();

    useEffect(() => {
        console.log("Current consents:", consents);
    }, [consents]);

    return (
        <>
            <TertiaryButton
                data-testid="trigger-cookie-consent"
                onClick={openConsentModal}
            >
                Informasjonskapsler
            </TertiaryButton>
            <CookieConsent
                blocking={blocking}
                onAccept={(newConsents) =>
                    console.log("Updated consents: ", newConsents)
                }
            />
        </>
    );
};

export const cookieConsentModalExampleKnobs: ExampleKnobsProps = {
    boolProps: [
        { prop: "Blocking", defaultValue: true },
        { prop: "Functional", defaultValue: true },
        "Statistics",
        "Marketing",
    ],
};

export const CookieConsentModalExample: FC<ExampleComponentProps> = ({
    boolValues,
}) => {
    const [hasResetCookie, setHasResetCookie] = useState(false);
    useEffect(() => {
        // Write an initial cookie to avoid having the modal pop up on first render
        // We are setting the values to "denied" in order to ensure that the
        // component does not automatically open itself, which it would have
        // done if it contained null-values. In an actual application context
        // there is no need to initialise anything.
        setConsentCookie({
            consent: {
                functional: "denied",
                statistics: "denied",
                marketing: "denied",
            },
            name: "demo-consent-cookie",
        });
        setHasResetCookie(true);
    }, [setHasResetCookie, boolValues]);

    if (!hasResetCookie) {
        return null;
    }

    return (
        <CookieConsentProvider
            cookieName="demo-consent-cookie"
            cookiePath="/"
            functional={boolValues?.["Functional"]}
            statistics={boolValues?.["Statistics"]}
            marketing={boolValues?.["Marketing"]}
        >
            <Example blocking={boolValues?.["Blocking"] || false} />
        </CookieConsentProvider>
    );
};

export const cookieConsentModalExampleCode: CodeExample = ({ boolValues }) => `
const Example: FC<{ blocking: boolean }> = ({ blocking }) => {
    const { openConsentModal, consents } = useCookieConsent();

    useEffect(() => {
        console.log("Current consents:", consents);
    }, [consents]);

    return (
        <>
            <TertiaryButton
                data-testid="trigger-cookie-consent"
                onClick={openConsentModal}
            >
                Informasjonskapsler
            </TertiaryButton>
            <CookieConsent
                blocking={blocking}
                onAccept={(newConsents) =>
                    console.log("Updated consents: ", newConsents)
                }
            />
        </>
    );
};

export const App = () => {
    const [hasResetCookie, setHasResetCookie] = useState(false);
    useEffect(() => {
        // Write a cookie to avoid having the modal pop up on first render
        setConsentCookie({
            consent: {
                functional: "denied",
                statistics: "denied",
                marketing: "denied",
            },
            name: "demo-consent-cookie",
        });
        setHasResetCookie(true);
    }, [setHasResetCookie, boolValues]);

    if (!hasResetCookie) {
        return null;
    }

    return (
        <CookieConsentProvider
            cookieName="demo-consent-cookie"
            functional={${boolValues?.["Functional"]}}
            statistics={${boolValues?.["Statistics"]}}
            marketing={${boolValues?.["Marketing"]}}
        >
            <Example blocking={${boolValues?.["Blocking"] || false}} />
        </CookieConsentProvider>
    );
};
`;
