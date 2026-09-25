// @vitest-environment node
import { renderToString } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { Button } from "../button/Button.js";
import { CookieConsentProvider } from "./CookieConsentContext.js";

/**
 * Kjøres med Node-miljøet i Vitest (ikke jsdom) - altså UTEN `window`,
 * `document`, `localStorage` osv. i det hele tatt, akkurat som et ekte
 * SSR-oppsett (Next.js, Remix osv.). Verifiserer at
 * `CookieConsentProvider`/`useMixpanelTracking` og `Button` sine
 * `data-jkl-*`-attributter kan rendres på serveren uten å kaste, selv med
 * `mixpanelToken` satt.
 *
 * Selve Mixpanel-initialiseringen skjer i `useEffect`, som React aldri
 * kjører under `renderToString` - så det dynamiske
 * `import("mixpanel-browser")`-kallet blir aldri en gang forsøkt kjørt på
 * serveren (i motsetning til en statisk import øverst i filen, som ville
 * blitt evaluert med det samme modulen lastes). Ingen faktisk
 * `mixpanel.init()`-kall eller nettverkstrafikk skjer på serveren, kun
 * markeringen (`data-jkl-tracked` osv.) rendres.
 */
describe("SSR (server-side rendering)", () => {
    it("kan rendre CookieConsentProvider + Button med mixpanelToken uten window/document", () => {
        expect(typeof window).toBe("undefined");
        expect(typeof document).toBe("undefined");

        expect(() =>
            renderToString(
                <CookieConsentProvider
                    mixpanelToken="test-token"
                    appName="test-app"
                >
                    <Button>Send</Button>
                </CookieConsentProvider>,
            ),
        ).not.toThrow();
    });

    it("rendrer data-jkl-tracked-attributtet på Button under SSR", () => {
        const html = renderToString(
            <CookieConsentProvider mixpanelToken="test-token">
                <Button>Send</Button>
            </CookieConsentProvider>,
        );

        expect(html).toContain('data-jkl-tracked="Button"');
    });
});
