import type { ColorToken } from "../tokens";

export const THEME_BUILDER_DRAFT_KEY = "jkl.theme-builder.draft.v2";

export type ThemeBuilderDraft = {
    tokens: ColorToken[];
};

type DraftStorage = Pick<Storage, "getItem" | "setItem">;

export function readThemeBuilderDraft(
    storage: DraftStorage,
): ThemeBuilderDraft | null {
    try {
        const raw = storage.getItem(THEME_BUILDER_DRAFT_KEY);
        if (!raw) return null;

        const parsed = JSON.parse(raw) as Partial<ThemeBuilderDraft>;
        if (!Array.isArray(parsed.tokens)) return null;

        return { tokens: parsed.tokens };
    } catch {
        return null;
    }
}

export function writeThemeBuilderDraft(
    storage: DraftStorage,
    draft: ThemeBuilderDraft,
): void {
    try {
        storage.setItem(THEME_BUILDER_DRAFT_KEY, JSON.stringify(draft));
    } catch {
        // Quota eller private-mode — ignorer.
    }
}
