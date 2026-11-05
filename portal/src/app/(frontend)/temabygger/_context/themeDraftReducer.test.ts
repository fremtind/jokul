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

    it("går tilbake til standardfonten når fila fjernes", () => {
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
        expect(removed.regularFont).toBe(INITIAL_STATE.regularFont);
        expect(removed.displayFont).toBe(INITIAL_STATE.displayFont);
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
        expect(removed.displayFont).toBe("custom");
    });
});
