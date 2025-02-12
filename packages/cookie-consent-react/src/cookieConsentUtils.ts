import type { Consent, ConsentRequirement, ConsentState } from "./types";

const getCookie = (name: string) => {
    if (typeof document === "undefined") {
        return undefined;
    }

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

export const getConsentCookie = ({
    adapter,
    name,
}: {
    adapter?: () => Consent | undefined;
    name: string;
}): Consent | undefined => {
    const cookie = getCookie(name);

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

export const setConsentCookie = ({
    consent,
    maxAge = DEFAULT_MAX_AGE,
    name,
    domain,
    path,
}: {
    consent: Consent;
    maxAge?: number;
    name: string;
    domain?: string;
    path?: string;
}): void => {
    document.cookie = [
        `${name}=${JSON.stringify(consent)}`,
        `max-age=${maxAge}`,
        `SameSite=Lax`,
        !!domain && `domain=${domain}`,
        !!path && `path=${path}`,
    ]
        .filter((f) => f)
        .join(";");
};

export const shouldShowConsentDialog = (
    requirement: ConsentRequirement,
    consent: Consent | undefined,
): boolean => {
    if (!consent) {
        // check if requirement has truthy values. should show consent if it has
        return Object.values(requirement).some(
            (requirementValue) => requirementValue,
        );
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

export const convertBooleanToConsentValue = (
    formValue: boolean | undefined,
): ConsentState => {
    if (typeof formValue === "undefined") {
        return null;
    }

    if (formValue === false || String(formValue).toLowerCase() === "false") {
        return "denied";
    }

    return "accepted";
};

export const convertBooleanConsentObjectToConsentObject = (
    consent: Partial<Record<keyof Consent, boolean | undefined>>,
    requirement: ConsentRequirement,
): Consent => {
    return {
        functional: requirement.functional
            ? convertBooleanToConsentValue(consent.functional)
            : undefined,
        statistics: requirement.statistics
            ? convertBooleanToConsentValue(consent.statistics)
            : undefined,
        marketing: requirement.marketing
            ? convertBooleanToConsentValue(consent.marketing)
            : undefined,
    };
};

export const buildRequirementsObject = ({
    marketing,
    functional,
    statistics,
}: ConsentRequirement) => {
    return {
        ...(marketing && { marketing }),
        ...(functional && { functional }),
        ...(statistics && { statistics }),
    };
};
