import type { ThemeDraft } from "../_context/types";
import { isFontOptionId } from "./fontOptions";

export const THEME_DRAFT_QUERY_PARAM = "draft";
export const THEME_DRAFT_VERSION = 1;

export type ThemeDraftPayload = {
    version: typeof THEME_DRAFT_VERSION;
    draft: ThemeDraft;
};

export function createThemePreviewHref(draft: ThemeDraft): string {
    const params = new URLSearchParams();
    const payload = {
        version: THEME_DRAFT_VERSION,
        draft,
    } satisfies ThemeDraftPayload;

    params.set(THEME_DRAFT_QUERY_PARAM, JSON.stringify(payload));

    return `/temabygger/forhandsvisning?${params.toString()}`;
}

export function parseThemeDraftPayload(
    value: unknown,
): ThemeDraftPayload | undefined {
    if (typeof value !== "object" || value === null || Array.isArray(value)) {
        return undefined;
    }

    const payload = value as Partial<ThemeDraftPayload>;
    if (payload.version !== THEME_DRAFT_VERSION) {
        return undefined;
    }

    if (!isThemeDraft(payload.draft)) {
        return undefined;
    }

    return {
        version: THEME_DRAFT_VERSION,
        draft: payload.draft,
    };
}

function isThemeDraft(value: unknown): value is ThemeDraft {
    if (typeof value !== "object" || value === null || Array.isArray(value)) {
        return false;
    }

    const draft = value as Partial<ThemeDraft>;

    return (
        typeof draft.colorTokens === "object" &&
        draft.colorTokens !== null &&
        !Array.isArray(draft.colorTokens) &&
        isFontOptionId(draft.regularFont) &&
        isFontOptionId(draft.displayFont) &&
        typeof draft.themeName === "string" &&
        typeof draft.includeDarkMode === "boolean"
    );
}
