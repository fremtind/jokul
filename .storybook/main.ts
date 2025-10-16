import { mergeConfig } from "vite";
import react from "@vitejs/plugin-react";
import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
    stories: ["../packages/jokul/**/*.stories.@(ts|tsx)"],
    staticDirs: ["../storybook-public"],
    addons: [
        "@storybook/addon-essentials",
        "@chromatic-com/storybook",
        "@storybook/addon-interactions",
        "@storybook/addon-a11y",
        "@storybook/addon-storysource",
    ],
    features: {
        backgroundsStoryGlobals: true,
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
