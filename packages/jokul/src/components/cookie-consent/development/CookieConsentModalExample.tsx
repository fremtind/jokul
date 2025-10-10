import React, { type FC, useEffect, useState } from "react";
import type {
    ExampleComponentProps,
    ExampleKnobsProps,
} from "utils/dev-example/index.js";
import { TertiaryButton } from "../../button/Button.js";
import { CookieConsent } from "../CookieConsent.js";
import {
    CookieConsentProvider,
    useCookieConsent,
} from "../CookieConsentContext.js";
import { setConsentCookie } from "../cookieConsentUtils.js";

export const knobs: ExampleKnobsProps = {
    boolProps: [
        { prop: "Blocking", defaultValue: true },
        { prop: "Functional", defaultValue: true },
        "Statistics",
    ],
};

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
                aboutPage="https://www.fremtind.no/informasjonskapsler"
                blocking={blocking}
                onAccept={(newConsents) =>
                    console.log("Updated consents: ", newConsents)
                }
            />
        </>
    );
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
            },
            name: "demo-consent-cookie",
        });
        setHasResetCookie(true);
    }, []);

    if (!hasResetCookie) {
        return null;
    }

    return (
        <CookieConsentProvider
            cookieName="demo-consent-cookie"
            cookiePath="/"
            functional={boolValues?.["Functional"]}
            statistics={boolValues?.["Statistics"]}
        >
            <Example blocking={boolValues?.["Blocking"] || false} />
        </CookieConsentProvider>
    );
};
