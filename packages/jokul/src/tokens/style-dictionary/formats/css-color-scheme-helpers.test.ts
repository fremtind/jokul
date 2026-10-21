import type { TransformedToken } from "style-dictionary/types";
import { describe, expect, it } from "vitest";
import {
    formatColorTokenDeclarations,
    formatColorTokenFallbackDeclarations,
} from "./css-color-scheme-helpers.js";

const makeColorToken = (path: string[], name: string): TransformedToken =>
    ({
        path,
        name,
        value: {
            light: "#ffffff",
            dark: "#000000",
        },
    }) as TransformedToken;

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

describe("formatColorTokenDeclarations", () => {
    it("emits only light-dark() declarations", () => {
        const result = formatColorTokenDeclarations(tokens, "    ");

        expect(result).toContain(
            "--jkl-color-background-container: light-dark(#ffffff, #000000);",
        );
        expect(result).toContain(
            "--jkl-color-warning-background-container: light-dark(#ffffff, #000000);",
        );
        expect(result).not.toContain("container: #ffffff;");
    });
});

describe("formatColorTokenFallbackDeclarations", () => {
    it("emits only the light value", () => {
        const result = formatColorTokenFallbackDeclarations(tokens, "    ");

        expect(result).toContain("--jkl-color-background-container: #ffffff;");
        expect(result).toContain(
            "--jkl-color-warning-background-container: #ffffff;",
        );
        expect(result).not.toContain("light-dark");
    });
});
