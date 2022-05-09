import React, { useEffect, useState, VFC } from "react";
import { TertiaryButton } from "@forbrukerradet/jkl-button-react";
import { CookieConsentProvider, CookieConsent, useCookieConsent } from "../src";
import { CodeExample, ExampleComponentProps } from "../../../doc-utils";
import { setConsentCookie } from "../src/cookieConsentUtils";
import { useCookieConsentState } from "../src/CookieConsentContext";

function clearConsentCookie() {
    setConsentCookie(
        {
            functional: null,
            statistics: null,
            marketing: null,
        },
        -1,
    );
}
const Example: VFC<{ functional?: boolean; statistics?: boolean; marketing?: boolean }> = ({
    functional = false,
    statistics = false,
    marketing = false,
}) => {
    const { openConsentModalWithSettings } = useCookieConsent();

    // Start: Kun for demoen
    const { dispatch } = useCookieConsentState();
    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: "SET_SHOW_CONSENT", payload: false });
            dispatch({ type: "SET_SHOW_SETTINGS", payload: false });
            dispatch({
                type: "UPDATE_REQUIREMENTS",
                payload: {
                    functional,
                    statistics,
                    marketing,
                },
            });
        }, 0);
    }, [dispatch, functional, statistics, marketing]);
    // Slutt: Kun for demoen

    return (
        <>
            <TertiaryButton data-testid="trigger-cookie-consent" onClick={openConsentModalWithSettings}>
                Informasjonskapsler
            </TertiaryButton>
            <CookieConsent blocking onAccept={console.log} />
        </>
    );
};

export const Blocking: VFC<ExampleComponentProps> = ({ boolValues }) => {
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

export const blockingExampleCode: CodeExample = ({ boolValues }) => `
const Example = () => {
    const { openConsentModalWithSettings } = useCookieConsent();
    return (
        <>
            <TertiaryButton onClick={openConsentModalWithSettings}>
                Informasjonskapsler
            </TertiaryButton>
            <CookieConsent blocking onAccept={handleUserChoices} />
        </>
    );
};

export const App = () => {
    return (
        <CookieConsentProvider
            functional={${boolValues?.["Functional"]}}
            statistics={${boolValues?.["Statistics"]}}
            marketing={${boolValues?.["Marketing"]}}
        >
            <Example />
        </CookieConsentProvider>
    );
};
`;
