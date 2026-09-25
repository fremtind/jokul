import { act, cleanup, render, waitFor } from "@testing-library/react";
import React from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import {
    CookieConsentProvider,
    DEFAULT_COOKIE_NAME,
    useInternalState,
} from "../CookieConsentContext.js";
import { setConsentCookie } from "../cookieConsentUtils.js";

const initMock = vi.fn();
const registerMock = vi.fn();
const resetMock = vi.fn();
const disableMock = vi.fn();

function createFakeInstance(instanceName: string) {
    return {
        register: (...args: unknown[]) => registerMock(instanceName, ...args),
        reset: () => resetMock(),
        disable: () => disableMock(),
    };
}

vi.mock("mixpanel-browser", () => ({
    default: {
        init: (...args: unknown[]) => {
            initMock(...args);
            return createFakeInstance(String(args[2]));
        },
    },
}));

function grantStatisticsConsent() {
    setConsentCookie({
        consent: { statistics: "accepted" },
        name: DEFAULT_COOKIE_NAME,
    });
}

afterEach(() => {
    // Rydder unna forrige tests render-tre (og trigger dermed dens
    // effect-cleanup, som f.eks. kaller disable()/reset()) FØR vi
    // nullstiller mock-historikken, slik at en forsinket opprydding fra
    // forrige test ikke lekker inn i neste tests assertions.
    cleanup();
    vi.clearAllMocks();
    vi.unstubAllGlobals();
    document.cookie = `${DEFAULT_COOKIE_NAME}=; max-age=0`;
});

function renderProvider(
    props: Omit<React.ComponentProps<typeof CookieConsentProvider>, "children">,
) {
    return render(
        <CookieConsentProvider {...props}>
            <div />
        </CookieConsentProvider>,
    );
}

function teamInitCall() {
    return initMock.mock.calls.find(([, , name]) =>
        String(name).startsWith("__jkl_team__"),
    );
}

function internalInitCall() {
    return initMock.mock.calls.find(([, , name]) =>
        String(name).startsWith("__jkl_internal__"),
    );
}

describe("useMixpanelTracking (via CookieConsentProvider)", () => {
    it("initialiserer ikke Mixpanel uten samtykke", async () => {
        renderProvider({ mixpanelToken: "token" });

        await waitFor(() => {
            expect(initMock).not.toHaveBeenCalled();
        });
    });

    it("initialiserer ikke Mixpanel når cookien har samtykke, men provideren selv ikke krever statistics", async () => {
        // Simulerer en app som (typisk i en tidligere rendring, eller fordi
        // brukeren tidligere besøkte en annen side i appen) har en
        // eksisterende cookie med "accepted" for statistics, men der DENNE
        // rendringen av provideren ikke selv har satt `statistics`-propen
        // (og dermed ikke faktisk ber om det samtykket). Sporing skal da
        // ALDRI aktiveres - konsistent med at samtykke-dialogen heller ikke
        // ville spurt om statistics her.
        grantStatisticsConsent();

        renderProvider({ mixpanelToken: "token" });

        await waitFor(() => {
            expect(initMock).not.toHaveBeenCalled();
        });
    });

    it("initialiserer ikke teamets instans uten token, selv med samtykke", async () => {
        grantStatisticsConsent();

        renderProvider({ statistics: true });

        await waitFor(() => {
            expect(teamInitCall()).toBeUndefined();
        });
    });

    it("initialiserer teamets instans med autocapture scopet til data-jkl-tracked når token og samtykke er gitt", async () => {
        grantStatisticsConsent();

        renderProvider({
            mixpanelToken: "token",
            appName: "test-app",
            statistics: true,
        });

        await waitFor(() => expect(teamInitCall()).toBeDefined());
        const [token, config, name] = teamInitCall() as [
            string,
            Record<string, unknown>,
            string,
        ];

        expect(token).toBe("token");
        expect(name).toMatch(/^__jkl_team___\d+$/);
        expect(config.api_host).toBe("https://api-eu.mixpanel.com");
        // persistence_name må settes til instansnavnet, ellers vil
        // Mixpanel-SDK-en nøkle persistens på token alene og dele
        // lagringsnøkkel med annen, separat mixpanel-browser-bruk i
        // forbrukerappen som (gjenbruker) samme token.
        expect(config.persistence_name).toBe(name);
        // secure_cookie er harmløst og begrenser ingen funksjonalitet -
        // satt likt på begge instanser.
        expect(config.secure_cookie).toBe(true);
        // cross_subdomain_cookie og session-replay-relaterte nøkler settes
        // BEVISST IKKE på teamets instans (kun på Jøkuls interne instans,
        // se testene under) - det er teamets eget prosjekt, og disse
        // verdiene skal ikke stå i veien for at teamet selv bruker f.eks.
        // Mixpanel Session Replay eller cross-subdomain-identitet på sin
        // egen instans.
        expect(config.cross_subdomain_cookie).toBeUndefined();
        expect(config.record_sessions_percent).toBeUndefined();
        expect(config.record_heatmap_data).toBeUndefined();
        expect(
            (config.autocapture as { capture_text_content?: boolean })
                .capture_text_content,
        ).toBeUndefined();
        expect(config.autocapture).toMatchObject({
            click: true,
            rage_click: true,
            dead_click: true,
            input: true,
            submit: true,
            pageview: false,
            scroll: false,
            allow_selectors: ["[data-jkl-tracked]"],
        });
        expect(
            (config.autocapture as { capture_extra_attrs: string[] })
                .capture_extra_attrs,
        ).toEqual(
            expect.arrayContaining([
                "data-jkl-tracked",
                "data-jkl-variant",
                "data-jkl-has-icon",
                "data-jkl-checked",
                "data-jkl-selected",
                "data-loading",
                "data-jkl-tracking",
            ]),
        );
        // Teamets instans skal ikke ha noen property_blacklist/ip-begrensning
        // - de får fullt innsyn i eget prosjekt.
        expect(config.property_blacklist).toBeUndefined();
        expect(config.ip).toBeUndefined();

        expect(registerMock).toHaveBeenCalledWith(name, {
            appName: "test-app",
        });
    });

    it("gir en ny, unik instans og nullstiller den gamle når mixpanelToken endres", async () => {
        grantStatisticsConsent();

        const { rerender } = renderProvider({
            mixpanelToken: "token-1",
            statistics: true,
        });

        await waitFor(() => expect(teamInitCall()).toBeDefined());
        const firstName = teamInitCall()?.[2];

        rerender(
            <CookieConsentProvider mixpanelToken="token-2" statistics>
                <div />
            </CookieConsentProvider>,
        );

        await waitFor(() =>
            expect(
                initMock.mock.calls.filter(([, , name]) =>
                    String(name).startsWith("__jkl_team__"),
                ),
            ).toHaveLength(2),
        );

        const teamCalls = initMock.mock.calls.filter(([, , name]) =>
            String(name).startsWith("__jkl_team__"),
        );
        const secondName = teamCalls[1]?.[2];
        const secondToken = teamCalls[1]?.[0];

        // Den gamle klienten skal ryddes opp (persistens nullstilles og
        // fremtidige track()-kall deaktiveres), og det nye kallet skal
        // bruke et helt NYTT instansnavn - siden mixpanel.init() er en
        // no-op for et allerede brukt navn (ville ellers stille fortsette
        // å bruke den gamle klienten/token-et).
        expect(disableMock).toHaveBeenCalled();
        expect(resetMock).toHaveBeenCalled();
        expect(secondName).not.toBe(firstName);
        expect(secondToken).toBe("token-2");
    });

    it("rydder opp (disable + reset) når samtykke trekkes tilbake", async () => {
        function TestComponent() {
            const { updateCurrentConsents } = useInternalState();
            return (
                <button
                    type="button"
                    onClick={() => {
                        setConsentCookie({
                            consent: { statistics: "denied" },
                            name: DEFAULT_COOKIE_NAME,
                        });
                        updateCurrentConsents();
                    }}
                >
                    trekk-samtykke
                </button>
            );
        }

        grantStatisticsConsent();

        const { getByText } = render(
            <CookieConsentProvider mixpanelToken="token" statistics>
                <TestComponent />
            </CookieConsentProvider>,
        );

        await waitFor(() => expect(teamInitCall()).toBeDefined());

        act(() => {
            getByText("trekk-samtykke").click();
        });

        await waitFor(() => expect(disableMock).toHaveBeenCalledTimes(1));
        await waitFor(() => expect(resetMock).toHaveBeenCalledTimes(1));
    });

    it("rydder opp (disable + reset) ved avmontering", async () => {
        grantStatisticsConsent();

        const { unmount } = renderProvider({
            mixpanelToken: "token",
            statistics: true,
        });

        await waitFor(() => expect(teamInitCall()).toBeDefined());

        unmount();

        expect(disableMock).toHaveBeenCalled();
        expect(resetMock).toHaveBeenCalled();
    });

    describe("Jøkul-teamets sentrale (interne) prosjekt", () => {
        it("initialiserer ikke uten byggetids-token, selv med samtykke og teamtoken", async () => {
            grantStatisticsConsent();

            renderProvider({ mixpanelToken: "token", statistics: true });

            await waitFor(() => expect(teamInitCall()).toBeDefined());
            expect(internalInitCall()).toBeUndefined();
        });

        it("initialiserer automatisk med anonymiserende config - uavhengig av egen mixpanelToken", async () => {
            vi.stubGlobal("__JOKUL_MIXPANEL_TOKEN__", "jokul-test-token");
            grantStatisticsConsent();

            renderProvider({ statistics: true });

            await waitFor(() => expect(internalInitCall()).toBeDefined());
            const [token, config, name] = internalInitCall() as [
                string,
                Record<string, unknown>,
                string,
            ];

            expect(token).toBe("jokul-test-token");
            expect(name).toMatch(/^__jkl_internal___\d+$/);
            expect(config.persistence_name).toBe(name);
            expect(config.ip).toBe(false);
            // secure_cookie er harmløst og begrenser ingen funksjonalitet -
            // satt likt på begge instanser.
            expect(config.secure_cookie).toBe(true);
            // Uten dette ville cookien settes på hele det ekstraherte
            // rotdomenet (SDK-default), og to ulike forbrukerapper på
            // samme rotdomene ville i praksis dele skjult bruker-ID i
            // dette sentrale prosjektet.
            expect(config.cross_subdomain_cookie).toBe(false);
            // Session Replay/heatmaps er allerede av som SDK-default, men
            // pinnes eksplisitt for denne instansen - en feil her ville
            // betydd fullt skjermopptak av forbrukerappen sentralt hos oss.
            expect(config.record_sessions_percent).toBe(0);
            expect(config.record_heatmap_data).toBe(false);
            expect(
                (config.autocapture as { capture_text_content?: boolean })
                    .capture_text_content,
            ).toBe(false);
            expect(config.property_blacklist).toEqual(
                expect.arrayContaining([
                    "$elements",
                    "$pathname",
                    "$host",
                    "$current_url",
                    "$referrer",
                    "$referring_domain",
                    // Autocapture løfter href fra ankertag-foreldre til en
                    // egen topplevel-property, uavhengig av $elements -
                    // uten denne ville Link/NavLink-klikk lekke den
                    // bokstavelige URL-en/ruten sentralt.
                    "$el_attr__href",
                ]),
            );
            // Nettleser-/enhet-/skjerm-data er BEVISST ikke fjernet lenger -
            // se begrunnelsen ved INTERNAL_PROPERTY_BLACKLIST i
            // trackingContext.ts (verdifullt for designsystemarbeid, ikke
            // persondata, ingen IP lagres uansett).
            expect(config.property_blacklist).not.toEqual(
                expect.arrayContaining([
                    "$browser",
                    "$browser_version",
                    "$os",
                    "$device",
                    "$screen_height",
                    "$screen_width",
                    "$viewportHeight",
                    "$viewportWidth",
                    "$pageHeight",
                    "$pageWidth",
                ]),
            );
            // Teamets egne, vilkårlige felter (tracking-propen) skal ALDRI
            // fanges opp av den interne instansen.
            expect(
                (config.autocapture as { capture_extra_attrs: string[] })
                    .capture_extra_attrs,
            ).not.toContain("data-jkl-tracking");
        });

        it("registrerer appName på den interne instansen også, uavhengig av egen mixpanelToken", async () => {
            vi.stubGlobal("__JOKUL_MIXPANEL_TOKEN__", "jokul-test-token");
            grantStatisticsConsent();

            renderProvider({ appName: "test-app", statistics: true });

            await waitFor(() => expect(internalInitCall()).toBeDefined());
            const name = internalInitCall()?.[2];

            // Jøkul-teamet trenger appName for å kunne identifisere hvilke
            // apper/team som faktisk bruker komponentbiblioteket - se
            // begrunnelse i types.ts/TRACKING.md.
            expect(registerMock).toHaveBeenCalledWith(name, {
                appName: "test-app",
            });
        });

        it("initialiserer begge instanser samtidig med hvert sitt unike navn", async () => {
            vi.stubGlobal("__JOKUL_MIXPANEL_TOKEN__", "jokul-test-token");
            grantStatisticsConsent();

            renderProvider({ mixpanelToken: "team-token", statistics: true });

            await waitFor(() => {
                expect(teamInitCall()).toBeDefined();
                expect(internalInitCall()).toBeDefined();
            });

            expect(teamInitCall()?.[2]).not.toBe(internalInitCall()?.[2]);
        });
    });
});
