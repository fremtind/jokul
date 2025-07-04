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
    viteFinal: (config) => {
        return {
            ...config,
            css: {
                preprocessorOptions: { scss: { api: "modern" } },
            },
        };
    },
};
export default config;
