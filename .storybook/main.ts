import type { StorybookConfig } from "@storybook/react-vite";
import react from "@vitejs/plugin-react";

const config: StorybookConfig = {
    stories: ["../packages/jokul/**/*.stories.@(ts|tsx)"],
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
        config.plugins.push(react());

        return config;
    },
};
export default config;
