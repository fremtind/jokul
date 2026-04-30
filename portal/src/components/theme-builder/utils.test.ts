import { describe, expect, it } from "vitest";
import schema from "../../../../packages/jokul/src/tokens/color.tokens.json";
import { ROLE_ENTRIES, THEME_MODES, tokensFromSchema } from "./tokens";
import {
    isHex,
    normalizeHex,
    parseEditorJson,
    tokensEqual,
    tokensHaveErrors,
} from "./utils";

describe("utils.ts — JSON-knytning", () => {
    it("parseEditorJson aksepterer den ekte color.tokens.json-en", () => {
        const result = parseEditorJson(JSON.stringify(schema));
        expect(result.ok).toBe(true);
        if (result.ok) {
            expect(result.tokens.length).toBe(ROLE_ENTRIES.length);
        }
    });

    it("parseEditorJson rapporterer manglende stier presist", () => {
        const partial = structuredClone(schema) as unknown as Record<
            string,
            Record<string, Record<string, Record<string, unknown>>>
        >;
        const variant = ROLE_ENTRIES[0].variant;
        // Slett én gruppe for å trigge missing-stier
        delete partial.color[variant][ROLE_ENTRIES[0].group];

        const result = parseEditorJson(JSON.stringify(partial));
        expect(result.ok).toBe(false);
        if (!result.ok) {
            expect(result.error).toMatch(/mangler/);
        }
    });

    it("parseEditorJson avviser ugyldig JSON", () => {
        const result = parseEditorJson("{ ikke gyldig");
        expect(result.ok).toBe(false);
        if (!result.ok) {
            expect(result.error).toMatch(/parses/);
        }
    });

    it("parseEditorJson avviser hex-verdier som ikke er #RRGGBB", () => {
        const broken = structuredClone(schema) as unknown as Record<
            string,
            Record<
                string,
                Record<
                    string,
                    Record<string, { value: Record<string, string> }>
                >
            >
        >;
        const e = ROLE_ENTRIES[0];
        broken.color[e.variant][e.group][e.role].value[THEME_MODES[0]] =
            "ikke-hex";

        const result = parseEditorJson(JSON.stringify(broken));
        expect(result.ok).toBe(false);
    });

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
