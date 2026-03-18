import { render, renderHook, screen, waitFor } from "@testing-library/react";
import UserEventModule from "@testing-library/user-event";
import React from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import type { WithChildren } from "../../core/types.js";
import { Button } from "../button/Button.js";
import { CookieConsent } from "./CookieConsent.js";
import {
    CookieConsentProvider,
    useCookieConsent,
} from "./CookieConsentContext.js";
import { setConsentCookie } from "./cookieConsentUtils.js";

// https://github.com/testing-library/user-event/issues/1146
// @ts-ignore typecheck liker ikke at default muligens ikke finnes
const userEvent = UserEventModule.default ?? UserEventModule;

describe("CookieConsent", () => {
    const renderCookieConsent = (
        props?: Partial<React.ComponentProps<typeof CookieConsent>>,
    ) => {
        return render(
            <CookieConsentProvider
                cookieName="demo-consent-cookie"
                functional={true}
                statistics={true}
                marketing={true}
            >
                <CookieConsent
                    blocking={true}
                    aboutPage="https://www.fremtind.no/informasjonskapsler"
                    {...props}
                />
            </CookieConsentProvider>,
        );
    };

    afterEach(() => {
        vi.restoreAllMocks();
        Object.defineProperty(window.navigator, "cookieEnabled", {
            value: true,
            configurable: true,
        });
    });

    describe("no pre-existing cookie", () => {
        beforeEach(() => {
            setConsentCookie({
                consent: {
                    functional: null,
                    statistics: null,
                    marketing: null,
                },
                name: "demo-consent-cookie",
                maxAge: -1,
            });
        });

        it("can accept all available cookies", async () => {
            const user = userEvent.setup();
            renderCookieConsent();

            expect(screen.getByRole("alertdialog")).toBeInTheDocument();
            expect(
                screen.getByRole("heading", {
                    name: /får vi bruke valgfrie informasjons.*kapsler/i,
                }),
            ).toBeInTheDocument();

            await user.click(screen.getByTestId("jkl-cookie-consent-godta"));

            expect(document.cookie).toEqual(
                'demo-consent-cookie={"functional":"accepted","statistics":"accepted","marketing":"denied"}',
            );
            await waitFor(() => {
                expect(
                    screen.queryByRole("alertdialog"),
                ).not.toBeInTheDocument();
            });
        });

        it("can deny all available cookies", async () => {
            const user = userEvent.setup();
            renderCookieConsent();

            await user.click(screen.getByTestId("jkl-cookie-consent-nekt"));

            expect(document.cookie).toEqual(
                'demo-consent-cookie={"functional":"denied","statistics":"denied","marketing":"denied"}',
            );
            await waitFor(() => {
                expect(
                    screen.queryByRole("alertdialog"),
                ).not.toBeInTheDocument();
            });
        });

        it("calls onAccept with the updated consents", async () => {
            const user = userEvent.setup();
            const onAccept = vi.fn();

            renderCookieConsent({ onAccept });

            await user.click(screen.getByTestId("jkl-cookie-consent-godta"));

            expect(onAccept).toHaveBeenCalledWith({
                functional: "accepted",
                statistics: "accepted",
                marketing: "denied",
            });
            expect(onAccept).toHaveBeenCalledTimes(1);
        });

        it("renders a custom link text when provided", () => {
            renderCookieConsent({
                aboutPageLinkText: "Se hvordan vi bruker informasjons­kapsler",
            });

            expect(
                screen.getByRole("link", {
                    name: /Se hvordan vi bruker informasjons.*kapsler/,
                }),
            ).toHaveAttribute(
                "href",
                "https://www.fremtind.no/informasjonskapsler",
            );
        });

        it("renders the default link text when no custom text is provided", () => {
            renderCookieConsent();

            expect(
                screen.getByRole("link", {
                    name: /Les mer om hvilke informasjons.*kapsler vi lagrer her/,
                }),
            ).toHaveAttribute(
                "href",
                "https://www.fremtind.no/informasjonskapsler",
            );
        });

        it("returns denied consents immediately when cookies are disabled", () => {
            const onAccept = vi.fn();
            Object.defineProperty(window.navigator, "cookieEnabled", {
                value: false,
                configurable: true,
            });

            renderCookieConsent({ onAccept });

            expect(onAccept).toHaveBeenCalledWith({
                functional: "denied",
                statistics: "denied",
                marketing: "denied",
            });
            expect(
                screen.queryByTestId("jkl-cookie-consent-godta"),
            ).not.toBeInTheDocument();
        });
    });

    describe("pre-existing cookie", () => {
        beforeEach(() => {
            setConsentCookie({
                consent: {
                    functional: "accepted",
                    statistics: "accepted",
                },
                name: "demo-consent-cookie",
            });
        });

        it("updates the consent object returned from the hook", async () => {
            const user = userEvent.setup();
            const Trigger = () => {
                const { openConsentModal } = useCookieConsent();

                return (
                    <Button type="button" onClick={openConsentModal}>
                        Åpne samtykkeinnstillinger
                    </Button>
                );
            };

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
                        <Trigger />
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
                    functional: "accepted",
                });
            });

            expect(screen.queryByRole("alertdialog")).not.toBeInTheDocument();

            await user.click(
                screen.getByRole("button", {
                    name: /åpne samtykkeinnstillinger/i,
                }),
            );

            expect(screen.getByRole("alertdialog")).toBeInTheDocument();

            await user.click(screen.getByTestId("jkl-cookie-consent-godta"));

            await waitFor(() => {
                expect(result.current?.consents).toEqual({
                    statistics: "accepted",
                    functional: "accepted",
                    marketing: "denied",
                });
            });
        });
    });
});
