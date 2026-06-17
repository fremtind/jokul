import type { CSSProperties } from "react";
import type { EditableLightDarkPalette } from "../generator/types";
import { type FontOptionId, getFontOption } from "./fontOptions";

type ThemePreviewStyleOptions = {
    tokens: EditableLightDarkPalette;
    includeDarkMode: boolean;
    regularFont: FontOptionId;
    displayFont: FontOptionId;
};

export function buildThemePreviewStyle({
    tokens,
    includeDarkMode,
    regularFont,
    displayFont,
}: ThemePreviewStyleOptions): CSSProperties {
    const regularFontOption = getFontOption(regularFont);
    const displayFontOption = getFontOption(displayFont);

    return {
        ...buildColorStyle(tokens, includeDarkMode),
        "--jkl-font-family-regular": regularFontOption.font.family.regular,
        "--jkl-font-family-display": displayFontOption.font.family.display,
        "--jkl-font-weight-normal": regularFontOption.font.weight.normal,
        "--jkl-font-weight-bold": regularFontOption.font.weight.bold,
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
