import { renderHook } from "@testing-library/react";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import type { WithChildren } from "../../utilities/types.js";
import { JOKUL_VERSION } from "../../version.js";
import {
    CookieConsentProvider,
    useInternalState,
} from "./CookieConsentContext.js";
import type { Consent, ConsentState } from "./types.js";

const generateConsent = (
    functional: ConsentState,
    statistics: ConsentState,
): Consent => ({
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
            generateConsent(null, null),
        );
    });

    it("context gets the initial consent state from cookies", () => {
        setDocumentCookieState([
            [
                "fremtind-cookie-consent",
                JSON.stringify({
                    ...generateConsent(null, "accepted"),
                }),
            ],
        ]);

        const { result } = renderHook(() => useInternalState(), {
            wrapper: CookieConsentProvider,
        });

        expect(result.current.currentConsent).toEqual(
            generateConsent(null, "accepted"),
        );
    });

    it("consent is shown when no consent cookie is set", () => {
        const wrapper: React.FC<WithChildren> = ({ children }) => (
            <CookieConsentProvider functional statistics>
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
                    ...generateConsent(null, "accepted"),
                }),
            ],
        ]);
        const wrapper: React.FC<WithChildren> = ({ children }) => (
            <CookieConsentProvider functional statistics>
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
                    ...generateConsent("accepted", "accepted"),
                }),
            ],
        ]);
        const wrapper: React.FC<WithChildren> = ({ children }) => (
            <CookieConsentProvider functional>{children}</CookieConsentProvider>
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
                    ...generateConsent("denied", "accepted"),
                }),
            ],
        ]);
        const wrapper: React.FC<WithChildren> = ({ children }) => (
            <CookieConsentProvider functional>{children}</CookieConsentProvider>
        );

        const { result } = renderHook(() => useInternalState(), {
            wrapper,
        });

        expect(result.current.isOpen).toEqual(false);
    });

    describe("sporing av versjon, app-navn og team", () => {
        it("setter data-track-jokul-version, data-track-app-name og data-track-team på <html> når statistikk er godtatt", () => {
            setDocumentCookieState([
                [
                    "fremtind-cookie-consent",
                    JSON.stringify({
                        ...generateConsent("accepted", "accepted"),
                    }),
                ],
            ]);
            const wrapper: React.FC<WithChildren> = ({ children }) => (
                <CookieConsentProvider
                    functional
                    statistics
                    appName="mine-sider"
                    team="Mitt Team"
                >
                    {children}
                </CookieConsentProvider>
            );

            renderHook(() => useInternalState(), { wrapper });

            expect(
                document.documentElement.getAttribute(
                    "data-track-jokul-version",
                ),
            ).not.toBeNull();
            expect(
                document.documentElement.getAttribute("data-track-app-name"),
            ).toEqual("mine-sider");
            expect(
                document.documentElement.getAttribute("data-track-team"),
            ).toEqual("Mitt Team");
        });

        it("setter data-track-jokul-version selv om appName/team ikke er satt, uten å sette de andre attributtene", () => {
            setDocumentCookieState([
                [
                    "fremtind-cookie-consent",
                    JSON.stringify({
                        ...generateConsent("accepted", "accepted"),
                    }),
                ],
            ]);
            const wrapper: React.FC<WithChildren> = ({ children }) => (
                <CookieConsentProvider functional statistics>
                    {children}
                </CookieConsentProvider>
            );

            renderHook(() => useInternalState(), { wrapper });

            expect(
                document.documentElement.getAttribute(
                    "data-track-jokul-version",
                ),
            ).not.toBeNull();
            expect(
                document.documentElement.getAttribute("data-track-app-name"),
            ).toBeNull();
            expect(
                document.documentElement.getAttribute("data-track-team"),
            ).toBeNull();
        });

        it("fjerner alle tre attributtene når statistikk ikke er godtatt", () => {
            setDocumentCookieState([
                [
                    "fremtind-cookie-consent",
                    JSON.stringify({
                        ...generateConsent("accepted", "denied"),
                    }),
                ],
            ]);
            const wrapper: React.FC<WithChildren> = ({ children }) => (
                <CookieConsentProvider
                    functional
                    statistics
                    appName="mine-sider"
                    team="Mitt Team"
                >
                    {children}
                </CookieConsentProvider>
            );

            renderHook(() => useInternalState(), { wrapper });

            expect(
                document.documentElement.getAttribute(
                    "data-track-jokul-version",
                ),
            ).toBeNull();
            expect(
                document.documentElement.getAttribute("data-track-app-name"),
            ).toBeNull();
            expect(
                document.documentElement.getAttribute("data-track-team"),
            ).toBeNull();
        });

        it("data-track-jokul-version kommer alltid fra JOKUL_VERSION - det finnes ingen prop som kan overstyre den", () => {
            setDocumentCookieState([
                [
                    "fremtind-cookie-consent",
                    JSON.stringify({
                        ...generateConsent("accepted", "accepted"),
                    }),
                ],
            ]);
            const wrapper: React.FC<WithChildren> = ({ children }) => (
                <CookieConsentProvider functional statistics>
                    {children}
                </CookieConsentProvider>
            );

            renderHook(() => useInternalState(), { wrapper });

            expect(
                document.documentElement.getAttribute(
                    "data-track-jokul-version",
                ),
            ).toEqual(JOKUL_VERSION);
        });
    });
});
