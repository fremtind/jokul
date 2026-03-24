import type { TransformedToken } from "style-dictionary/types";
import { describe, expect, it } from "vitest";
import { formatVariantAliasBlocks } from "./css-color-scheme-helpers.js";

const makeColorToken = (path: string[], name: string): TransformedToken =>
    ({
        path,
        name,
        value: {
            light: "#ffffff",
            dark: "#000000",
        },
    }) as TransformedToken;

describe("formatVariantAliasBlocks", () => {
    it("can emit neutral aliases to :root as the default variant", () => {
        const tokens = [
            makeColorToken(
                ["color", "neutral", "background", "container"],
                "color-neutral-background-container",
            ),
            makeColorToken(
                ["color", "accent", "background", "container"],
                "color-accent-background-container",
            ),
        ];

        const result = formatVariantAliasBlocks(tokens, (variant) =>
            variant === "neutral"
                ? ':root, [data-variant="neutral"]'
                : `[data-variant="${variant}"]`,
        );

        expect(result).toContain(':root, [data-variant="neutral"]');
        expect(result).toContain(
            "--jkl-color-background-container: var(--jkl-color-neutral-background-container);",
        );
        expect(result).toContain('[data-variant="accent"]');
        expect(result).toContain(
            "--jkl-color-background-container: var(--jkl-color-accent-background-container);",
        );
    });
});
