export type ConsentState = null | "denied" | "accepted";

export type ConsentRequirement = Record<keyof Consent, boolean>;

export interface Consent {
    marketing: ConsentState;
    functional: ConsentState;
    statistics: ConsentState;
}

export interface ConsentComponentBaseProps {
    onAccept: (consent: Consent) => void;
}
