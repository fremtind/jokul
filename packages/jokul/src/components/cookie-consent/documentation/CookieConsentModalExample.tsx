import { ExampleComponentProps, ExampleKnobsProps } from "doc-utils/index.js";
import React, { FC, useEffect, useState } from "react";
import { TertiaryButton } from "../../button/Button.js";
import { CookieConsent } from "../CookieConsent.js";
import {
    CookieConsentProvider,
    DEFAULT_COOKIE_NAME,
    useCookieConsent,
    useCookieConsentState,
} from "../CookieConsentContext.js";
import {
    buildRequirementsObject,
    setConsentCookie,
} from "../cookieConsentUtils.js";

function clearConsentCookie() {
    setConsentCookie({
        consent: {
            functional: null,
            statistics: null,
            marketing: null,
        },
        name: DEFAULT_COOKIE_NAME,
        maxAge: -1,
    });
}
const Example: FC<{
    functional?: boolean;
    statistics?: boolean;
    marketing?: boolean;
}> = ({ functional = false, statistics = false, marketing = false }) => {
    const { openConsentModalWithDefaults } = useCookieConsent();

    // Start: Kun for demoen
    const { dispatch } = useCookieConsentState();
    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: "SET_SHOW_CONSENT", payload: false });
            dispatch({ type: "SET_SHOW_SETTINGS", payload: false });
            dispatch({
                type: "UPDATE_REQUIREMENTS",
                payload: buildRequirementsObject({
                    functional,
                    statistics,
                    marketing,
                }),
            });
        }, 0);
    }, [dispatch, functional, statistics, marketing]);
    // Slutt: Kun for demoen

    return (
        <>
            <TertiaryButton
                data-testid="trigger-cookie-consent"
                onClick={openConsentModalWithDefaults}
            >
                Informasjonskapsler
            </TertiaryButton>
            <CookieConsent blocking onAccept={console.log} />
        </>
    );
};

export const cookieConsentModalExampleKnobs: ExampleKnobsProps = {
    boolProps: [
        { prop: "Functional", defaultValue: true },
        "Statistics",
        "Marketing",
    ],
};

export const CookieConsentModalExample: FC<ExampleComponentProps> = ({
    boolValues,
}) => {
    const [hasMounted, setHasMounted] = useState(false);
    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) {
        return null;
    }

    // Start: Kun for demoen
    clearConsentCookie();
    // Slutt: Kun for demoen

    return (
        <CookieConsentProvider
            functional={boolValues?.["Functional"]}
            statistics={boolValues?.["Statistics"]}
            marketing={boolValues?.["Marketing"]}
        >
            <Example
                functional={boolValues?.["Functional"]}
                statistics={boolValues?.["Statistics"]}
                marketing={boolValues?.["Marketing"]}
            />
        </CookieConsentProvider>
    );
};
