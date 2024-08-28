import { WithChildren } from "@fremtind/jkl-core";
import React, { useEffect, useMemo } from "react";
import { shouldShowConsentDialog, getConsentCookie } from "./cookieConsentUtils";
import type { Consent, ConsentRequirement } from "./types";

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

interface UpdateRequirementsAction {
    type: "UPDATE_REQUIREMENTS";
    payload: ConsentRequirement;
}

type Action = SetShowConsentAction | UpdateConsentAction | SetShowSettingsAction | UpdateRequirementsAction;
type Dispatch = (action: Action) => void;

interface State {
    isOpen: boolean;
    showSettings: boolean;
    requirement: ConsentRequirement;
    consent: Consent;
}

export const DEFAULT_COOKIE_NAME = "fremtind-cookie-consent";

const CookieConsentContext = React.createContext<
    { state: State; dispatch: Dispatch; cookieName: string; cookieDomain?: string } | undefined
>(undefined);

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

        case "UPDATE_REQUIREMENTS":
            return {
                ...state,
                requirement: {
                    ...state.requirement,
                    ...action.payload,
                },
            };

        default: {
            // @ts-ignore Denne skal ikke oppstå, men den _kan_ oppstå
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
};

export interface CookieConsentProviderProps extends Partial<ConsentRequirement>, WithChildren {
    cookieAdapter?: () => Consent | undefined;
    cookieName?: string;
    cookieDomain?: string;
}

const CookieConsentProvider: React.FC<CookieConsentProviderProps> = ({
    children,
    cookieAdapter,
    marketing,
    functional,
    statistics,
    cookieName = DEFAULT_COOKIE_NAME,
    cookieDomain,
}) => {
    // Load existing consent at initial render
    const consentCookie = useMemo(() => {
        return (
            getConsentCookie({ adapter: cookieAdapter, name: cookieName }) ?? {
                marketing: null,
                functional: null,
                statistics: null,
            }
        );
    }, [cookieAdapter, cookieName]);

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
        if (shouldShowConsentDialog(requirement, consentCookie)) {
            dispatch({ type: "SET_SHOW_CONSENT", payload: true });
        } else if (consentCookie) {
            dispatch({ type: "UPDATE_CONSENT", payload: consentCookie });
        }
    }, [requirement, consentCookie]);

    const value = { state, dispatch, cookieName, cookieDomain };
    return <CookieConsentContext.Provider value={value}>{children}</CookieConsentContext.Provider>;
};

interface UseCookieConsentState extends State {
    dispatch: Dispatch;
    cookieName: string;
    cookieDomain?: string;
}

// control and state for internal use
const useCookieConsentState = (): UseCookieConsentState => {
    const context = React.useContext(CookieConsentContext);
    if (context === undefined) {
        throw new Error("useCookieConsentState must be used within a CookieConsentProvider");
    }

    return {
        dispatch: context.dispatch,
        cookieName: context.cookieName,
        cookieDomain: context.cookieDomain,
        ...context.state,
    };
};

type UseCookieConsent = {
    openConsentModalWithSettings: () => void;
    openConsentModalWithDefaults: () => void;
    /** Se hvilke samtykker som er gitt, om du for eksempel trenger styre UI basert på samtykker. */
    consents: Consent;
};

// expose functionality to be used by consumers
const useCookieConsent = (): UseCookieConsent => {
    const context = React.useContext(CookieConsentContext);
    if (context === undefined) {
        throw new Error("useCookieConsent must be used within a CookieConsentProvider");
    }

    const openConsentModalWithSettings = () => {
        context.dispatch({ type: "SET_SHOW_CONSENT", payload: true });
        context.dispatch({ type: "SET_SHOW_SETTINGS", payload: true });
    };

    const openConsentModalWithDefaults = () => {
        context.dispatch({ type: "SET_SHOW_CONSENT", payload: true });
        context.dispatch({ type: "SET_SHOW_SETTINGS", payload: false });
    };

    const consents = context.state.consent;

    return { openConsentModalWithSettings, openConsentModalWithDefaults, consents };
};

export { CookieConsentProvider, useCookieConsentState, useCookieConsent };
