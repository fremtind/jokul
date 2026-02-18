import type { Config } from "style-dictionary/types";

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
