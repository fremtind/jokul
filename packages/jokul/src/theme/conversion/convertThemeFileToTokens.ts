import base from "../../tokens/typography.tokens.json" with { type: "json" };
import type { JokulThemeFile, JokulThemeFonts } from "../types.js";
import { resolveFontFaces } from "./resolveFontFaces.js";

export function createTypographyTokens(
    fonts: JokulThemeFonts = {
        regular: {
            family: base.font.family.regular.value,
            weight: {
                normal: base.font.weight.normal.value,
                bold: base.font.weight.bold.value,
            },
        },
        display: {
            family: base.font.family.display.value,
            weight: {
                normal: base.font.weight.normal.value,
                bold: base.font.weight.normal.value,
            },
        },
    },
) {
    const { regular, display } = fonts;
    return {
        $schema:
            "https://jokul.fremtind.no/schemas/v1/typography-tokens.schema.json",
        version: "1",
        font: {
            face: {
                ...resolveFontFaces(regular),
                ...(display && {
                    display: resolveFontFaces(display).regular,
                }),
            },
            family: {
                regular: { type: "fontFamily", value: regular.family },
                bold: { type: "fontFamily", value: regular.family },
                ...(display && {
                    display: { type: "fontFamily", value: display.family },
                }),
            },
            weight: {
                normal: {
                    type: "fontWeight",
                    value: Number(regular.weight.normal),
                },
                bold: {
                    type: "fontWeight",
                    value: Number(regular.weight.bold),
                },
            },
        },
    };
}

export function createColorTokens({
    colorTokens: palette,
    includeDarkMode,
}: Pick<JokulThemeFile, "colorTokens" | "includeDarkMode">) {
    const groups = Object.entries(palette).map(
        ([group, roles]) =>
            [
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
            ] as const,
    );

    return {
        $schema:
            "https://jokul.fremtind.no/schemas/v1/color-tokens.schema.json",
        version: "1",
        color: { type: "colorScheme", "@": Object.fromEntries(groups) },
    };
}

export function convertThemeFileToTokens(theme: JokulThemeFile) {
    return {
        color: createColorTokens(theme),
        typography: createTypographyTokens(theme.fonts),
    };
}
