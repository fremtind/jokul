import { describe, expect, it } from "vitest";
import { tokensFromSchema } from "../tokens";
import {
    THEME_BUILDER_DRAFT_KEY,
    readThemeBuilderDraft,
    writeThemeBuilderDraft,
} from "./draftStorage";

function storageWithValue(value: string | null) {
    const values = new Map<string, string>();
    if (value !== null) values.set(THEME_BUILDER_DRAFT_KEY, value);

    return {
        getItem: (key: string) => values.get(key) ?? null,
        setItem: (key: string, next: string) => {
            values.set(key, next);
        },
    };
}

describe("themeBuilderDraft", () => {
    it("returnerer null når draft mangler eller er korrupt", () => {
        expect(readThemeBuilderDraft(storageWithValue(null))).toBeNull();
        expect(
            readThemeBuilderDraft(storageWithValue("{ ikke json")),
        ).toBeNull();
        expect(readThemeBuilderDraft(storageWithValue("{}"))).toBeNull();
    });

    it("leser og skriver tokens-draft", () => {
        const storage = storageWithValue(null);
        const tokens = tokensFromSchema();

        writeThemeBuilderDraft(storage, { tokens });

        expect(readThemeBuilderDraft(storage)).toEqual({ tokens });
    });
});
