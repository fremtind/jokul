import { describe, expect, it } from "vitest";
import { INITIAL_STATE } from "../_context/themeDraftReducer";
import type { ThemeDraft } from "../_context/types";
import {
    THEME_DRAFT_QUERY_PARAM,
    THEME_DRAFT_VERSION,
    createThemePreviewHref,
    parseThemeDraftParam,
    parseThemeDraftPayload,
} from "./themeDraftPayload";

const customFont = {
    name: "Merkevare.woff2",
    size: 42_000,
    dataUrl: "data:font/woff2;base64,d09GMgABAAAAAA",
};

const withUploadedFonts: ThemeDraft = {
    ...INITIAL_STATE,
    regularFont: "custom",
    displayFont: "custom",
    hasCustomDisplayFont: true,
    customFonts: { regular: customFont, display: customFont },
};

function parseHref(href: string) {
    const params = new URL(href, "https://jokul.fremtind.no").searchParams;
    const payload = params.get(THEME_DRAFT_QUERY_PARAM);

    const draft = payload ? parseThemeDraftParam(payload) : undefined;

    return draft && { draft };
}

describe("createThemePreviewHref", () => {
    /**
     * Lenka er selve leveransen, og en fontfil som base64 er titusener av tegn.
     * Blir fila liggende, slutter lenka å virke i både nettlesere og
     * meldingsklienter.
     */
    it("tar ikke fontfila med i lenka", () => {
        const href = createThemePreviewHref(withUploadedFonts);

        expect(href).not.toContain(customFont.dataUrl);
        expect(parseHref(href)?.draft.customFonts).toEqual({});
    });

    it("faller tilbake til en font som finnes når fila er fjernet", () => {
        const draft = parseHref(
            createThemePreviewHref(withUploadedFonts),
        )?.draft;

        expect(draft?.regularFont).not.toBe("custom");
        expect(draft?.displayFont).not.toBe("custom");
    });

    it("lar fargene og navnet gå uendret gjennom lenka", () => {
        const draft = parseHref(
            createThemePreviewHref({
                ...withUploadedFonts,
                themeName: "Merkevare",
                includeDarkMode: true,
            }),
        )?.draft;

        expect(draft?.themeName).toBe("Merkevare");
        expect(draft?.includeDarkMode).toBe(true);
        expect(draft?.colorTokens).toEqual(INITIAL_STATE.colorTokens);
    });
});

describe("parseThemeDraftPayload", () => {
    // Utkast lagret før opplasting fantes mangler feltet, og skal fortsatt åpne.
    it("fyller inn tomme fonter for utkast lagret uten feltet", () => {
        const { customFonts, ...draftWithoutCustomFonts } = INITIAL_STATE;

        const payload = parseThemeDraftPayload({
            version: THEME_DRAFT_VERSION,
            draft: draftWithoutCustomFonts,
        });

        expect(payload?.draft.customFonts).toEqual({});
    });

    // Hjørner og tittelvekt kom til etter at lenker begynte å gå rundt.
    it("fyller inn standardvalg for utkast lagret uten de nyere feltene", () => {
        const { boldTitles, borderRadius, ...draftWithoutLaterFields } =
            INITIAL_STATE;

        const payload = parseThemeDraftPayload({
            version: THEME_DRAFT_VERSION,
            draft: draftWithoutLaterFields,
        });

        expect(payload?.draft.boldTitles).toBe(false);
        expect(payload?.draft.borderRadius).toBe("standard");
    });

    /**
     * En hjørneskala som ikke finnes gir ingen verdier å sette tokenene til, og
     * kan bare komme fra en lenke noen har endret på.
     */
    it("avviser utkast med en hjørneskala som ikke finnes", () => {
        const payload = parseThemeDraftPayload({
            version: THEME_DRAFT_VERSION,
            draft: { ...INITIAL_STATE, borderRadius: "kjempestore" },
        });

        expect(payload).toBeUndefined();
    });

    it("avviser utkast der fontfila ikke er en base64-data-URL", () => {
        const payload = parseThemeDraftPayload({
            version: THEME_DRAFT_VERSION,
            draft: {
                ...withUploadedFonts,
                customFonts: {
                    regular: { ...customFont, dataUrl: "https://example.com" },
                },
            },
        });

        expect(payload).toBeUndefined();
    });
});
