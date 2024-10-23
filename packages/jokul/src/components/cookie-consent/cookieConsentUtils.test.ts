import {
    convertBooleanConsentObjectToConsentObject,
    convertBooleanToConsentValue,
    convertConsentObjectToBooleans,
    convertConsentValueToFormValue,
    getConsentCookie,
    setConsentCookie,
    shouldShowConsentDialog,
} from "./cookieConsentUtils.js";
import type { Consent, ConsentRequirement, ConsentState } from "./types.js";

const generateRequirement = (marketing: boolean, functional: boolean, statistics: boolean): ConsentRequirement => ({
    marketing,
    functional,
    statistics,
});

const generateConsent = (marketing: ConsentState, functional: ConsentState, statistics: ConsentState): Consent => ({
    marketing,
    functional,
    statistics,
});

const COOKIE_NAME = "fremtind-cookie-consent";

describe("cookieConsentUtils/getConsentCookie", () => {
    const setDocumentCookieState = (consents: [string, string][]) => {
        Object.defineProperty(document, "cookie", {
            get: jest
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
        const consent = generateConsent(null, "accepted", null);
        setDocumentCookieState([[COOKIE_NAME, JSON.stringify(consent)]]);
        expect(getConsentCookie({ name: COOKIE_NAME })).toEqual(consent);
    });

    it("returnerer undefined når ingen consent cookie er satt", () => {
        setDocumentCookieState([]);
        expect(getConsentCookie({ name: COOKIE_NAME })).toBeUndefined();
    });

    it("henter fremtind-cookie", () => {
        const consent = generateConsent(null, "accepted", "accepted");
        setDocumentCookieState([[COOKIE_NAME, JSON.stringify(consent)]]);
        expect(getConsentCookie({ name: COOKIE_NAME })).toEqual(consent);
    });
});

describe("cookieConsentUtils/setConsentCookie", () => {
    it("setter fremtind-cookie-consent med riktig verdi", () => {
        const mockGet = jest.fn();
        Object.defineProperty(document, "cookie", {
            set: mockGet.mockImplementation(),
            configurable: true,
        });

        setConsentCookie({ consent: generateConsent(null, null, null), name: COOKIE_NAME });
        expect(mockGet).toHaveBeenCalled();
        expect(mockGet).toHaveBeenCalledWith(
            `${COOKIE_NAME}=${JSON.stringify(generateConsent(null, null, null))};max-age=10368000;SameSite=Lax`,
        );

        setConsentCookie({ consent: generateConsent(null, "accepted", "denied"), name: COOKIE_NAME });
        expect(mockGet).toHaveBeenCalled();
        expect(mockGet).toHaveBeenCalledWith(
            `${COOKIE_NAME}=${JSON.stringify(
                generateConsent(null, "accepted", "denied"),
            )};max-age=10368000;SameSite=Lax`,
        );
    });
});

describe("cookieConsentUtils/shouldShowConsentDialog", () => {
    it("viser ikke consent når cookie ikke finnes, og ingen consent er påkrevd", () => {
        expect(shouldShowConsentDialog(generateRequirement(false, false, false), undefined)).toEqual(false);
    });

    it("viser consent når cookie ikke finnes, og en eller flere consent er påkrevd", () => {
        expect(shouldShowConsentDialog(generateRequirement(true, false, false), undefined)).toEqual(true);
        expect(shouldShowConsentDialog(generateRequirement(true, false, true), undefined)).toEqual(true);
        expect(shouldShowConsentDialog(generateRequirement(true, true, false), undefined)).toEqual(true);
    });

    it("viser ikke consent når cookie finnes, og ingen consent er påkrevd", () => {
        expect(
            shouldShowConsentDialog(generateRequirement(false, false, false), generateConsent(null, null, null)),
        ).toEqual(false);
        expect(
            shouldShowConsentDialog(
                generateRequirement(false, false, false),
                generateConsent("denied", "accepted", "denied"),
            ),
        ).toEqual(false);
    });

    it("viser ikke consent når cookie og requirement er like", () => {
        expect(
            shouldShowConsentDialog(
                generateRequirement(true, false, false),
                generateConsent("accepted", "denied", "denied"),
            ),
        ).toEqual(false);
        expect(
            shouldShowConsentDialog(
                generateRequirement(true, true, false),
                generateConsent("accepted", "accepted", "denied"),
            ),
        ).toEqual(false);
        expect(
            shouldShowConsentDialog(
                generateRequirement(true, true, true),
                generateConsent("accepted", "accepted", "accepted"),
            ),
        ).toEqual(false);
    });

    it("vise consent når consent ikke dekker consentet", () => {
        expect(
            shouldShowConsentDialog(generateRequirement(true, false, false), generateConsent(null, null, null)),
        ).toEqual(true);
        expect(
            shouldShowConsentDialog(generateRequirement(true, false, true), generateConsent(null, "denied", "denied")),
        ).toEqual(true);
        expect(
            shouldShowConsentDialog(
                generateRequirement(true, false, true),
                generateConsent(null, "accepted", "denied"),
            ),
        ).toEqual(true);
    });

    it("viser ikke consent når consent er avslått", () => {
        expect(
            shouldShowConsentDialog(
                generateRequirement(true, false, false),
                generateConsent("denied", "denied", "denied"),
            ),
        ).toEqual(false);
        expect(
            shouldShowConsentDialog(
                generateRequirement(true, false, true),
                generateConsent("accepted", "denied", "denied"),
            ),
        ).toEqual(false);
        expect(
            shouldShowConsentDialog(
                generateRequirement(true, false, true),
                generateConsent("accepted", "accepted", "denied"),
            ),
        ).toEqual(false);
    });
});

describe("cookieConsentUtils/convertConsentValueToFormValue", () => {
    it("konverterer et consent om til verdier som et form kan bruke", () => {
        expect(convertConsentValueToFormValue(null)).toEqual(undefined);
        expect(convertConsentValueToFormValue("accepted")).toEqual(true);
        expect(convertConsentValueToFormValue("denied")).toEqual(false);
    });
});

describe("cookieConsentUtils/convertBooleanToConsentValue", () => {
    it("konverterer et consent om til verdier som et form kan bruke", () => {
        expect(convertBooleanToConsentValue(false)).toEqual("denied");
        expect(convertBooleanToConsentValue(true)).toEqual("accepted");
        expect(convertBooleanToConsentValue(undefined)).toEqual(null);
    });
});

describe("cookieConsentUtils/convertConsentBooleanObjectToConsentObject", () => {
    it("konverterer et objekt med booleans til et consent", () => {
        expect(
            convertBooleanConsentObjectToConsentObject({
                functional: true,
                marketing: false,
                statistics: false,
            }),
        ).toEqual({
            functional: "accepted",
            marketing: "denied",
            statistics: "denied",
        });

        expect(
            convertBooleanConsentObjectToConsentObject({
                functional: true,
                marketing: false,
            }),
        ).toEqual({
            functional: "accepted",
            marketing: "denied",
            statistics: null,
        });
    });
});

describe("cookieConsentUtils/convertConsentObjectToBooleans", () => {
    it("konverterer et consent objekt til et objekt med booleans", () => {
        expect(
            convertConsentObjectToBooleans({
                functional: "accepted",
                marketing: "denied",
            }),
        ).toEqual({
            functional: true,
            marketing: false,
            statistics: undefined,
        });
    });
});
