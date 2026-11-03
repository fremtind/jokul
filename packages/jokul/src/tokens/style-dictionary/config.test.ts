import { describe, expect, it } from "vitest";
import { createBrandConfig, createThemeConfig } from "./config.js";

function getFiles(config: ReturnType<typeof createThemeConfig>) {
    return config.platforms?.css?.files ?? [];
}

describe("createThemeConfig", () => {
    it("bruker data-brand-selektor og base-tokens fra pakken som standard", () => {
        const config = createThemeConfig({
            name: "mitt-tema",
            tokenFiles: ["/tmp/color.mitt-tema.tokens.json"],
            outDir: "/tmp/mitt-tema",
        });

        expect(config.source).toEqual([
            expect.stringMatching(/src[/\\]tokens[/\\]\*\.json$/),
            "/tmp/color.mitt-tema.tokens.json",
        ]);
        expect(config.platforms?.css?.buildPath).toBe("/tmp/mitt-tema/");
        expect(getFiles(config)[0].options).toEqual({
            selector: '[data-brand="mitt-tema"]',
        });
    });

    it("lar selektoren overstyres", () => {
        const config = createThemeConfig({
            name: "mitt-tema",
            tokenFiles: [],
            outDir: "/tmp/mitt-tema",
            selector: ".mitt-tema",
        });

        for (const file of getFiles(config).slice(0, 2)) {
            expect(file.options?.selector).toBe(".mitt-tema");
        }
    });
});

describe("createBrandConfig", () => {
    it("bygger brand-temaer inn i pakken", () => {
        const config = createBrandConfig("dnb");

        expect(config.source).toEqual([
            "src/tokens/*.json",
            "src/tokens/brands/color.dnb.tokens.json",
            "src/tokens/brands/typography.dnb.tokens.json",
        ]);
        expect(config.platforms?.css?.buildPath).toBe(
            "./src/styles/theme/brands/dnb/",
        );
    });
});
