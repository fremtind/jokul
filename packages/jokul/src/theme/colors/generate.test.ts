import { describe, expect, it } from "vitest";
import { generatePalette } from "./generate.js";
import { colorMetadataLight } from "./metadata.js";
import type { HexColor } from "./types.js";

const BASE_COLORS: HexColor[] = [
    "#006F4E",
    "#000000",
    "#ffffff",
    "#1e90ff",
    "#f5c400",
];

describe("generatePalette", () => {
    it.each(BASE_COLORS)("genererer samme WCAG-palett for %s", (baseColor) => {
        expect(generatePalette(baseColor)).toMatchSnapshot();
    });

    it.each(BASE_COLORS)("genererer samme OKLCh-palett for %s", (baseColor) => {
        expect(generatePalette(baseColor, "oklch")).toMatchSnapshot();
    });

    it("har en lys og mørk farge for hver rolle i metadataen", () => {
        const palette = generatePalette("#006F4E");

        for (const [group, roles] of Object.entries(colorMetadataLight)) {
            for (const role of Object.keys(roles)) {
                const color = (
                    palette as Record<
                        string,
                        Record<string, { light: string; dark: string }>
                    >
                )[group][role];

                expect(color.light).toMatch(/^#[0-9a-f]{6}$/i);
                expect(color.dark).toMatch(/^#[0-9a-f]{6}$/i);
            }
        }
    });

    it("bruker basisfargen som kontrastbakgrunn i lyst tema", () => {
        const palette = generatePalette("#006F4E");

        expect(palette.background.contrast.light).toBe("#006F4E");
        expect(palette.text["on-contrast"].light).toBe("#ffffff");
    });
});
