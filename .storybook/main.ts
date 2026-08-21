import type { StorybookConfig } from "@storybook/react-vite";
import react from "@vitejs/plugin-react";
import { mergeConfig } from "vite";
const fontsBasePath = process.env.STORYBOOK_FONTS_BASE_PATH;

const config: StorybookConfig = {
    stories: [
        "../packages/jokul/**/*.stories.@(ts|tsx|md|mdx)",
        "./docs/*.mdx",
    ],
    staticDirs: [
        "../storybook-public",
        {
            from: "../packages/jokul/src/fonts",
            to: "/fonts",
        },
    ],
    addons: ["@storybook/addon-docs"],
    framework: {
        name: "@storybook/react-vite",
        options: {},
    },
    typescript: {
        reactDocgen: "react-docgen-typescript",
        reactDocgenTypescriptOptions: {
            include: ["**/components/flex/**/*.tsx"],
            exclude: ["**/*.stories.tsx"],
            shouldExtractLiteralValuesFromEnum: true,
            shouldRemoveUndefinedFromOptional: true,
            propFilter: (prop) =>
                !/node_modules/.test(prop.parent?.fileName ?? ""),
        },
    },
    viteFinal: (config) =>
        mergeConfig(config, {
            plugins: [react()],
            css: {
                preprocessorOptions: {
                    scss: {
                        api: "modern",
                        additionalData: (source: string, filename: string) =>
                            fontsBasePath &&
                            filename
                                .replace(/\\/g, "/")
                                .endsWith("/.storybook/global.scss")
                                ? `@use "../packages/jokul/src/styles/theme/fonts" with ($webfonts-dir: "${fontsBasePath}/fonts");\n${source}`
                                : source,
                    },
                },
            },
        }),
};

export default config;
