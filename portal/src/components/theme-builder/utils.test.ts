import { describe, expect, it } from "vitest";
import { THEME_MODES, tokensFromSchema } from "./tokens";
import { isHex, normalizeHex, tokensEqual, tokensHaveErrors } from "./utils";

describe("utils.ts", () => {
    it("isHex aksepterer både små og store bokstaver", () => {
        expect(isHex("#ABCDEF")).toBe(true);
        expect(isHex("#abcdef")).toBe(true);
        expect(isHex("#AbCdEf")).toBe(true);
        expect(isHex("ABCDEF")).toBe(false);
        expect(isHex("#ABC")).toBe(false);
        expect(isHex("#GGGGGG")).toBe(false);
    });

    it("normalizeHex uppercaser og fjerner mellomrom", () => {
        expect(normalizeHex("  #abcdef ")).toBe("#ABCDEF");
    });

    it("tokensHaveErrors er false for tokens lest fra JSON-en", () => {
        expect(tokensHaveErrors(tokensFromSchema())).toBe(false);
    });

    it("tokensEqual er sann for to identiske roundtrips fra JSON", () => {
        expect(tokensEqual(tokensFromSchema(), tokensFromSchema())).toBe(true);
    });

    it("tokensEqual er false når én verdi endres", () => {
        const a = tokensFromSchema();
        const b = a.map((t, i) =>
            i === 0 ? { ...t, [THEME_MODES[0]]: "#000000" } : t,
        );
        expect(tokensEqual(a, b)).toBe(false);
    });
});
