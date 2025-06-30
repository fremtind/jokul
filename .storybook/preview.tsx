import type { Preview } from "@storybook/react";
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
    argTypes: {
        as: {
            table: { disable: true },
        },
        // children: {
        //     table: { disable: true },
        // },
        ref: {
            table: { disable: true },
        },
        style: {
            table: { disable: true },
        },
    },
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
};

export default preview;
