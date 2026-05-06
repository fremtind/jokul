import { describe, expect, it } from "vitest";
import {
    THEME_MODES,
    TOKEN_DEFINITIONS,
    parseEditorJson,
    tokenListsAreEqual,
    tokenValuesAreValid,
    tokensFromSchema,
} from ".";
import schema from "../../../../../packages/jokul/src/tokens/color.tokens.json";
import { isHexColor, normalizeHexColor } from "./colorValue";

describe("token validation", () => {
    it("parseEditorJson aksepterer den ekte color.tokens.json-en", () => {
        const result = parseEditorJson(JSON.stringify(schema));
        expect(result.ok).toBe(true);
        if (result.ok) {
            expect(result.tokens.length).toBe(TOKEN_DEFINITIONS.length);
        }
    });

    it("parseEditorJson rapporterer manglende stier presist", () => {
        const partial = structuredClone(schema) as unknown as {
            color: Record<string, unknown>;
        };
        const entry = TOKEN_DEFINITIONS[0];
        deletePath(partial.color, entry.path);

        const result = parseEditorJson(JSON.stringify(partial));
        expect(result.ok).toBe(false);
        if (!result.ok) {
            expect(result.error).toMatch(/mangler/);
            expect(result.error).toContain(`color.${entry.id}`);
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
        const broken = structuredClone(schema) as unknown as {
            color: Record<string, unknown>;
        };
        const e = TOKEN_DEFINITIONS[0];
        const node = getPath(broken.color, e.path) as {
            value: Record<string, string>;
        };
        node.value[THEME_MODES[0]] = "ikke-hex";

        const result = parseEditorJson(JSON.stringify(broken));
        expect(result.ok).toBe(false);
    });

    it("isHexColor aksepterer både små og store bokstaver", () => {
        expect(isHexColor("#ABCDEF")).toBe(true);
        expect(isHexColor("#abcdef")).toBe(true);
        expect(isHexColor("#AbCdEf")).toBe(true);
        expect(isHexColor("ABCDEF")).toBe(false);
        expect(isHexColor("#ABC")).toBe(false);
        expect(isHexColor("#GGGGGG")).toBe(false);
    });

    it("normalizeHexColor uppercaser og fjerner mellomrom", () => {
        expect(normalizeHexColor("  #abcdef ")).toBe("#ABCDEF");
    });

    it("tokenValuesAreValid er true for tokens lest fra JSON-en", () => {
        expect(tokenValuesAreValid(tokensFromSchema())).toBe(true);
    });

    it("tokenListsAreEqual er sann for to identiske roundtrips fra JSON", () => {
        expect(tokenListsAreEqual(tokensFromSchema(), tokensFromSchema())).toBe(
            true,
        );
    });

    it("tokenListsAreEqual er false når én verdi endres", () => {
        const a = tokensFromSchema();
        const b = a.map((t, i) =>
            i === 0 ? { ...t, [THEME_MODES[0]]: "#000000" } : t,
        );
        expect(tokenListsAreEqual(a, b)).toBe(false);
    });
});

function getPath(source: Record<string, unknown>, path: string[]): unknown {
    let node: unknown = source;
    for (const segment of path) {
        if (typeof node !== "object" || node === null || Array.isArray(node)) {
            return undefined;
        }
        node = (node as Record<string, unknown>)[segment];
    }
    return node;
}

function deletePath(source: Record<string, unknown>, path: string[]) {
    const parent = getPath(source, path.slice(0, -1));
    if (
        typeof parent === "object" &&
        parent !== null &&
        !Array.isArray(parent)
    ) {
        delete (parent as Record<string, unknown>)[path[path.length - 1]];
    }
}
