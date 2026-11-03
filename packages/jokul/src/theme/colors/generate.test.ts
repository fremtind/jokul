import { describe, expect, it } from "vitest";
import expected from "./generate.fixture.json" with { type: "json" };
import { generatePalette } from "./generate.js";
import type { HexColor } from "./types.js";

describe("generatePalette", () => {
    it.each(Object.entries(expected))(
        "gir samme palett som temabyggeren for %s",
        (key, palette) => {
            const [baseColor, method] = key.split("-") as [
                HexColor,
                "wcag" | "oklch",
            ];

            expect(generatePalette(baseColor, method)).toEqual(palette);
        },
    );
});
