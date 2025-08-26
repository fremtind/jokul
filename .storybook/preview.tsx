import type { Preview } from "@storybook/react";
import { initTabListener } from "../packages/jokul/src/utilities/tabListener.js";
import { backgroundOptions } from "./backgrounds.js";
import { densities, densityDecorator, densityGlobal } from "./density.js";
import { themeDecorator, themeGlobal, themes } from "./theme.js";

// Styles
import "../packages/jokul/src/components/card/styles/_index.scss";
import "./global.scss";

initTabListener();

const preview: Preview = {
    globalTypes: {
        theme: themeGlobal,
        density: densityGlobal,
    },
    initialGlobals: {
        theme: themes[0], // Automatisk dark/light
        density: densities[0],
        backgrounds: { value: "pageVariant" },
    },
    decorators: [themeDecorator, densityDecorator],
    parameters: {
        backgrounds: {
            options: backgroundOptions,
        },
        layout: "centered",
        controls: {
            sort: "alpha",
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        docs: {
            controls: {
                sort: "alpha",
            },
        },
    },
};

export default preview;
