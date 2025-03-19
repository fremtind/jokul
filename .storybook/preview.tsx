import type { Preview } from "@storybook/react";
import { backgroundOptions } from "./backgrounds.js";
import { themeDecorator, themeGlobal, themes } from "./theme.js";
import "../packages/jokul/src/components/card/styles/_index.scss";
import "./global.scss";

const preview: Preview = {
    globalTypes: {
        theme: themeGlobal,
    },
    initialGlobals: {
        theme: themes[0], // Automatisk dark/light
        backgrounds: { value: "Page variant" },
    },
    decorators: [themeDecorator],
    parameters: {
        backgrounds: {
            options: backgroundOptions,
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
