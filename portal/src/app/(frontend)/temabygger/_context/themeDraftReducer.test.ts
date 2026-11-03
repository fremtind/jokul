import { describe, expect, it } from "vitest";
import type { CustomFont } from "../_shared/customFont";
import { INITIAL_STATE, themeDraftReducer } from "./themeDraftReducer";

const customFont: CustomFont = {
    name: "Merkevare.woff2",
    size: 42_000,
    dataUrl: "data:font/woff2;base64,AAAA",
};

function adjustPageBackground(value: string) {
    return themeDraftReducer(INITIAL_STATE, {
        type: "UPDATE_COLOR_TOKEN",
        group: "background",
        role: "page",
        colorScheme: "light",
        value,
    });
}

describe("themeDraftReducer", () => {
    /**
     * Standardverdien avgjør både hvor mange fargesteg brukeren må gjennom
     * (`ColorsStep`) og hva som leveres til designsystem-teamet, så mørk modus
     * skal være et aktivt valg brukeren tar selv.
     */
    it("lager bare tema for lyst modus før brukeren velger noe annet", () => {
        expect(INITIAL_STATE.includeDarkMode).toBe(false);
    });

    /**
     * Dette er hypotesen bak sporingen av «base color applied»: en ny grunnfarge
     * regenererer hele paletten, så manuelle justeringer forsvinner uten varsel.
     * Testen låser atferden slik at endringer i den blir et bevisst valg.
     */
    it("overskriver manuelle fargejusteringer når en ny grunnfarge brukes", () => {
        const adjusted = adjustPageBackground("#abcdef");

        expect(adjusted.colorTokens.background.page.light).toBe("#ABCDEF");

        const regenerated = themeDraftReducer(adjusted, {
            type: "APPLY_BASE_COLOR",
            value: "#1A1A1A",
        });

        expect(regenerated.colorTokens.background.page.light).not.toBe(
            "#ABCDEF",
        );
    });

    it("skriver ugyldig hex rett til kontrastfargen uten å regenerere paletten", () => {
        const adjusted = adjustPageBackground("#abcdef");

        const next = themeDraftReducer(adjusted, {
            type: "APPLY_BASE_COLOR",
            value: "#1A1",
        });

        expect(next.colorTokens.background.page.light).toBe("#ABCDEF");
        expect(next.colorTokens.background.contrast.light).toBe("#1A1");
    });

    it("følger vanlig font til display-fonten helt til den er valgt eksplisitt", () => {
        const withRegular = themeDraftReducer(INITIAL_STATE, {
            type: "SET_REGULAR_FONT",
            font: "open-sans",
        });

        expect(withRegular.displayFont).toBe("open-sans");

        const withDisplay = themeDraftReducer(withRegular, {
            type: "SET_DISPLAY_FONT",
            font: "dnb-sans",
        });
        const withNewRegular = themeDraftReducer(withDisplay, {
            type: "SET_REGULAR_FONT",
            font: "sparebank1",
        });

        expect(withNewRegular.displayFont).toBe("dnb-sans");
    });

    /**
     * Slotene har hver sin fil. Smittet en opplastet vanlig font over på
     * display, ville display pekt på en fil som ikke er lastet opp.
     */
    it("lar opplasting av vanlig font stå urørt i display-slotet", () => {
        const next = themeDraftReducer(INITIAL_STATE, {
            type: "SET_CUSTOM_FONT",
            slot: "regular",
            font: customFont,
        });

        expect(next.regularFont).toBe("custom");
        expect(next.customFonts.regular).toEqual(customFont);
        expect(next.displayFont).toBe(INITIAL_STATE.displayFont);
        expect(next.customFonts.display).toBeUndefined();
    });

    it("regner opplastet display-font som et eksplisitt valg", () => {
        const next = themeDraftReducer(INITIAL_STATE, {
            type: "SET_CUSTOM_FONT",
            slot: "display",
            font: customFont,
        });

        expect(next.displayFont).toBe("custom");
        expect(next.hasCustomDisplayFont).toBe(true);
    });

    /**
     * «Annen font» er det som gjør opplastingsfeltet synlig, og velges før fila
     * finnes. Smittet valget over på det andre slotet, ville det slotet åpnet et
     * felt brukeren ikke ba om.
     */
    it("åpner bare sitt eget slot for opplasting", () => {
        const next = themeDraftReducer(INITIAL_STATE, {
            type: "SELECT_CUSTOM_FONT",
            slot: "regular",
        });

        expect(next.regularFont).toBe("custom");
        expect(next.customFonts.regular).toBeUndefined();
        expect(next.displayFont).toBe(INITIAL_STATE.displayFont);
    });

    /**
     * Fila byttes ut ved å fjerne den gamle først. Hoppet valget tilbake til en
     * standardfont, ville feltet lukket seg under brukeren midt i byttet.
     */
    it("lar valget stå på «annen font» når fila fjernes", () => {
        const uploaded = themeDraftReducer(INITIAL_STATE, {
            type: "SET_CUSTOM_FONT",
            slot: "regular",
            font: customFont,
        });

        const removed = themeDraftReducer(uploaded, {
            type: "REMOVE_CUSTOM_FONT",
            slot: "regular",
        });

        expect(removed.customFonts.regular).toBeUndefined();
        expect(removed.regularFont).toBe("custom");
    });

    it("beholder den andre fontfila når bare én fjernes", () => {
        const both = themeDraftReducer(
            themeDraftReducer(INITIAL_STATE, {
                type: "SET_CUSTOM_FONT",
                slot: "regular",
                font: customFont,
            }),
            { type: "SET_CUSTOM_FONT", slot: "display", font: customFont },
        );

        const removed = themeDraftReducer(both, {
            type: "REMOVE_CUSTOM_FONT",
            slot: "display",
        });

        expect(removed.customFonts.regular).toEqual(customFont);
        expect(removed.customFonts.display).toBeUndefined();
        expect(removed.regularFont).toBe("custom");
    });

    describe("RESET_DRAFT", () => {
        const edited = {
            ...INITIAL_STATE,
            themeName: "Tema",
            borderRadius: "rounded",
            includeDarkMode: true,
        } as unknown as typeof INITIAL_STATE;

        it("nullstiller hele utkastet uten omfang", () => {
            expect(themeDraftReducer(edited, { type: "RESET_DRAFT" })).toEqual(
                INITIAL_STATE,
            );
        });

        it("nullstiller bare det steget eier", () => {
            const result = themeDraftReducer(edited, {
                type: "RESET_DRAFT",
                scope: "identitet",
            });

            expect(result.themeName).toBe("");
            expect(result.borderRadius).toBe(edited.borderRadius);
        });

        it("nullstiller bare valgt fargemodus", () => {
            const adjusted = themeDraftReducer(
                adjustPageBackground("#123456"),
                {
                    type: "UPDATE_COLOR_TOKEN",
                    group: "background",
                    role: "page",
                    colorScheme: "dark",
                    value: "#654321",
                },
            );
            const result = themeDraftReducer(adjusted, {
                type: "RESET_DRAFT",
                scope: "farger",
            });

            expect(result.colorTokens.background.page.light).toBe(
                INITIAL_STATE.colorTokens.background.page.light,
            );
            expect(result.colorTokens.background.page.dark).toBe("#654321");
        });
    });
});
