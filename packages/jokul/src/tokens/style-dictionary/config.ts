import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import type { Config } from "style-dictionary/types";
import type { Brand } from "../../utilities/types.js";

export const PREFIX = "jkl";

export const jokulTokens: Config = {
    log: {
        verbosity: "default",
        warnings: "warn",
    },
    source: ["src/tokens/*.json"],
    platforms: {
        css: {
            transformGroup: "css",
            buildPath: "./src/styles/theme/",
            files: [
                {
                    filter: "isColorSchemeValue",
                    destination: "_color-scheme.scss",
                    format: "css/color-scheme",
                },
                {
                    filter: "isColorSchemeValue",
                    destination: "_color-mode.scss",
                    format: "css/color-mode",
                },
                {
                    filter: "isSizeValue",
                    destination: "_size.scss",
                    format: "css/size",
                },
                {
                    filter: "isDataThemeValue",
                    destination: "_data-theme.scss",
                    format: "css/data-theme",
                },
                {
                    filter: "isStaticToken",
                    destination: "_tokens.scss",
                    format: "css/theme-variables",
                    options: {
                        outputReferences: true,
                    },
                },
            ],
        },
        tailwind: {
            transformGroup: "css",
            buildPath: "./styles/",
            files: [
                {
                    destination: "tailwind.css",
                    format: "css/tailwind4",
                    options: { prefix: PREFIX },
                },
            ],
        },
        ts: {
            transformGroup: "typescript-css-var",
            buildPath: "./src/",
            files: [
                {
                    destination: "tokens.ts",
                    format: "javascript/esm",
                    filter: "isStaticToken",
                    options: {
                        minify: true,
                    },
                },
            ],
        },
        sass: {
            transformGroup: "scss-css-var",
            buildPath: "./src/styles/jkl/",
            files: [
                {
                    destination: "_tokens.scss",
                    format: "scss/map-deep",
                    filter: "isStaticToken",
                },
            ],
        },
    },
};

function findPackageRoot(): string {
    let dir = dirname(fileURLToPath(import.meta.url));

    while (dirname(dir) !== dir) {
        const packageJson = join(dir, "package.json");
        if (
            existsSync(packageJson) &&
            JSON.parse(readFileSync(packageJson, "utf8")).name ===
                "@fremtind/jokul"
        ) {
            return dir;
        }
        dir = dirname(dir);
    }

    throw new Error("Fant ikke rotmappen til @fremtind/jokul.");
}

export type ThemeConfigOptions = {
    /** Navnet på temaet, brukes i `data-brand` og i Sass-variabelnavn. */
    name: string;
    /** Temaets token-filer, typisk `color.<name>.tokens.json` og `typography.<name>.tokens.json`. */
    tokenFiles: string[];
    outDir: string;
    /** Standard er `[data-brand="<name>"]`. */
    selector?: string;
    /** Mappen med base-tokens som temaet overstyrer. Standard er `src/tokens` i den installerte pakken. */
    baseTokensDir?: string;
    /** Sass-modulen med `$webfonts-dir`, relativt til `outDir`. */
    baseFontsModule?: string;
};

/**
 * Lager en CSS-config som bygger et komplett, temaspesifikt fargesett og
 * fontoppsett basert på base tokens og temaets egne tokens.
 */
export function createThemeConfig({
    name,
    tokenFiles,
    outDir,
    selector = `[data-brand="${name}"]`,
    baseTokensDir = join(findPackageRoot(), "src", "tokens"),
    baseFontsModule = "../../fonts",
}: ThemeConfigOptions): Config {
    return {
        ...jokulTokens,
        source: [join(baseTokensDir, "*.json"), ...tokenFiles],
        platforms: {
            css: {
                ...jokulTokens.platforms?.css,
                buildPath: outDir.endsWith("/") ? outDir : `${outDir}/`,
                files: [
                    {
                        filter: "isColorSchemeValue",
                        destination: "_color-scheme.scss",
                        format: "css/color-scheme-brand",
                        options: { selector },
                    },
                    {
                        filter: "isBrandFontValue",
                        destination: "_fonts.scss",
                        format: "css/brand-fonts",
                        options: {
                            selector,
                            baseFontsModule,
                            webfontsSubdir: `brands/${name}`,
                            webfontsVarName: `webfonts-dir-${name}`,
                        },
                    },
                    {
                        destination: "_index.scss",
                        format: "scss/brand-index",
                    },
                ],
            },
        },
    };
}

/**
 * Lager en separat CSS-config per brand for å bygge en egen SCSS-fil med et
 * komplett, brand-spesifikt fargesett basert på base tokens og brand tokens.
 */
export function createBrandConfig(brand: Brand): Config {
    const tokenFiles = [
        `src/tokens/brands/color.${brand}.tokens.json`,
        `src/tokens/brands/typography.${brand}.tokens.json`,
    ].filter((source) => existsSync(source));

    return createThemeConfig({
        name: brand,
        tokenFiles,
        outDir: `./src/styles/theme/brands/${brand}/`,
        baseTokensDir: "src/tokens",
    });
}
