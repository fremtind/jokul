import type { WithChildren } from "../../utilities/types.js";
import type { Tracking } from "../types.js";

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
    /**
     * Tekst for lenken til informasjonssiden.
     */
    aboutPageLinkText?: string;
    tracking?: Tracking;
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
        /**
         * Navnet på appen/løsningen som bruker Jøkul. Settes som
         * `data-track-app-name` på `<html>` når brukeren har samtykket til
         * statistikk.
         *
         * Valgfri i denne versjonen, men blir **påkrevd fra Jøkul 7** når
         * `statistics` er satt — se `TRACKING.md`.
         */
        appName?: string;
        /**
         * Teamet som eier/drifter appen. Settes som `data-track-team` på
         * `<html>` når brukeren har samtykket til statistikk.
         *
         * Valgfri i denne versjonen, men blir **påkrevd fra Jøkul 7** når
         * `statistics` er satt — se `TRACKING.md`.
         */
        team?: string;
    };
