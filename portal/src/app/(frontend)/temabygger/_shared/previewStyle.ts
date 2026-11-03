import type { CSSProperties } from "react";
import type { EditableLightDarkPalette } from "../generator/types";
import {
    BORDER_RADIUS_STEPS,
    type BorderRadiusScaleId,
    getBorderRadiusScale,
} from "./borderRadius";
import {
    CUSTOM_FONT_WEIGHTS,
    type CustomFonts,
    type FontSlot,
    getCustomFontFamily,
} from "./customFont";
import {
    CUSTOM_FONT_SELECTION,
    DEFAULT_DISPLAY_FONT_OPTION_ID,
    DEFAULT_REGULAR_FONT_OPTION_ID,
    type FontSelectionId,
    getFontOption,
} from "./fontOptions";

type ResolvedFont = {
    family: string;
    weight: { normal: string; bold: string };
};

type ThemePreviewStyleOptions = {
    tokens: EditableLightDarkPalette;
    includeDarkMode: boolean;
    regularFont: FontSelectionId;
    displayFont: FontSelectionId;
    customFonts: CustomFonts;
    borderRadius: BorderRadiusScaleId;
};

export function buildThemePreviewStyle({
    tokens,
    includeDarkMode,
    regularFont,
    displayFont,
    customFonts,
    borderRadius,
}: ThemePreviewStyleOptions): CSSProperties {
    const regular = resolveFont(regularFont, "regular", customFonts);
    const display = resolveFont(displayFont, "display", customFonts);

    return {
        ...buildColorStyle(tokens, includeDarkMode),
        ...buildBorderRadiusStyle(borderRadius),
        "--jkl-font-family-regular": regular.family,
        "--jkl-font-family-display": display.family,
        "--jkl-font-weight-normal": regular.weight.normal,
        "--jkl-font-weight-bold": regular.weight.bold,
    } as CSSProperties;
}

/**
 * Et utkast kan si «egen font» uten å ha fila: forhåndsvisningslenka bærer bare
 * valgene, ikke fontfila. Da faller slotet tilbake til standardfonten i stedet
 * for å vise et navn nettleseren ikke kjenner.
 */
function resolveFont(
    selection: FontSelectionId,
    slot: FontSlot,
    customFonts: CustomFonts,
): ResolvedFont {
    if (selection === CUSTOM_FONT_SELECTION) {
        if (customFonts[slot]) {
            return {
                family: getCustomFontFamily(slot),
                weight: CUSTOM_FONT_WEIGHTS,
            };
        }

        return getFontOption(
            slot === "regular"
                ? DEFAULT_REGULAR_FONT_OPTION_ID
                : DEFAULT_DISPLAY_FONT_OPTION_ID,
        );
    }

    return getFontOption(selection);
}

// Skalaen er valgt i piksler, men tokenene er i rem, slik at hjørnene følger
// tekststørrelsen brukeren har stilt inn i nettleseren.
function buildBorderRadiusStyle(
    id: BorderRadiusScaleId,
): Record<string, string> {
    const { values } = getBorderRadiusScale(id);

    return Object.fromEntries(
        BORDER_RADIUS_STEPS.map((step) => [
            `--jkl-border-radius-${step}`,
            `${values[step] / 16}rem`,
        ]),
    );
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
