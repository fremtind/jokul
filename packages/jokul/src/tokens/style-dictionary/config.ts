import type { Config } from "style-dictionary/types";

export const PREFIX = "jkl";
export const BRAND_NAMES = ["dnb", "eika", "sparebank1"] as const;

export type BrandName = (typeof BRAND_NAMES)[number];

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
                    filter: "isSizeValue",
                    destination: "_size.scss",
                    format: "css/size",
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

/**
 * Lager en separat CSS-config per brand for å bygge en egen SCSS-fil med et
 * komplett, brand-spesifikt fargesett basert på base tokens og brand tokens.
 */
export function createBrandConfig(brand: BrandName): Config {
    return {
        ...jokulTokens,
        source: [
            ...(jokulTokens.source ?? []),
            `src/tokens/brands/color.${brand}.tokens.json`,
            `src/tokens/brands/font.${brand}.tokens.json`,
        ],
        platforms: {
            css: {
                ...jokulTokens.platforms?.css,
                buildPath: `./src/styles/theme/brands/${brand}/`,
                files: [
                    {
                        filter: "isColorSchemeValue",
                        destination: "_color-scheme.scss",
                        format: "css/color-scheme-brand",
                        options: {
                            selector: `[data-brand="${brand}"]`,
                        },
                    },
                    {
                        filter: "isBrandFontValue",
                        destination: "_fonts.scss",
                        format: "css/brand-fonts",
                        options: {
                            selector: `[data-brand="${brand}"]`,
                            webfontsDir: `/fonts/brands/${brand}`,
                            webfontsVarName: `webfonts-dir-${brand}`,
                        },
                    },
                ],
            },
        },
    };
}
