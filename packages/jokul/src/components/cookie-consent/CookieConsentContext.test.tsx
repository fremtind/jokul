import { renderHook } from "@testing-library/react";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import type { WithChildren } from "../../core/types.js";
import {
    CookieConsentProvider,
    useInternalState,
} from "./CookieConsentContext.js";
import type { Consent, ConsentState } from "./types.js";

const generateConsent = (
    marketing: ConsentState,
    functional: ConsentState,
    statistics: ConsentState,
): Consent => ({
    marketing,
    functional,
    statistics,
});

describe("cookie-consent-react/CookieConsentContext", () => {
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
    it("initial state behaves as expected", () => {
        const { result } = renderHook(() => useInternalState(), {
            wrapper: CookieConsentProvider,
        });

        expect(result.current.isOpen).toEqual(false);
        expect(result.current.requirement).toEqual({});
        expect(result.current.currentConsent).toEqual(
            generateConsent(null, null, null),
        );
    });

    it("context gets the initial consent state from cookies", () => {
        setDocumentCookieState([
            [
                "fremtind-cookie-consent",
                JSON.stringify({
                    ...generateConsent(null, "accepted", "denied"),
                }),
            ],
        ]);

        const { result } = renderHook(() => useInternalState(), {
            wrapper: CookieConsentProvider,
        });

        expect(result.current.currentConsent).toEqual(
            generateConsent(null, "accepted", "denied"),
        );
    });

    it("consent is shown when no consent cookie is set", () => {
        const wrapper: React.FC<WithChildren> = ({ children }) => (
            <CookieConsentProvider marketing functional statistics>
                {children}
            </CookieConsentProvider>
        );

        const { result } = renderHook(() => useInternalState(), {
            wrapper,
        });

        expect(result.current.isOpen).toEqual(true);
    });

    it("consent is shown when a consent cookie is set, but doesn't match the requirement", () => {
        setDocumentCookieState([
            [
                "fremtind-cookie-consent",
                JSON.stringify({
                    ...generateConsent(null, "accepted", "denied"),
                }),
            ],
        ]);
        const wrapper: React.FC<WithChildren> = ({ children }) => (
            <CookieConsentProvider marketing functional statistics>
                {children}
            </CookieConsentProvider>
        );

        const { result } = renderHook(() => useInternalState(), {
            wrapper,
        });

        expect(result.current.isOpen).toEqual(true);
    });

    it("consent does not show when consent cookie is set and it matches the requirement", () => {
        setDocumentCookieState([
            [
                "fremtind-cookie-consent",
                JSON.stringify({
                    ...generateConsent("accepted", "accepted", null),
                }),
            ],
        ]);
        const wrapper: React.FC<WithChildren> = ({ children }) => (
            <CookieConsentProvider marketing functional>
                {children}
            </CookieConsentProvider>
        );

        const { result } = renderHook(() => useInternalState(), {
            wrapper,
        });

        expect(result.current.isOpen).toEqual(false);
    });

    it("consent does not show when consent cookie is set and a requirement is denied", () => {
        setDocumentCookieState([
            [
                "fremtind-cookie-consent",
                JSON.stringify({
                    ...generateConsent("denied", "accepted", null),
                }),
            ],
        ]);
        const wrapper: React.FC<WithChildren> = ({ children }) => (
            <CookieConsentProvider marketing functional>
                {children}
            </CookieConsentProvider>
        );

        const { result } = renderHook(() => useInternalState(), {
            wrapper,
        });

        expect(result.current.isOpen).toEqual(false);
    });
});
