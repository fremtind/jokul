import type { TransformedToken } from "style-dictionary/types";
import { describe, expect, it } from "vitest";
import { formatColorTokenDeclarations } from "./css-color-scheme-helpers.js";

const makeColorToken = (path: string[], name: string): TransformedToken =>
    ({
        path,
        name,
        value: {
            light: "#ffffff",
            dark: "#000000",
        },
    }) as TransformedToken;

describe("formatColorTokenDeclarations", () => {
    it("emits default color tokens as generic variables", () => {
        const tokens = [
            makeColorToken(
                ["color", "@", "background", "container"],
                "color-background-container",
            ),
            makeColorToken(
                ["color", "warning", "background", "container"],
                "color-warning-background-container",
            ),
        ];

        const result = formatColorTokenDeclarations(tokens, "    ");

        expect(result).toContain("--jkl-color-background-container: #ffffff;");
        expect(result).toContain(
            "--jkl-color-background-container: light-dark(#ffffff, #000000);",
        );
        expect(result).toContain(
            "--jkl-color-warning-background-container: #ffffff;",
        );
    });
});
