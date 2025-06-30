import type { Preview } from "@storybook/react";
import { initTabListener } from "../packages/jokul/src/utilities/tabListener.js";
import {
    backgroundDecorator,
    backgroundGlobal,
    backgrounds,
} from "./decorators/background.js";
import {
    densities,
    densityDecorator,
    densityGlobal,
} from "./decorators/density.js";
import { layoutDecorator, layoutGlobal } from "./decorators/layout.js";
import { themeDecorator, themeGlobal, themes } from "./decorators/theme.js";

import "../packages/jokul/src/components/card/styles/_index.scss";
import "./global.scss";

initTabListener();

const preview: Preview = {
    globalTypes: {
        background: backgroundGlobal,
        theme: themeGlobal,
        density: densityGlobal,
        layout: layoutGlobal,
    },
    initialGlobals: {
        background: backgrounds[1], // Standard bakgrunnsfarge
        theme: themes[0], // Automatisk dark/light
        density: densities[0],
        layout: false,
    },
    decorators: [
        backgroundDecorator,
        themeDecorator,
        densityDecorator,
        layoutDecorator,
    ],
    parameters: {
        backgrounds: {
            disable: true,
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
    argTypes: {
        className: {
            table: {
                disable: true,
            },
        },
        inputClassName: {
            table: {
                disable: true,
            },
        },
        id: {
            table: {
                disable: true,
            },
        },
        name: {
            table: {
                disable: true,
            },
        },
        "data-testautoid": {
            table: {
                disable: true,
            },
        },
        density: {
            table: {
                disable: true,
            },
        },
    },
};

export default preview;
