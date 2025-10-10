import { describe, expect, it, vi } from "vitest";
import {
    convertBooleanToConsentValue,
    getConsentCookie,
    setConsentCookie,
    shouldShowConsentDialog,
} from "./cookieConsentUtils.js";
import type { Consent, ConsentRequirement, ConsentState } from "./types.js";

const generateRequirement = (
    functional: boolean,
    statistics: boolean,
): ConsentRequirement => ({
    functional,
    statistics,
});

const generateConsent = (
    functional: ConsentState,
    statistics: ConsentState,
): Consent => ({
    functional,
    statistics,
});

const COOKIE_NAME = "fremtind-cookie-consent";

describe("cookieConsentUtils/getConsentCookie", () => {
    const setDocumentCookieState = (consents: [string, string][]) => {
        Object.defineProperty(document, "cookie", {
            get: vi
                .fn()
                .mockImplementation(
                    () =>
                        `XSRF-TOKEN=55f95277-dc4d-4ed0-85be-6beb1022f408; ${consents
                            .map((c) => c.join("="))
                            .join(";")}`,
                ),
            configurable: true,
        });
    };

    it("henter fremtind-cookie", () => {
        const consent = generateConsent(null, "accepted");
        setDocumentCookieState([[COOKIE_NAME, JSON.stringify(consent)]]);
        expect(getConsentCookie({ name: COOKIE_NAME })).toEqual(consent);
    });

    it("returnerer undefined når ingen consent cookie er satt", () => {
        setDocumentCookieState([]);
        expect(getConsentCookie({ name: COOKIE_NAME })).toBeUndefined();
    });

    it("henter fremtind-cookie", () => {
        const consent = generateConsent(null, "accepted");
        setDocumentCookieState([[COOKIE_NAME, JSON.stringify(consent)]]);
        expect(getConsentCookie({ name: COOKIE_NAME })).toEqual(consent);
    });
});

describe("cookieConsentUtils/setConsentCookie", () => {
    it("setter fremtind-cookie-consent med riktig verdi", () => {
        const mockGet = vi.fn();
        Object.defineProperty(document, "cookie", {
            set: mockGet.mockImplementation(() => {}),
            configurable: true,
        });

        setConsentCookie({
            consent: generateConsent(null, null),
            name: COOKIE_NAME,
        });
        expect(mockGet).toHaveBeenCalled();
        expect(mockGet).toHaveBeenCalledWith(
            `${COOKIE_NAME}=${JSON.stringify(
                generateConsent(null, null),
            )};max-age=10368000;SameSite=Lax`,
        );

        setConsentCookie({
            consent: generateConsent(null, "accepted"),
            name: COOKIE_NAME,
        });
        expect(mockGet).toHaveBeenCalled();
        expect(mockGet).toHaveBeenCalledWith(
            `${COOKIE_NAME}=${JSON.stringify(
                generateConsent(null, "accepted"),
            )};max-age=10368000;SameSite=Lax`,
        );
    });
});

describe("cookieConsentUtils/shouldShowConsentDialog", () => {
    it("viser ikke consent når cookie ikke finnes, og ingen consent er påkrevd", () => {
        expect(
            shouldShowConsentDialog(
                generateRequirement(false, false),
                undefined,
            ),
        ).toEqual(false);
    });

    it("viser consent når cookie ikke finnes, og en eller flere consent er påkrevd", () => {
        expect(
            shouldShowConsentDialog(
                generateRequirement(true, false),
                undefined,
            ),
        ).toEqual(true);
        expect(
            shouldShowConsentDialog(
                generateRequirement(true, false),
                undefined,
            ),
        ).toEqual(true);
        expect(
            shouldShowConsentDialog(generateRequirement(true, true), undefined),
        ).toEqual(true);
    });

    it("viser ikke consent når cookie finnes, og ingen consent er påkrevd", () => {
        expect(
            shouldShowConsentDialog(
                generateRequirement(false, false),
                generateConsent(null, null),
            ),
        ).toEqual(false);
        expect(
            shouldShowConsentDialog(
                generateRequirement(false, false),
                generateConsent("denied", "accepted"),
            ),
        ).toEqual(false);
    });

    it("viser ikke consent når cookie og requirement er like", () => {
        expect(
            shouldShowConsentDialog(
                generateRequirement(true, false),
                generateConsent("accepted", "denied"),
            ),
        ).toEqual(false);
        expect(
            shouldShowConsentDialog(
                generateRequirement(true, true),
                generateConsent("accepted", "accepted"),
            ),
        ).toEqual(false);
        expect(
            shouldShowConsentDialog(
                generateRequirement(true, true),
                generateConsent("accepted", "accepted"),
            ),
        ).toEqual(false);
    });

    it("vise consent når consent ikke dekker consentet", () => {
        expect(
            shouldShowConsentDialog(
                generateRequirement(true, false),
                generateConsent(null, null),
            ),
        ).toEqual(true);
        expect(
            shouldShowConsentDialog(
                generateRequirement(true, false),
                generateConsent(null, "denied"),
            ),
        ).toEqual(true);
        expect(
            shouldShowConsentDialog(
                generateRequirement(true, false),
                generateConsent(null, "accepted"),
            ),
        ).toEqual(true);
    });

    it("viser ikke consent når consent er avslått", () => {
        expect(
            shouldShowConsentDialog(
                generateRequirement(true, false),
                generateConsent("denied", "denied"),
            ),
        ).toEqual(false);
        expect(
            shouldShowConsentDialog(
                generateRequirement(true, false),
                generateConsent("accepted", "denied"),
            ),
        ).toEqual(false);
        expect(
            shouldShowConsentDialog(
                generateRequirement(true, false),
                generateConsent("accepted", "accepted"),
            ),
        ).toEqual(false);
    });
});

describe("cookieConsentUtils/convertBooleanToConsentValue", () => {
    it("konverterer et consent om til verdier som et form kan bruke", () => {
        expect(convertBooleanToConsentValue(false)).toEqual("denied");
        expect(convertBooleanToConsentValue(true)).toEqual("accepted");
        expect(convertBooleanToConsentValue(undefined)).toEqual(null);
    });
});
