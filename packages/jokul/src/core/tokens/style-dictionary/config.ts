import type { Config, DesignToken } from "style-dictionary/types";

export const PREFIX = "jkl";

export const legacyDesignTokensConfig: Config = {
    source: ["src/core/tokens/legacy/*.json"],
    platforms: {
        ts: {
            transformGroup: "typescript",
            buildPath: "./src/core/",
            files: [
                {
                    destination: "tokens.ts",
                    format: "javascript/esm",
                    filter: (token: DesignToken) =>
                        !token.filePath.includes("color.legacy"),
                },
            ],
        },
        scss: {
            transformGroup: "scss",
            buildPath: "./src/core/jkl/legacy/",
            files: [
                {
                    destination: "_dynamic-colors.scss",
                    format: "scss/theme-variables",
                    filter: (token) =>
                        token.path.some((word) =>
                            ["light", "dark"].includes(word),
                        ),
                },
                {
                    destination: "_tokens.scss",
                    format: "scss/map-deep",
                    filter: (token) =>
                        !token.path.some((word) =>
                            ["light", "dark"].includes(word),
                        ),
                },
            ],
        },
        css: {
            transformGroup: "css",
            buildPath: "./src/core/styles/theme/",
            files: [
                {
                    destination: "_legacy-tokens.scss",
                    format: "css/theme-variables",
                    filter: (token: DesignToken) =>
                        !token.filePath.includes("semantic"),
                },
                {
                    destination: "_legacy-color-tokens.scss",
                    format: "css/dynamic-color-variables",
                    filter: (token: DesignToken) =>
                        token.filePath.includes("semantic"),
                },
            ],
        },
        tailwind: {
            transformGroup: "css",
            buildPath: "src/tailwind/",
            files: [
                {
                    destination: "colors.ts",
                    format: "tailwindcss/colors",
                    filter: (token: DesignToken) =>
                        token.path.includes("light"),
                },
            ],
        },
    },
};

export const designTokensConfig: Config = {
    source: ["src/core/tokens/!(legacy)/*.json"],
    platforms: {
        scss: {
            transformGroup: "scss",
            buildPath: "./src/core/jkl/",
            files: [
                {
                    destination: "_tokens.scss",
                    format: "scss/theme-variables",
                    filter: (token: DesignToken) =>
                        token.type === "spacing" ||
                        ["border", "text", "background"].includes(
                            typeof token.attributes?.type === "string"
                                ? token.attributes.type
                                : "",
                        ),
                },
            ],
        },
        css: {
            transformGroup: "css",
            buildPath: "./src/core/styles/theme/",
            files: [
                {
                    destination: "_tokens.scss",
                    format: "css/theme-variables",
                    filter: (token: DesignToken) => token.type === "spacing",
                },
                {
                    destination: "_color-tokens.scss",
                    format: "css/dynamic-color-variables",
                    filter: "isColor",
                },
                {
                    destination: "_spacing-tokens.scss",
                    format: "css/theme-variables",
                    filter: "isSpacing",
                },
            ],
        },
    },
};
