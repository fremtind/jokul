import type { ThemeDraft } from "../_context/types";
import type { EditableLightDarkPalette } from "../generator/types";
import { type FontOptionId, getFontOption } from "./fontOptions";

const THEME_TOKEN_MAIL_RECIPIENT = "fremtind.designsystem@fremtind.no";

type ThemeTokenMailDraft = Pick<
    ThemeDraft,
    "colorTokens" | "includeDarkMode" | "regularFont" | "displayFont"
>;

export type ThemeTokenMailPayload = {
    color: ReturnType<typeof formatColorTokensForMail>;
    font: ReturnType<typeof formatFontTokensForMail>;
};

export function createThemeTokenMailPayload({
    colorTokens,
    includeDarkMode,
    regularFont,
    displayFont,
}: ThemeTokenMailDraft): ThemeTokenMailPayload {
    return {
        color: formatColorTokensForMail(colorTokens, includeDarkMode),
        font: formatFontTokensForMail(regularFont, displayFont),
    };
}

type ThemeTokenMailHrefInput = {
    themeName: string;
    payload: ThemeTokenMailPayload;
};

export function createThemeTokenMailHref({
    themeName,
    payload,
}: ThemeTokenMailHrefInput): string {
    const subject = themeName
        ? `Tokens for ${themeName}`
        : "Tokens fra temabygger";
    const body = JSON.stringify(payload);

    return `mailto:${THEME_TOKEN_MAIL_RECIPIENT}?subject=${encodeURIComponent(
        subject,
    )}&body=${encodeURIComponent(body)}`;
}

function formatColorTokensForMail(
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

function formatFontTokensForMail(
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
