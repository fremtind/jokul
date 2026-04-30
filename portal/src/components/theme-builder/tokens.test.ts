import { describe, expect, it } from "vitest";
import schema from "../../../../packages/jokul/src/tokens/color.tokens.json";
import {
    COLOR_ROLES,
    COLOR_VARIANTS,
    ROLE_ENTRIES,
    THEME_MODES,
    tokenKey,
    tokensFromSchema,
    tokensToSchema,
} from "./tokens";

describe("tokens.ts — JSON-knytning", () => {
    it("COLOR_VARIANTS speiler topp-nivå-nøkler i color.tokens.json (uten meta-nøkkelen `type`)", () => {
        const expected = Object.keys(schema.color).filter(
            (key) => key !== "type",
        );
        expect(COLOR_VARIANTS).toEqual(expected);
    });

    it("ROLE_ENTRIES dekker hver (variant, group, role)-trippel i JSON-en — ingen mer, ingen mindre", () => {
        const expected: { variant: string; group: string; role: string }[] = [];
        for (const variant of COLOR_VARIANTS) {
            const groups = (schema.color as Record<string, unknown>)[variant];
            for (const [group, roles] of Object.entries(
                groups as Record<string, unknown>,
            )) {
                for (const role of Object.keys(roles as object)) {
                    expected.push({ variant, group, role });
                }
            }
        }
        expect(ROLE_ENTRIES).toEqual(expected);
    });

    it("COLOR_ROLES grupperer rollene riktig per gruppe", () => {
        const expected: Record<string, Set<string>> = {};
        for (const { group, role } of ROLE_ENTRIES) {
            expected[group] ??= new Set();
            expected[group].add(role);
        }
        for (const [group, roles] of Object.entries(COLOR_ROLES)) {
            expect(new Set(roles)).toEqual(expected[group]);
        }
        expect(Object.keys(COLOR_ROLES).sort()).toEqual(
            Object.keys(expected).sort(),
        );
    });

    it("THEME_MODES leses fra `value`-objektet på et tilfeldig token i JSON-en", () => {
        const sample = ROLE_ENTRIES[0];
        const node = (
            schema.color as unknown as Record<
                string,
                Record<
                    string,
                    Record<string, { value: Record<string, string> }>
                >
            >
        )[sample.variant][sample.group][sample.role];
        expect(THEME_MODES).toEqual(Object.keys(node.value));
    });

    it("tokenKey gir stabil `variant.group.role`-streng", () => {
        const t = ROLE_ENTRIES[0];
        expect(tokenKey(t)).toBe(`${t.variant}.${t.group}.${t.role}`);
    });

    it("tokensFromSchema gir én ColorToken per ROLE_ENTRY med riktige verdier", () => {
        const tokens = tokensFromSchema();
        expect(tokens.length).toBe(ROLE_ENTRIES.length);
        for (const token of tokens) {
            const node = (
                schema.color as unknown as Record<
                    string,
                    Record<
                        string,
                        Record<string, { value: Record<string, string> }>
                    >
                >
            )[token.variant][token.group][token.role];
            for (const mode of THEME_MODES) {
                expect(token[mode]).toBe(node.value[mode]);
            }
        }
    });

    it("tokensToSchema(tokensFromSchema(json)) bevarer color-strukturen — roundtrip", () => {
        const roundtrip = tokensToSchema(tokensFromSchema());
        // JSON-en har `type: "colorScheme"` på color-rota — den re-emitteres.
        expect(roundtrip.color.type).toBe("colorScheme");
        for (const { variant, group, role } of ROLE_ENTRIES) {
            const original = (
                schema.color as unknown as Record<
                    string,
                    Record<
                        string,
                        Record<string, { value: Record<string, string> }>
                    >
                >
            )[variant][group][role];
            const round = roundtrip.color[variant][group][role];
            expect(round.value).toEqual(original.value);
        }
    });
});
