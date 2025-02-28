import type { StorybookConfig } from "@storybook/react-vite";
import vitePluginReact from "@vitejs/plugin-react";

const config: StorybookConfig = {
    stories: ["../packages/jokul/**/*.stories.@(ts|tsx)"],
    staticDirs: ["../storybook-public"],
    addons: [
        "@storybook/addon-essentials",
        "@chromatic-com/storybook",
        "@storybook/addon-interactions",
    ],
    framework: {
        name: "@storybook/react-vite",
        options: {},
    },
    viteFinal: (config) => {
        return {
            ...config,
            plugins: [
                ...(config.plugins || []),
                // Ensure Vite uses the correct plugin
                vitePluginReact(),
            ],
            css: {
                preprocessorOptions: { scss: { api: "modern" } },
            },
        };
    },
};
export default config;
