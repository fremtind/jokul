import { join } from "node:path";
import type { Config } from "style-dictionary/types";

export const PREFIX = "jkl";

export const jokulTokens: Config = {
    log: {
        verbosity: "default",
        warnings: "warn",
    },
    source: ["src/tokens/*.json"],
    preprocessors: ["jkl/inline-color-scheme-references"],
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

/** Setter opp bygging av farger og fonter til Sass for én merkevare. */
export function createBrandConfig({
    brand,
    source,
    outputDir,
}: {
    brand: string;
    source: string[];
    outputDir: string;
}): Config {
    return {
        ...jokulTokens,
        source,
        platforms: {
            css: {
                ...jokulTokens.platforms?.css,
                buildPath: join(outputDir, "/"),
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
                            // Relativt fra buildPath ovenfor til src/styles/theme/_fonts.scss
                            baseFontsModule: "../../fonts",
                            webfontsSubdir: `brands/${brand}`,
                            webfontsVarName: `webfonts-dir-${brand}`,
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
