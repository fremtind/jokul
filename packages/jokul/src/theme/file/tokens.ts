import type { ColorScheme, LightDarkPalette } from "../colors/types.js";
import type { JokulThemeFile, JokulThemeFonts } from "./themeFile.js";

type TokenValue<T> = { value: T };

export type ColorTokensJson = {
    color: {
        type: "colorScheme";
        "@": Record<
            string,
            Record<string, TokenValue<Record<ColorScheme, string>>>
        >;
    };
};

export type TypographyTokensJson = {
    font: {
        family: Record<
            "regular" | "display",
            TokenValue<string> & { type: "fontFamily" }
        >;
        weight: Record<
            "normal" | "bold",
            TokenValue<string> & { type: "fontWeight" }
        >;
    };
};

export type ThemeTokenFiles = Record<
    string,
    ColorTokensJson | TypographyTokensJson
>;

/**
 * Gjør om en lys/mørk-palett til samme format som
 * `src/tokens/brands/color.<brand>.tokens.json`.
 *
 * Med `includeDarkMode: false` brukes de lyse verdiene også i mørkt tema.
 */
export function paletteToColorTokens(
    palette: LightDarkPalette<string>,
    { includeDarkMode = true }: { includeDarkMode?: boolean } = {},
): ColorTokensJson {
    return {
        color: {
            type: "colorScheme",
            "@": Object.fromEntries(
                Object.entries(palette).map(([group, roles]) => [
                    group,
                    Object.fromEntries(
                        Object.entries(roles).map(([role, { light, dark }]) => [
                            role,
                            {
                                value: {
                                    light,
                                    dark: includeDarkMode ? dark : light,
                                },
                            },
                        ]),
                    ),
                ]),
            ),
        },
    };
}

/**
 * Gjør om fonter til samme format som
 * `src/tokens/brands/typography.<brand>.tokens.json`.
 */
export function fontsToTypographyTokens(
    fonts: JokulThemeFonts,
): TypographyTokensJson {
    return {
        font: {
            family: {
                regular: { type: "fontFamily", value: fonts.regular.family },
                display: { type: "fontFamily", value: fonts.display.family },
            },
            weight: {
                normal: {
                    type: "fontWeight",
                    value: fonts.regular.weight.normal,
                },
                bold: { type: "fontWeight", value: fonts.regular.weight.bold },
            },
        },
    };
}

/**
 * Lager token-filene for et tema, med samme filnavn som brand-byggingen i
 * Jøkul forventer: `color.<name>.tokens.json` og eventuelt
 * `typography.<name>.tokens.json`.
 */
export function themeToTokenFiles(theme: JokulThemeFile): ThemeTokenFiles {
    const files: ThemeTokenFiles = {
        [`color.${theme.name}.tokens.json`]: paletteToColorTokens(
            theme.colorTokens,
            { includeDarkMode: theme.includeDarkMode },
        ),
    };

    if (theme.fonts) {
        files[`typography.${theme.name}.tokens.json`] = fontsToTypographyTokens(
            theme.fonts,
        );
    }

    return files;
}
