import type { ThemeDraft } from "../_context/types";
import {
    THEME_DRAFT_VERSION,
    type ThemeDraftPayload,
    parseThemeDraftPayload,
} from "../_shared/themeDraftPayload";

const STORAGE_KEY = "jokul.temabygger.draft";

export function getStoredThemeDraft(): ThemeDraft | undefined {
    if (typeof window === "undefined") {
        return undefined;
    }

    try {
        const storedValue = window.localStorage.getItem(STORAGE_KEY);
        if (!storedValue) {
            return undefined;
        }

        const payload = parseThemeDraftPayload(JSON.parse(storedValue));
        if (!payload) {
            window.localStorage.removeItem(STORAGE_KEY);
            return undefined;
        }

        return payload.draft;
    } catch {
        return undefined;
    }
}

export function setStoredThemeDraft(draft: ThemeDraft): void {
    if (typeof window === "undefined") {
        return;
    }

    try {
        const storedDraft: ThemeDraftPayload = {
            version: THEME_DRAFT_VERSION,
            draft,
        };

        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(storedDraft));
    } catch {}
}
