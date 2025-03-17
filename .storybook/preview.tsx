import type { Preview } from "@storybook/react";
import "../packages/jokul/src/components/card/styles/_index.scss";
import "./global.scss";
import { themeDecorator, themeGlobal, themes } from "./theme.js";

const preview: Preview = {
    globalTypes: {
        theme: themeGlobal,
    },
    initialGlobals: {
        theme: themes[0],
        backgrounds: { value: "page" },
    },
    decorators: [themeDecorator],
    parameters: {
        backgrounds: {
            options: {
                page: {
                    name: "Page",
                    value: "var(--jkl-color-background-page)",
                },
                pageVariant: {
                    name: "Page variant",
                    value: "var(--jkl-color-background-page-variant)",
                },
                container: {
                    name: "Container",
                    value: "var(--jkl-color-background-container)",
                },
                containerLow: {
                    name: "Container low",
                    value: "var(--jkl-color-background-container-low)",
                },
                containerHigh: {
                    name: "Container high",
                    value: "var(--jkl-color-background-container-high)",
                },
            },
        },
        layout: "centered",
        controls: {
            sort: "requiredFirst",
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export default preview;
