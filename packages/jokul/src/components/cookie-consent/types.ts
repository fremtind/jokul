import type { WithChildren } from "../../utilities/types.js";

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
         * Mixpanel-prosjekttoken for din egen sporing av Jøkul-komponenter
         * (f.eks. knappeklikk). Uten denne blir sporing en no-op. Sporing er
         * en del av samtykket her - den aktiveres kun når brukeren har gitt
         * statistikk-samtykke. Se TRACKING.md for full dokumentasjon.
         */
        mixpanelToken?: string;
        /**
         * Identifiserer appen/teamet i sporingshendelsene. Nyttig hvis flere
         * apper deler samme Mixpanel-prosjekt, men sendes også til
         * Jøkul-teamets sentrale prosjekt (helt uavhengig av `mixpanelToken`)
         * slik at Jøkul kan se hvilke apper/team som faktisk bruker
         * komponentbiblioteket. Helt valgfritt - sett den ikke hvis du ikke
         * ønsker at appen din skal identifiseres i Jøkuls sentrale data. Se
         * TRACKING.md.
         */
        appName?: string;
    };

/**
 * En verdi som kan JSON-serialiseres uten tap/feil - brukt til å begrense
 * `TrackingProps` under, slik at typen ikke tillater verdier som
 * `bigint` eller sirkulære objekter (som ville kastet i
 * `JSON.stringify`). Se også `serializeTracking()` i
 * `tracking/serializeTracking.ts`, som er et ekstra forsvarslag mot
 * forbrukere som likevel omgår typen (via `any`/ren JS).
 */
export type JsonPrimitive = string | number | boolean | null;
export type JsonValue =
    | JsonPrimitive
    | readonly JsonValue[]
    | { [key: string]: JsonValue | undefined };

/** Egenskapene som kan sendes med `tracking`-propen. */
export type TrackingProps = Record<string, JsonValue | undefined>;

/**
 * Fellesprop for å legge ekstra, teamspesifikke egenskaper til en
 * komponents automatiske sporingshendelse, f.eks.
 * `<Button tracking={{ orderId, flow: "checkout" }} />`.
 *
 * Feltene JSON-serialiseres til `data-jkl-tracking`-attributtet på
 * komponentens rot-DOM-element, og fanges KUN opp av teamets egen
 * Mixpanel-instans (hvis du har satt opp `mixpanelToken`) - aldri av
 * Jøkul-teamets sentrale prosjekt. Se TRACKING.md.
 */
export interface WithTracking {
    tracking?: TrackingProps;
}
