import type { ThemeDraft } from "../_context/types";
import { isFontOptionId } from "../_shared/fontOptions";

const STORAGE_KEY = "jokul.temabygger.draft";
const STORAGE_VERSION = 1;

type StoredThemeDraft = {
    version: typeof STORAGE_VERSION;
    draft: ThemeDraft;
};

export function getStoredThemeDraft(): ThemeDraft | undefined {
    if (typeof window === "undefined") {
        return undefined;
    }

    try {
        const storedValue = window.localStorage.getItem(STORAGE_KEY);
        if (!storedValue) {
            return undefined;
        }

        const draft = parseStoredThemeDraft(JSON.parse(storedValue));
        if (!draft) {
            window.localStorage.removeItem(STORAGE_KEY);
            return undefined;
        }

        return draft;
    } catch {
        return undefined;
    }
}

export function setStoredThemeDraft(draft: ThemeDraft): void {
    if (typeof window === "undefined") {
        return;
    }

    try {
        const storedDraft: StoredThemeDraft = {
            version: STORAGE_VERSION,
            draft,
        };

        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(storedDraft));
    } catch {}
}

function parseStoredThemeDraft(value: unknown): ThemeDraft | undefined {
    if (typeof value !== "object" || value === null || Array.isArray(value)) {
        return undefined;
    }

    const storedDraft = value as Partial<StoredThemeDraft>;
    if (storedDraft.version !== STORAGE_VERSION) {
        return undefined;
    }

    const { draft } = storedDraft;
    if (typeof draft !== "object" || draft === null || Array.isArray(draft)) {
        return undefined;
    }

    if (
        typeof draft.colorTokens !== "object" ||
        draft.colorTokens === null ||
        !isFontOptionId(draft.regularFont) ||
        !isFontOptionId(draft.displayFont) ||
        typeof draft.themeName !== "string" ||
        typeof draft.includeDarkMode !== "boolean"
    ) {
        return undefined;
    }

    return draft;
}
