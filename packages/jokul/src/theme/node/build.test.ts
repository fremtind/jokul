// @vitest-environment node
import { mkdir, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { generatePalette } from "../colors/generate.js";
import { type JokulThemeFile, THEME_FILE_VERSION } from "../file/themeFile.js";
import { buildThemes } from "./build.js";
import { loadThemeFile, writeThemeFile } from "./files.js";

const font = {
    family: "'Mitt Tema', sans-serif",
    weight: { normal: "400", bold: "600" },
};

const themeA: JokulThemeFile = {
    version: THEME_FILE_VERSION,
    name: "theme-a",
    title: "Tema A",
    colorTokens: generatePalette("#006F4E"),
    includeDarkMode: true,
};

const themeB: JokulThemeFile = {
    version: THEME_FILE_VERSION,
    name: "theme-b",
    colorTokens: generatePalette("#E4002B"),
    includeDarkMode: false,
    fonts: {
        regular: font,
        display: font,
        faces: [
            {
                family: "Mitt Tema",
                weight: 400,
                style: "normal",
                fileName: "MittTema-Regular.woff2",
            },
        ],
    },
};

let dir: string;

beforeEach(async () => {
    dir = await mkdtemp(join(tmpdir(), "jokul-theme-test-"));
});

afterEach(async () => {
    await rm(dir, { recursive: true, force: true });
});

async function writeThemes() {
    await writeThemeFile(themeA, join(dir, "themes/theme-a/theme.json"));
    await writeThemeFile(themeB, join(dir, "themes/theme-b/theme.json"));
    await mkdir(join(dir, "themes/theme-b/fonts"));
    await writeFile(
        join(dir, "themes/theme-b/fonts/MittTema-Regular.woff2"),
        "font",
    );

    return Promise.all(
        ["theme-a", "theme-b"].map(async (name) => {
            const result = await loadThemeFile(
                join(dir, `themes/${name}/theme.json`),
            );
            if (!result.valid) {
                throw new Error(result.errors.join("\n"));
            }
            return result;
        }),
    );
}

const read = (path: string) => readFile(join(dir, path), "utf8");

describe("loadThemeFile", () => {
    it("feiler når en fontfil mangler", async () => {
        await writeThemeFile(themeB, join(dir, "theme.json"));

        const result = await loadThemeFile(join(dir, "theme.json"));

        expect(result.valid).toBe(false);
        expect(!result.valid && result.errors[0]).toContain(
            "MittTema-Regular.woff2",
        );
    });
});

describe("buildThemes", () => {
    it("bygger hvert tema til sin egen mappe med data-brand-selektor", async () => {
        const themes = await writeThemes();

        await buildThemes(themes, { outDir: join(dir, "dist") });

        const colorScheme = await read("dist/theme-a/_color-scheme.scss");
        expect(colorScheme).toMatch(
            /@layer jokul\.theme \{\s+\[data-brand="theme-a"\] \{/,
        );
        expect(await read("dist/theme-a/_index.scss")).toContain(
            '@forward "color-scheme";',
        );
        expect(await read("dist/theme-a/color.theme-a.tokens.json")).toContain(
            '"colorScheme"',
        );
    });

    it("lager fontfiler som kan brukes utenfor Jøkul", async () => {
        const themes = await writeThemes();

        await buildThemes(themes, { outDir: join(dir, "dist") });

        const fonts = await read("dist/theme-b/_fonts.scss");
        expect(fonts).not.toContain("@use");
        expect(fonts).toContain('$webfonts-dir-theme-b: "./fonts" !default;');
        expect(fonts).toContain(
            "--jkl-font-family-regular: 'Mitt Tema', sans-serif;",
        );
        expect(await read("dist/theme-b/fonts/MittTema-Regular.woff2")).toBe(
            "font",
        );
    });

    it("lager CSS, felles index, manifest og typer", async () => {
        const themes = await writeThemes();

        const manifest = await buildThemes(themes, {
            outDir: join(dir, "dist"),
            css: true,
            index: true,
            types: true,
        });

        expect(manifest.themes).toEqual([
            {
                name: "theme-a",
                title: "Tema A",
                css: "./theme-a/theme.css",
                scss: "./theme-a/_index.scss",
            },
            {
                name: "theme-b",
                title: "theme-b",
                css: "./theme-b/theme.css",
                scss: "./theme-b/_index.scss",
            },
        ]);
        expect(JSON.parse(await read("dist/manifest.json"))).toEqual(manifest);
        expect(await read("dist/_index.scss")).toContain(
            '@forward "theme-a";\n@forward "theme-b";',
        );
        expect(await read("dist/theme-b/theme.css")).toContain(
            'url("./fonts/MittTema-Regular.woff2")',
        );

        const allCss = await read("dist/all.css");
        expect(allCss).toContain("[data-brand=theme-a]");
        expect(allCss).toContain("[data-brand=theme-b]");
        expect(allCss).toContain(
            'url("./theme-b/fonts/MittTema-Regular.woff2")',
        );

        expect(await read("dist/brands.d.ts")).toContain(
            'declare module "@fremtind/jokul/utilities" {\n    interface JokulBrands {\n        "theme-a": true;\n        "theme-b": true;\n    }\n}',
        );
    });

    it("avviser temaer med samme navn", async () => {
        const [first] = await writeThemes();

        await expect(
            buildThemes([first, first], { outDir: join(dir, "dist") }),
        ).rejects.toThrow("theme-a");
    });
});
