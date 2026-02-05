import type { WithChildren } from "../../core/types.js";

export type ConsentState = null | "denied" | "accepted";

export type ConsentRequirement = Partial<Record<keyof Consent, boolean>>;

export type Consent = {
    functional?: ConsentState;
    statistics?: ConsentState;
    marketing?: ConsentState;
};

export interface CookieConsentProps {
    blocking?: boolean;
    onAccept?: AcceptConsentCallback;
    /**
     * Lenke til informasjonssiden til cookiene i løsningen din.
     */
    aboutPage: string;
}

export type AcceptConsentCallback = (consent: Consent) => void;

export type ConsentComponentBaseProps = {
    className?: string;
    onAccept: AcceptConsentCallback;
};

export type InternalContext = {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    updateCurrentConsents: () => void;
    requirement: ConsentRequirement;
    currentConsent: Consent;
    cookieName: string;
    cookieDomain?: string;
    cookiePath?: string;
};

export type CookieConsentProviderProps = Partial<ConsentRequirement> &
    WithChildren & {
        cookieAdapter?: () => Consent | undefined;
        cookieName?: string;
        cookieDomain?: string;
        cookiePath?: string;
    };
