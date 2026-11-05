import { describe, expect, it } from "vitest";
import { buildCustomFontFaceCss, isCustomFont } from "./customFont";

const validFont = {
    name: "Merkevare.woff2",
    size: 42_000,
    dataUrl: "data:font/woff2;base64,d09GMgABAAAAAA",
};

describe("isCustomFont", () => {
    it("godtar en base64-data-URL fra en fontfil", () => {
        expect(isCustomFont(validFont)).toBe(true);
    });

    /**
     * Data-URL-en settes rett inn i en `url()` i et stilark. Slapp noe annet
     * enn base64 gjennom, kunne et lagret utkast — eller en delt lenke — tatt
     * med seg egne CSS-regler inn i siden.
     */
    it("avviser verdier som kan bryte ut av stilarket", () => {
        const injections = [
            'data:font/woff2;base64,AAA") format("woff2")} body{display:none',
            "javascript:alert(1)",
            "https://example.com/font.woff2",
            "data:font/woff2,ikkebase64",
        ];

        for (const dataUrl of injections) {
            expect(isCustomFont({ ...validFont, dataUrl })).toBe(false);
        }
    });

    it("avviser oppføringer uten navn eller størrelse", () => {
        expect(isCustomFont({ dataUrl: validFont.dataUrl })).toBe(false);
        expect(isCustomFont(undefined)).toBe(false);
    });
});

describe("buildCustomFontFaceCss", () => {
    it("lager ingen regler uten opplastede fonter", () => {
        expect(buildCustomFontFaceCss({})).toBe("");
    });

    it("erklærer hvert slot med sin egen fontfamilie", () => {
        const css = buildCustomFontFaceCss({
            regular: validFont,
            display: { ...validFont, name: "Merkevare-Display.woff2" },
        });

        expect(css).toContain('font-family: "jkl-custom-regular"');
        expect(css).toContain('font-family: "jkl-custom-display"');
        expect(css).toContain(validFont.dataUrl);
    });

    it("legger aksene inn som font-variation-settings", () => {
        const css = buildCustomFontFaceCss({
            regular: { ...validFont, axes: { wdth: 110, slnt: -5 } },
        });

        expect(css).toContain(
            'font-variation-settings: "wdth" 110, "slnt" -5;',
        );
    });

    it("avviser akser som kan bryte ut av deklarasjonen", () => {
        expect(isCustomFont({ ...validFont, axes: { 'w";}': 1 } })).toBe(false);
        expect(isCustomFont({ ...validFont, axes: { wdth: Number.NaN } })).toBe(
            false,
        );
    });
});
