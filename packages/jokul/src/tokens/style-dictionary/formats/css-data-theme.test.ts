import type { TransformedToken } from "style-dictionary/types";
import { describe, expect, it } from "vitest";
import {
    isColorSchemeToken,
    isDataThemeToken,
    isStaticToken,
} from "../filters.js";
import cssDataTheme from "./css-data-theme.js";

const makeToken = (path: string[], value: unknown): TransformedToken =>
    ({
        name: path.join("-"),
        path,
        value,
        original: { value },
    }) as unknown as TransformedToken;

const opacity = makeToken(["opacity", "hover"], { light: "10%", dark: "15%" });
const color = makeToken(["color", "@", "text"], {
    light: "#fff",
    dark: "#000",
});

describe("tema-filtre", () => {
    it("skiller farger fra andre lys/mørk-tokens", () => {
        expect(isColorSchemeToken(color)).toBe(true);
        expect(isDataThemeToken(color)).toBe(false);
        expect(isColorSchemeToken(opacity)).toBe(false);
        expect(isDataThemeToken(opacity)).toBe(true);
        expect(isStaticToken.filter(opacity, {})).toBe(false);
    });
});

describe("css/data-theme-format", () => {
    it("genererer selektorer for media query og data-theme", async () => {
        const result = await (
            cssDataTheme.format as (args: unknown) => unknown
        )({
            dictionary: { allTokens: [opacity, color] },
            file: { destination: "_data-theme.scss" },
            options: {},
            platform: {},
        });

        expect(result).toContain('[data-theme="light"] {');
        expect(result).toContain("--jkl-opacity-hover: 10%;");
        expect(result).toContain("@media (prefers-color-scheme: dark)");
        expect(result).toContain(':root:not([data-theme="light"])');
        expect(result).toContain('[data-theme="dark"] {');
        expect(result).toContain("--jkl-opacity-hover: 15%;");
        expect(result).not.toContain("--jkl-color-");
    });
});
