import React, { useEffect, useMemo } from "react";
import type { Consent, ConsentRequirement } from "./types";
import { shouldShowConsentDialog, getConsentCookie } from "./cookieConsentUtils";

// https://kentcdodds.com/blog/how-to-use-react-context-effectively

interface SetShowConsentAction {
    type: "SET_SHOW_CONSENT";
    payload: boolean;
}

interface SetShowSettingsAction {
    type: "SET_SHOW_SETTINGS";
    payload: boolean;
}

interface UpdateConsentAction {
    type: "UPDATE_CONSENT";
    payload: Consent;
}

type Action = SetShowConsentAction | UpdateConsentAction | SetShowSettingsAction;
type Dispatch = (action: Action) => void;

interface State {
    isOpen: boolean;
    showSettings: boolean;
    requirement: ConsentRequirement;
    consent: Consent;
}

const CookieConsentContext = React.createContext<{ state: State; dispatch: Dispatch } | undefined>(undefined);

const cookieConsentReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "SET_SHOW_CONSENT":
            return { ...state, isOpen: action.payload };

        case "SET_SHOW_SETTINGS":
            return {
                ...state,
                showSettings: action.payload,
            };

        case "UPDATE_CONSENT":
            return {
                ...state,
                consent: {
                    ...state.consent,
                    ...action.payload,
                },
            };

        default: {
            // @ts-ignore Denne skal ikke oppstå, men den _kan_ oppstå
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
};

const CookieConsentProvider: React.FC<{ cookieAdapter?: () => Consent | undefined } & Partial<ConsentRequirement>> = ({
    children,
    cookieAdapter,
    marketing,
    functional,
    statistics,
}) => {
    // Load existing consent at initial render
    const consentCookie = useMemo(() => {
        return (
            getConsentCookie(cookieAdapter) ?? {
                marketing: null,
                functional: null,
                statistics: null,
            }
        );
    }, [cookieAdapter]);

    const requirement = useMemo(
        () => ({
            marketing: marketing ?? false,
            functional: functional ?? false,
            statistics: statistics ?? false,
        }),
        [marketing, functional, statistics],
    );

    const [state, dispatch] = React.useReducer(cookieConsentReducer, {
        isOpen: false,
        showSettings: false,
        requirement,
        consent: consentCookie,
    });

    useEffect(() => {
        const s = shouldShowConsentDialog(requirement, consentCookie);
        if (s) {
            dispatch({ type: "SET_SHOW_CONSENT", payload: true });
        } else if (consentCookie) {
            dispatch({ type: "UPDATE_CONSENT", payload: consentCookie });
        }
    }, [requirement, consentCookie]);

    const value = { state, dispatch };
    return <CookieConsentContext.Provider value={value}>{children}</CookieConsentContext.Provider>;
};

// control and state for internal use
const useCookieConsentState = () => {
    const context = React.useContext(CookieConsentContext);
    if (context === undefined) {
        throw new Error("useCookieConsentState must be used within a CookieConsentProvider");
    }

    return {
        dispatch: context.dispatch,
        ...context.state,
    };
};

// expose functionality to be used by consumers
const useCookieConsent = () => {
    const context = React.useContext(CookieConsentContext);
    if (context === undefined) {
        throw new Error("useCookieConsent must be used within a CookieConsentProvider");
    }

    const openConsentModalWithSettings = () => {
        context.dispatch({ type: "SET_SHOW_CONSENT", payload: true });
        context.dispatch({ type: "SET_SHOW_SETTINGS", payload: true });
    };

    return { openConsentModalWithSettings };
};

export { CookieConsentProvider, useCookieConsentState, useCookieConsent };
