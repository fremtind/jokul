import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
    stories: [
        "../storybook/**/*.mdx",
        "../storybook/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    ],
    addons: [
        "@storybook/addon-onboarding",
        "@storybook/addon-essentials",
        "@chromatic-com/storybook",
        "@storybook/addon-interactions",
    ],
    framework: {
        name: "@storybook/react-vite",
        options: {},
    },
    viteFinal: (config) => {
        // Ensure Vite uses the correct plugin
        config.plugins = config.plugins || [];
        config.plugins.push(require("@vitejs/plugin-react")());

        return config;
    },
};
export default config;
