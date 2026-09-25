import { render, waitFor } from "@testing-library/react";
import React from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import {
    CookieConsentProvider,
    DEFAULT_COOKIE_NAME,
} from "../CookieConsentContext.js";
import { setConsentCookie } from "../cookieConsentUtils.js";

// Egen testfil (i stedet for en ekstra `it()` i trackingContext.test.tsx),
// siden `vi.mock("mixpanel-browser", ...)` må gjelde for HELE filen -
// denne filen simulerer at den valgfrie avhengigheten mangler/feiler å
// laste (f.eks. ikke installert), mens trackingContext.test.tsx simulerer
// at den er tilgjengelig.
vi.mock("mixpanel-browser", () => {
    throw new Error("Cannot find module 'mixpanel-browser'");
});

function grantStatisticsConsent() {
    setConsentCookie({
        consent: { statistics: "accepted" },
        name: DEFAULT_COOKIE_NAME,
    });
}

afterEach(() => {
    vi.clearAllMocks();
    document.cookie = `${DEFAULT_COOKIE_NAME}=; max-age=0`;
});

describe("useMixpanelTracking - manglende `mixpanel-browser`-avhengighet", () => {
    it("krasjer ikke appen når den valgfrie avhengigheten ikke kan lastes", async () => {
        const warnSpy = vi
            .spyOn(console, "warn")
            .mockImplementation(() => undefined);

        grantStatisticsConsent();

        // Selve renderingen (og en påfølgende useEffect-kjøring som prøver
        // det dynamiske `import("mixpanel-browser")`-kallet, som her
        // feiler) skal ikke kaste - `try`/`catch` rundt importen skal
        // fange dette og bare logge en dev-advarsel.
        expect(() => {
            render(
                <CookieConsentProvider mixpanelToken="token" statistics>
                    <div />
                </CookieConsentProvider>,
            );
        }).not.toThrow();

        await waitFor(() => {
            expect(warnSpy).toHaveBeenCalled();
        });

        warnSpy.mockRestore();
    });
});
