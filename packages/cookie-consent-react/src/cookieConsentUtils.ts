import type { Consent, ConsentState, ConsentRequirement } from "./types";

const COOKIE_NAME = "fremtind-cookie-consent";

const getCookie = (name = COOKIE_NAME) => {
    const cookie = document.cookie
        // split a string of cookies into array of cookies
        .split(";")
        // split cookies into [name, value]
        .map((s) => s.trim().split("="))
        // find our golden nugget
        .find((c) => c[0] === name);

    if (!cookie) {
        return undefined;
    }

    return cookie;
};

export const getConsentCookie = (adapter?: () => Consent | undefined) => {
    const cookie = getCookie();

    if (cookie) {
        const consent = JSON.parse(cookie[1]);

        return consent as Consent;
    }

    if (adapter) {
        return adapter();
    }

    return undefined;
};

// 120 days
const DEFAULT_MAX_AGE = 10368000;

export const setConsentCookie = (consent: Consent, maxAge = DEFAULT_MAX_AGE, name = COOKIE_NAME) => {
    const cookie = [];

    cookie.push(`${name}=${JSON.stringify(consent)}`);
    cookie.push(`max-age=${maxAge}`);
    document.cookie = cookie.join(";");
};

export const shouldShowConsentDialog = (requirement: ConsentRequirement, consent: Consent | undefined) => {
    if (!consent) {
        // check if requirement has truthy values. should show consent if it has
        return Object.values(requirement).some((requirementValue) => requirementValue);
    } else {
        // convert to a map to ease accessing dynamic keys
        const consentMap = new Map(Object.entries(consent));

        // pls spare the CPU of converting to an entries array 3 times
        const requirementEntries = Object.entries(requirement);

        for (const [name, required] of requirementEntries) {
            // no need to check more if the value isn't required
            if (!required) {
                continue;
            }

            // cancel and show consent if a value isn't decided
            if (consentMap.get(name) === null) {
                return true;
            }
        }

        return false;
    }
};

export const convertConsentValueToFormValue = (consent: ConsentState) => {
    if (!consent) {
        return undefined;
    }

    if (consent === "denied") {
        return false;
    }

    return true;
};

export const convertBooleanToConsentValue = (formValue: boolean | undefined): ConsentState => {
    if (typeof formValue === "undefined") {
        return null;
    }

    if (formValue === false || String(formValue).toLowerCase() === "false") {
        return "denied";
    }

    return "accepted";
};
