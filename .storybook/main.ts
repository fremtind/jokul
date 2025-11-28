import type { StorybookConfig } from "@storybook/react-vite";
import react from "@vitejs/plugin-react";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
    stories: [
        "../packages/jokul/**/*.stories.@(ts|tsx|md|mdx)",
        "./docs/*.mdx",
    ],
    staticDirs: ["../storybook-public"],
    addons: ["@storybook/addon-docs"],
    features: {
        backgrounds: true,
    },
    framework: {
        name: "@storybook/react-vite",
        options: {},
    },
    viteFinal: (config) =>
        mergeConfig(config, {
            plugins: [react()],
            css: {
                preprocessorOptions: { scss: { api: "modern" } },
            },
        }),
};

export default config;
