import { render, renderHook, screen, waitFor } from "@testing-library/react";
import type React from "react";
import { beforeEach, describe, expect, it } from "vitest";
import type { WithChildren } from "../../core/types.js";
import { CookieConsent } from "./CookieConsent.js";
import {
    CookieConsentProvider,
    useCookieConsent,
} from "./CookieConsentContext.js";
import { setConsentCookie } from "./cookieConsentUtils.js";

describe("CookieConsent", () => {
    describe("no pre-existing cookie", () => {
        beforeEach(() => {
            setConsentCookie({
                consent: {
                    functional: null,
                    statistics: null,
                },
                name: "demo-consent-cookie",
                maxAge: -1,
            });
        });

        it("updates partial consents correctly", async () => {
            render(
                <CookieConsentProvider
                    cookieName="demo-consent-cookie"
                    functional={false}
                    statistics={true}
                >
                    <CookieConsent
                        blocking={true}
                        aboutPage="https://www.fremtind.no/informasjonskapsler"
                    />
                </CookieConsentProvider>,
            );

            await screen.getByTestId("jkl-cookie-consent-godta-alle").click();

            expect(document.cookie).toEqual(
                'demo-consent-cookie={"functional":null,"statistics":"accepted"}',
            );
        });

        it("can accept all available cookies", async () => {
            render(
                <CookieConsentProvider
                    cookieName="demo-consent-cookie"
                    functional={true}
                    statistics={true}
                >
                    <CookieConsent
                        blocking={true}
                        aboutPage="https://www.fremtind.no/informasjonskapsler"
                    />
                </CookieConsentProvider>,
            );

            await screen.getByTestId("jkl-cookie-consent-godta-alle").click();

            expect(document.cookie).toEqual(
                'demo-consent-cookie={"functional":"accepted","statistics":"accepted"}',
            );
        });
    });

    describe("pre-existing cookie", () => {
        beforeEach(() => {
            setConsentCookie({
                consent: {
                    functional: null,
                    statistics: "accepted",
                },
                name: "demo-consent-cookie",
            });
        });

        it("updates the consent object returned from the hook", async () => {
            const wrapper: React.FC<WithChildren> = ({ children }) => {
                return (
                    <CookieConsentProvider
                        cookieName="demo-consent-cookie"
                        functional={true}
                        statistics={true}
                    >
                        <CookieConsent
                            blocking={true}
                            aboutPage="https://www.fremtind.no/informasjonskapsler"
                        />
                        {children}
                    </CookieConsentProvider>
                );
            };

            const { result } = renderHook(() => useCookieConsent(), {
                wrapper,
            });

            await waitFor(() => {
                expect(result.current?.consents).toEqual({
                    statistics: "accepted",
                    functional: null,
                });
            });

            await screen.getByTestId("jkl-cookie-consent-godta-alle").click();

            await waitFor(() => {
                expect(result.current?.consents).toEqual({
                    statistics: "accepted",
                    functional: "accepted",
                });
            });
        });
    });
});
