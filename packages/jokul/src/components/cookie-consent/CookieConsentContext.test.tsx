import { renderHook, act } from "@testing-library/react";
import React from "react";
import { WithChildren } from "../..";
import { CookieConsentProvider, useCookieConsentState } from "./CookieConsentContext";
import { ConsentState, Consent } from "./types";

const generateConsent = (marketing: ConsentState, functional: ConsentState, statistics: ConsentState): Consent => ({
    marketing,
    functional,
    statistics,
});

describe("cookie-consent-react/CookieConsentContext", () => {
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
    it("initial state behaves as expected", () => {
        const { result } = renderHook(() => useCookieConsentState(), {
            wrapper: CookieConsentProvider,
        });

        expect(result.current.showSettings).toEqual(false);
        expect(result.current.isOpen).toEqual(false);
        expect(result.current.requirement).toEqual({});
        expect(result.current.consent).toEqual(generateConsent(null, null, null));
    });

    it("context gets the initial consent state from cookies", () => {
        setDocumentCookieState([
            ["fremtind-cookie-consent", JSON.stringify({ ...generateConsent(null, "accepted", "denied") })],
        ]);

        const { result } = renderHook(() => useCookieConsentState(), {
            wrapper: CookieConsentProvider,
        });

        expect(result.current.consent).toEqual(generateConsent(null, "accepted", "denied"));
    });

    it("consent is shown when no consent cookie is set", () => {
        const wrapper: React.FC<WithChildren> = ({ children }) => (
            <CookieConsentProvider marketing functional statistics>
                {children}
            </CookieConsentProvider>
        );

        const { result } = renderHook(() => useCookieConsentState(), {
            wrapper,
        });

        expect(result.current.isOpen).toEqual(true);
    });

    it("consent is shown when a consent cookie is set, but doesn't match the requirement", () => {
        setDocumentCookieState([
            ["fremtind-cookie-consent", JSON.stringify({ ...generateConsent(null, "accepted", "denied") })],
        ]);
        const wrapper: React.FC<WithChildren> = ({ children }) => (
            <CookieConsentProvider marketing functional statistics>
                {children}
            </CookieConsentProvider>
        );

        const { result } = renderHook(() => useCookieConsentState(), {
            wrapper,
        });

        expect(result.current.isOpen).toEqual(true);
    });

    it("consent does not show when consent cookie is set and it matches the requirement", () => {
        setDocumentCookieState([
            ["fremtind-cookie-consent", JSON.stringify({ ...generateConsent("accepted", "accepted", null) })],
        ]);
        const wrapper: React.FC<WithChildren> = ({ children }) => (
            <CookieConsentProvider marketing functional>
                {children}
            </CookieConsentProvider>
        );

        const { result } = renderHook(() => useCookieConsentState(), {
            wrapper,
        });

        expect(result.current.isOpen).toEqual(false);
    });

    it("consent does not show when consent cookie is set and a requirement is denied", () => {
        setDocumentCookieState([
            ["fremtind-cookie-consent", JSON.stringify({ ...generateConsent("denied", "accepted", null) })],
        ]);
        const wrapper: React.FC<WithChildren> = ({ children }) => (
            <CookieConsentProvider marketing functional>
                {children}
            </CookieConsentProvider>
        );

        const { result } = renderHook(() => useCookieConsentState(), {
            wrapper,
        });

        expect(result.current.isOpen).toEqual(false);
    });

    it("dispatching open and close works as expected", () => {
        const { result } = renderHook(() => useCookieConsentState(), {
            wrapper: CookieConsentProvider,
        });

        expect(result.current.isOpen).toEqual(false);

        act(() => {
            result.current.dispatch({ type: "SET_SHOW_CONSENT", payload: true });
        });

        expect(result.current.isOpen).toEqual(true);

        act(() => {
            result.current.dispatch({ type: "SET_SHOW_CONSENT", payload: false });
        });

        expect(result.current.isOpen).toEqual(false);
    });

    it("dispatching settings display state works as expected", () => {
        const { result } = renderHook(() => useCookieConsentState(), {
            wrapper: CookieConsentProvider,
        });

        expect(result.current.showSettings).toEqual(false);

        act(() => {
            result.current.dispatch({ type: "SET_SHOW_SETTINGS", payload: true });
        });

        expect(result.current.showSettings).toEqual(true);

        act(() => {
            result.current.dispatch({ type: "SET_SHOW_SETTINGS", payload: false });
        });

        expect(result.current.showSettings).toEqual(false);
    });

    it("updating consent works as expected", () => {
        setDocumentCookieState([
            ["fremtind-cookie-consent", JSON.stringify({ ...generateConsent("denied", "accepted", null) })],
        ]);
        const wrapper: React.FC<WithChildren> = ({ children }) => (
            <CookieConsentProvider marketing functional>
                {children}
            </CookieConsentProvider>
        );

        const { result } = renderHook(() => useCookieConsentState(), {
            wrapper,
        });

        expect(result.current.consent).toEqual(generateConsent("denied", "accepted", null));

        act(() => {
            result.current.dispatch({
                type: "UPDATE_CONSENT",
                payload: generateConsent("accepted", "accepted", "accepted"),
            });
        });

        expect(result.current.consent).toEqual(generateConsent("accepted", "accepted", "accepted"));
    });
});
