import type {
    EditableLightDarkPalette,
    JokulThemeFile,
} from "@fremtind/jokul/theme";
import type { CSSProperties } from "react";
import { DEFAULT_REGULAR_FONT_OPTION_ID, FONT_OPTIONS } from "./fontOptions";

export function buildThemePreviewStyle({
    colorTokens,
    includeDarkMode,
    fonts,
}: JokulThemeFile): CSSProperties {
    const regularFontOption =
        fonts?.regular || FONT_OPTIONS[DEFAULT_REGULAR_FONT_OPTION_ID];
    const displayFontOption =
        fonts?.display || FONT_OPTIONS[DEFAULT_REGULAR_FONT_OPTION_ID];

    return {
        ...buildColorStyle(colorTokens, includeDarkMode),
        "--jkl-font-family-regular": regularFontOption.family,
        "--jkl-font-family-display": displayFontOption.family,
        "--jkl-font-weight-normal": regularFontOption.weight.normal,
        "--jkl-font-weight-bold": regularFontOption.weight.bold,
    } as CSSProperties;
}

function buildColorStyle(
    tokens: EditableLightDarkPalette,
    includeDarkMode: boolean,
): Record<string, string> {
    const style: Record<string, string> = {};
    for (const [group, roles] of Object.entries(tokens)) {
        for (const [role, token] of Object.entries(roles)) {
            style[`--jkl-color-${group}-${role}`] = includeDarkMode
                ? `light-dark(${token.light}, ${token.dark})`
                : token.light;
        }
    }
    return style;
}
