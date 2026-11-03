import { describe, expect, it } from "vitest";
import dnbColorTokens from "../../tokens/brands/color.dnb.tokens.json" with {
    type: "json",
};
import dnbTypographyTokens from "../../tokens/brands/typography.dnb.tokens.json" with {
    type: "json",
};
import { generatePalette } from "../colors/generate.js";
import type { LightDarkPalette } from "../colors/types.js";
import { type JokulThemeFile, THEME_FILE_VERSION } from "./themeFile.js";
import {
    fontsToTypographyTokens,
    paletteToColorTokens,
    themeToTokenFiles,
} from "./tokens.js";

function colorTokensToPalette(
    tokens: typeof dnbColorTokens,
): LightDarkPalette<string> {
    return Object.fromEntries(
        Object.entries(tokens.color["@"]).map(([group, roles]) => [
            group,
            Object.fromEntries(
                Object.entries(roles).map(([role, token]) => [
                    role,
                    token.value,
                ]),
            ),
        ]),
    ) as LightDarkPalette<string>;
}

describe("paletteToColorTokens", () => {
    it("gir samme format som brand-tokens i Jøkul", () => {
        const palette = colorTokensToPalette(dnbColorTokens);

        expect(paletteToColorTokens(palette)).toEqual(dnbColorTokens);
    });

    it("bruker lyse verdier i mørkt tema når mørkt tema ikke er med", () => {
        const palette = generatePalette("#006F4E");
        const tokens = paletteToColorTokens(palette, {
            includeDarkMode: false,
        });

        expect(tokens.color["@"].background.page.value).toEqual({
            light: palette.background.page.light,
            dark: palette.background.page.light,
        });
    });
});

describe("fontsToTypographyTokens", () => {
    it("gir samme format som brand-tokens i Jøkul", () => {
        const { family, weight } = dnbTypographyTokens.font;
        const tokens = fontsToTypographyTokens({
            regular: {
                family: family.regular.value,
                weight: {
                    normal: weight.normal.value,
                    bold: weight.bold.value,
                },
            },
            display: {
                family: family.display.value,
                weight: {
                    normal: weight.normal.value,
                    bold: weight.bold.value,
                },
            },
        });

        expect(tokens.font).toEqual({
            family: {
                regular: family.regular,
                display: family.display,
            },
            weight,
        });
    });

    it("tar med mono og fontfiler", () => {
        const { face, family } = dnbTypographyTokens.font;
        const font = {
            family: family.regular.value,
            weight: { normal: "400", bold: "500" },
        };
        const tokens = fontsToTypographyTokens({
            regular: font,
            display: font,
            mono: { family: family.mono.value },
            faces: [face.regular.value, face.bold.value] as Array<
                typeof face.regular.value & { style: "normal" }
            >,
        });

        expect(tokens.font.family.mono).toEqual(family.mono);
        expect(Object.values(tokens.font.face ?? {})).toEqual([
            face.regular,
            face.bold,
        ]);
    });
});

describe("themeToTokenFiles", () => {
    const theme: JokulThemeFile = {
        version: THEME_FILE_VERSION,
        name: "mitt-tema",
        colorTokens: generatePalette("#006F4E"),
        includeDarkMode: true,
    };

    it("lager kun fargefil når temaet ikke har fonter", () => {
        expect(Object.keys(themeToTokenFiles(theme))).toEqual([
            "color.mitt-tema.tokens.json",
        ]);
    });

    it("lager typografifil når temaet har fonter", () => {
        const font = {
            family: "Mitt Tema",
            weight: { normal: "400", bold: "600" },
        };
        expect(
            Object.keys(
                themeToTokenFiles({
                    ...theme,
                    fonts: { regular: font, display: font },
                }),
            ),
        ).toEqual([
            "color.mitt-tema.tokens.json",
            "typography.mitt-tema.tokens.json",
        ]);
    });
});
