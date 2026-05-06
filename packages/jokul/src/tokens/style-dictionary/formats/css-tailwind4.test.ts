import { kebabCase } from "change-case";
import type { Dictionary, TransformedToken } from "style-dictionary/types";
import { describe, expect, it } from "vitest";
import cssTailwind4Format from "./css-tailwind4.js";

const TEST_PREFIX = "jkl";

/**
 * Simulerer token slik det ser ut etter at name/kebab og value/resolve har kjørt
 * (Tailwind-plattformen bruker transformGroup: "css" uten platform.prefix,
 * slik at token.name ikke inneholder prefikset).
 */
function makeToken(
    path: string[],
    value: unknown,
    original?: unknown,
): TransformedToken {
    return {
        path,
        name: kebabCase([undefined, ...path].join(" ")),
        value,
        original: { value: original ?? value },
    } as unknown as TransformedToken;
}

async function runFormat(tokens: TransformedToken[]): Promise<string> {
    return cssTailwind4Format.format({
        dictionary: { allTokens: tokens } as Dictionary,
        file: { destination: "tailwind.css" },
        options: { prefix: TEST_PREFIX },
        platform: {},
    }) as Promise<string>;
}

describe("css/tailwind4-format", () => {
    describe("fargevariabler (formatColorVariables)", () => {
        it("bruker token.name (satt av name/kebab) til å bygge variabelnavnet i @theme", async () => {
            const token = makeToken(
                ["color", "neutral", "background", "page"],
                { light: "#F4F2EF", dark: "#1B1917" },
            );
            const result = await runFormat([token]);
            expect(result).toContain(
                "--color-neutral-background-page: #F4F2EF;",
            );
            expect(result).toContain(
                "--color-neutral-background-page: light-dark(#F4F2EF, #1B1917);",
            );
        });

        it("håndterer camelCase path-segmenter korrekt via name/kebab", async () => {
            const token = makeToken(["color", "accent", "backgroundAction"], {
                light: "#aaa",
                dark: "#333",
            });
            const result = await runFormat([token]);
            expect(result).toContain("--color-accent-background-action:");
        });
    });

    describe("spacingvariabler (formatSpacingVariables)", () => {
        it("genererer riktig variabelnavn for numeriske spacing-tokens", async () => {
            const tokens = [
                makeToken(["spacing", "24"], "1.5rem"),
                makeToken(["spacing", "168"], "10.5rem"),
            ];
            const result = await runFormat(tokens);
            expect(result).toContain("--spacing-24: 1.5rem;");
            expect(result).toContain("--spacing-168: 10.5rem;");
        });

        it("genererer riktig variabelnavn for alfanumeriske tokens (2xs, 2xl)", async () => {
            const tokens = [
                makeToken(["spacing", "2xs"], "0.25rem"),
                makeToken(["spacing", "2xl"], "6.5rem"),
            ];
            const result = await runFormat(tokens);
            expect(result).toContain("--spacing-2xs: 0.25rem;");
            expect(result).toContain("--spacing-2xl: 6.5rem;");
        });

        it("utelater størrelsesavhengige spacing-tokens (isSizeToken)", async () => {
            const sizeToken = makeToken(["spacing", "base"], {
                small: "5px",
                medium: "8px",
                large: "11px",
            });
            const result = await runFormat([sizeToken]);
            expect(result).not.toContain("--spacing-base");
        });
    });

    describe("breakpoint-variabler (formatBreakpointVariables)", () => {
        it("genererer riktig variabelnavn for breakpoint-tokens", async () => {
            const tokens = [
                makeToken(["breakpoint", "medium"], "680px"),
                makeToken(["breakpoint", "large"], "1200px"),
            ];
            const result = await runFormat(tokens);
            expect(result).toContain("--breakpoint-medium: 680px;");
            expect(result).toContain("--breakpoint-large: 1200px;");
        });
    });

    describe("teksthjelpe-klasser (formatTextUtilities)", () => {
        const textStyleValue = {
            fontSize: "1rem",
            lineHeight: "1.5",
            fontWeight: "400",
            fontFamily: "sans-serif",
        };

        const allTextStyles = [
            "title",
            "title-small",
            "heading-1",
            "heading-2",
            "heading-3",
            "heading-4",
            "heading-5",
            "paragraph-large",
            "paragraph-medium",
            "paragraph-small",
            "text-large",
            "text-medium",
            "text-small",
            "text-micro",
        ];

        it.each(allTextStyles)(
            'genererer korrekt @utility-blokk for "%s"',
            async (name) => {
                const token = makeToken(["textStyle", name], textStyleValue);
                const result = await runFormat([token]);
                expect(result).toContain(`@utility ${name} {`);
                expect(result).toContain(
                    `    font: var(--${TEST_PREFIX}-text-style-${name});`,
                );
                expect(result).toContain("}");
            },
        );

        it("genererer alle 14 tekststil-utilities i én kjøring", async () => {
            const tokens = allTextStyles.map((name) =>
                makeToken(["textStyle", name], textStyleValue),
            );
            const result = await runFormat(tokens);
            for (const name of allTextStyles) {
                expect(result).toContain(`@utility ${name} {`);
                expect(result).toContain(
                    `    font: var(--${TEST_PREFIX}-text-style-${name});`,
                );
            }
        });

        it("utelater tokens som ikke er textStyle", async () => {
            const nonTextToken = makeToken(["spacing", "16"], "1rem");
            const result = await runFormat([nonTextToken]);
            expect(result).not.toContain("@utility");
        });

        it("utelater textStyle-tokens uten fontSize (isTextStyleToken-filter)", async () => {
            const incompleteToken = makeToken(["textStyle", "custom"], {
                lineHeight: "1.5",
            });
            const result = await runFormat([incompleteToken]);
            expect(result).not.toContain("@utility custom");
        });

        it("genererer riktig blokk-struktur med innrykk og korrekte klammeparenteser", async () => {
            const token = makeToken(["textStyle", "heading-1"], textStyleValue);
            const result = await runFormat([token]);
            expect(result).toContain(
                `@utility heading-1 {\n    font: var(--${TEST_PREFIX}-text-style-heading-1);\n}`,
            );
        });
    });
});
