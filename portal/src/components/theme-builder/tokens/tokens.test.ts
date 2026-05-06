import { describe, expect, it } from "vitest";
import {
    THEME_MODES,
    TOKEN_DEFINITIONS,
    TOKEN_ROLES_BY_SECTION,
    TOKEN_SECTIONS,
    getTokenId,
    tokensFromSchema,
    tokensToSchema,
} from ".";
import schema from "../../../../../packages/jokul/src/tokens/color.tokens.json";

type TokenPath = {
    path: string[];
    id: string;
    section: string;
    group: string;
    role: string;
};

function isRecord(value: unknown): value is Record<string, unknown> {
    return typeof value === "object" && value !== null && !Array.isArray(value);
}

function collectTokenPaths(
    node: Record<string, unknown>,
    path: string[] = [],
): TokenPath[] {
    const entries: TokenPath[] = [];

    for (const [key, value] of Object.entries(node)) {
        if (key === "type") continue;

        const nextPath = [...path, key];
        if (isRecord(value) && isRecord(value.value)) {
            const isRootToken = ["background", "text", "border"].includes(
                nextPath[0],
            );
            entries.push({
                path: nextPath,
                id: nextPath.join("."),
                section: isRootToken ? "root" : nextPath[0],
                group: isRootToken ? nextPath[0] : nextPath[1],
                role: nextPath[nextPath.length - 1],
            });
            continue;
        }

        if (isRecord(value)) {
            entries.push(...collectTokenPaths(value, nextPath));
        }
    }

    return entries;
}

function getPath(source: Record<string, unknown>, path: string[]) {
    let node: unknown = source;
    for (const segment of path) {
        if (!isRecord(node)) return undefined;
        node = node[segment];
    }
    return node as { value: Record<string, string> } | undefined;
}

describe("token — JSON-knytning", () => {
    const expectedEntries = collectTokenPaths(
        schema.color as Record<string, unknown>,
    );

    it("TOKEN_DEFINITIONS dekker alle value-noder i color.tokens.json rekursivt", () => {
        expect(TOKEN_DEFINITIONS).toEqual(expectedEntries);
    });

    it("TOKEN_SECTIONS speiler root først og deretter funksjonelle seksjoner fra JSON", () => {
        const expected = expectedEntries.reduce((sections, entry) => {
            if (!sections.includes(entry.section)) sections.push(entry.section);
            return sections;
        }, [] as string[]);

        expect(TOKEN_SECTIONS).toEqual(expected);
    });

    it("TOKEN_ROLES_BY_SECTION grupperer rollene per seksjon og gruppe", () => {
        const expected: Record<string, Record<string, Set<string>>> = {};
        for (const { section, group, role } of expectedEntries) {
            expected[section] ??= {};
            expected[section][group] ??= new Set();
            expected[section][group].add(role);
        }

        for (const [section, groups] of Object.entries(
            TOKEN_ROLES_BY_SECTION,
        )) {
            for (const [group, roles] of Object.entries(groups)) {
                expect(new Set(roles)).toEqual(expected[section][group]);
            }
        }
        expect(Object.keys(TOKEN_ROLES_BY_SECTION)).toEqual(
            Object.keys(expected),
        );
    });

    it("THEME_MODES leses fra value-objektet på root background.page", () => {
        expect(THEME_MODES).toEqual(
            Object.keys(schema.color.background.page.value),
        );
    });

    it("getTokenId gir stabil id-streng", () => {
        const t = TOKEN_DEFINITIONS[0];
        expect(getTokenId(t)).toBe(t.id);
    });

    it("tokensFromSchema gir én ColorToken per TOKEN_DEFINITION med riktige verdier", () => {
        const tokens = tokensFromSchema();
        expect(tokens.length).toBe(TOKEN_DEFINITIONS.length);
        for (const token of tokens) {
            const node = getPath(
                schema.color as Record<string, unknown>,
                token.path,
            );
            for (const mode of THEME_MODES) {
                expect(token[mode]).toBe(node?.value[mode]);
            }
        }
    });

    it("tokensToSchema(tokensFromSchema(json)) bevarer color-strukturen — roundtrip", () => {
        const roundtrip = tokensToSchema(tokensFromSchema());

        expect(roundtrip.color.type).toBe("colorScheme");
        for (const entry of TOKEN_DEFINITIONS) {
            const original = getPath(
                schema.color as Record<string, unknown>,
                entry.path,
            );
            const round = getPath(roundtrip.color, entry.path);
            expect(round?.value).toEqual(original?.value);
        }
    });
});
