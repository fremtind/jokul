import type { ThemeDraft } from "../_context/types";
import type { EditableLightDarkPalette } from "../generator/types";
import { type FontOptionId, getFontOption } from "./fontOptions";

type ThemeTokenMailDraft = Pick<
    ThemeDraft,
    "colorTokens" | "includeDarkMode" | "regularFont" | "displayFont"
>;

export function createThemeBlob({
    colorTokens,
    includeDarkMode,
    regularFont,
    displayFont,
}: ThemeTokenMailDraft): string {
    const data = {
        color: formatColorTokensForDownload(colorTokens, includeDarkMode),
        font: formatFontTokensForDownload(regularFont, displayFont),
    };

    return `data:application/json;base64,${btoa(JSON.stringify(data))}`;
}

function formatColorTokensForDownload(
    colorTokens: EditableLightDarkPalette,
    includeDarkMode: boolean,
) {
    if (includeDarkMode) {
        return colorTokens;
    }

    return Object.fromEntries(
        Object.entries(colorTokens).map(([group, roles]) => [
            group,
            Object.fromEntries(
                Object.entries(roles).map(([role, token]) => [
                    role,
                    {
                        light: token.light,
                    },
                ]),
            ),
        ]),
    );
}

function formatFontTokensForDownload(
    regularFont: FontOptionId,
    displayFont: FontOptionId,
) {
    const regularFontOption = getFontOption(regularFont);
    const displayFontOption = getFontOption(displayFont);

    return {
        family: {
            regular: regularFontOption.family,
            display: displayFontOption.family,
        },
        weight: {
            normal: regularFontOption.weight.normal,
            bold: regularFontOption.weight.bold,
        },
    };
}
