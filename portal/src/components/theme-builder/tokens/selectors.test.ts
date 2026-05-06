import { describe, expect, it } from "vitest";
import {
    TOKEN_SECTIONS,
    filterTokens,
    groupTokensBySection,
    tokensFromSchema,
} from ".";

describe("token selectors", () => {
    const tokens = tokensFromSchema();

    it("filterTokens matcher full tokensti og kortere søkestrenger", () => {
        const result = filterTokens(tokens, {
            filter: "warning.background",
            showOnlyEdited: false,
            editedTokenIds: new Set(),
        });

        expect(result.length).toBeGreaterThan(0);
        expect(
            result.every((token) => token.id.includes("warning.background")),
        ).toBe(true);
    });

    it("filterTokens kan begrense til endrede tokens", () => {
        const editedTokenIds = new Set([tokens[0].id]);

        expect(
            filterTokens(tokens, {
                filter: "",
                showOnlyEdited: true,
                editedTokenIds,
            }),
        ).toEqual([tokens[0]]);
    });

    it("groupTokensBySection gir alle kjente seksjoner i JSON-rekkefølge", () => {
        const grouped = groupTokensBySection(tokens);

        expect([...grouped.keys()]).toEqual(TOKEN_SECTIONS);
        for (const section of TOKEN_SECTIONS) {
            expect(
                grouped
                    .get(section)
                    ?.every((token) => token.section === section),
            ).toBe(true);
        }
    });
});
