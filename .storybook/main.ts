import type { StorybookConfig } from "@storybook/react-vite";
import react from "@vitejs/plugin-react";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
    stories: [
        "../packages/jokul/**/*.stories.@(ts|tsx|md|mdx)",
        "./docs/*.mdx",
    ],
    addons: ["@storybook/addon-docs"],
    framework: {
        name: "@storybook/react-vite",
        options: {},
    },
    typescript: {
        reactDocgen: "react-docgen-typescript",
        reactDocgenTypescriptOptions: {
            include: ["**/src/components/**/*.tsx"],
            exclude: [
                "**/*.stories.tsx",
                "**/*.test.tsx",
                "**/*.figma.tsx",
                "**/text-paths/**",
                "**/development/**",
                "**/documentation/**",
            ],
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
                    },
                },
            },
        }),
};

export default config;
