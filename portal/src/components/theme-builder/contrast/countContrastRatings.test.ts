import { describe, expect, it } from "vitest";
import { THEME_MODES, TOKEN_DEFINITIONS, tokensFromSchema } from "../tokens";
import { countRatings } from "./countContrastRatings";
import { contrastReference } from "./getContrastReference";

describe("countRatings — JSON-knytning", () => {
    const tokens = tokensFromSchema();

    it("totalt antall vurderinger = antall tokens med naturlig par × antall theme-modus", () => {
        const counts = countRatings(tokens);
        const total = Object.values(counts).reduce((a, b) => a + b, 0);

        const tokensWithReference = TOKEN_DEFINITIONS.filter(
            (entry) =>
                contrastReference(
                    tokens.find((t) => t.id === entry.id) ?? tokens[0],
                ) !== null,
        ).length;

        expect(total).toBe(tokensWithReference * THEME_MODES.length);
    });

    it("returnerer alle fire kategorier (AAA, AA, A, ✕)", () => {
        const counts = countRatings(tokens);
        expect(Object.keys(counts).sort()).toEqual(["A", "AA", "AAA", "✕"]);
        for (const value of Object.values(counts)) {
            expect(typeof value).toBe("number");
            expect(value).toBeGreaterThanOrEqual(0);
        }
    });
});
