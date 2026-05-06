import { describe, expect, it } from "vitest";
import { tokensFromSchema } from "../tokens";
import {
    THEME_BUILDER_EXPORT_FILE_NAME,
    createThemeBuilderExport,
} from "./exportFile";

describe("themeBuilderExport", () => {
    it("lager pretty-printet color token JSON med forventet filnavn", () => {
        const value = createThemeBuilderExport(tokensFromSchema());
        const parsed = JSON.parse(value) as { color?: { type?: string } };

        expect(THEME_BUILDER_EXPORT_FILE_NAME).toBe(
            "color.custom-brand.tokens.json",
        );
        expect(parsed.color?.type).toBe("colorScheme");
        expect(value).toContain('\n    "color":');
    });
});
