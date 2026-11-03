import {
    type JokulThemeFile,
    type JokulThemeFont,
    THEME_FILE_VERSION,
    isThemeName,
    parseThemeFile,
} from "@fremtind/jokul/theme";
import type { ThemeDraft } from "../_context/types";
import { type FontOptionId, getFontOption } from "./fontOptions";

const FALLBACK_THEME_NAME = "mitt-tema";

export function toThemeName(themeName: string): string {
    const name = themeName
        .normalize("NFKD")
        .replace(/æ/gi, "ae")
        .replace(/ø/gi, "o")
        .replace(/\p{M}/gu, "")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^[^a-z]+|-+$/g, "");

    return isThemeName(name) ? name : FALLBACK_THEME_NAME;
}

function toThemeFont(id: FontOptionId): JokulThemeFont {
    const { family, weight } = getFontOption(id);
    return { family, weight: { ...weight } };
}

/** Gir `undefined` når utkastet har ugyldige farger. */
export function createThemeFile(draft: ThemeDraft): JokulThemeFile | undefined {
    const title = draft.themeName.trim();

    return parseThemeFile({
        version: THEME_FILE_VERSION,
        name: toThemeName(title),
        ...(title && { title }),
        colorTokens: draft.colorTokens,
        includeDarkMode: draft.includeDarkMode,
        fonts: {
            regular: toThemeFont(draft.regularFont),
            display: toThemeFont(draft.displayFont),
        },
    });
}

export function createThemeFileDownloadHref(theme: JokulThemeFile): string {
    return `data:application/json;charset=utf-8,${encodeURIComponent(
        `${JSON.stringify(theme, null, 4)}\n`,
    )}`;
}
