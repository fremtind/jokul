import type { Preview } from "@storybook/react";
import React from "react";
import { initTabListener } from "../packages/jokul/src/utilities/tabListener.js";
import { backgroundOptions } from "./backgrounds.js";
import { densities, densityDecorator, densityGlobal } from "./density.js";
import { lookDecorator, lookGlobal, looks } from "./radgiver.js";
import { themeDecorator, themeGlobal, themes } from "./theme.js";

// Styles
import "../packages/jokul/src/components/card/styles/_index.scss";
import "./global.scss";

initTabListener();

const preview: Preview = {
    globalTypes: {
        theme: themeGlobal,
        density: densityGlobal,
        look: lookGlobal,
    },
    initialGlobals: {
        theme: themes[0], // Automatisk dark/light
        density: densities[0],
        backgrounds: { value: "pageVariant" },
        look: looks[0],
    },
    decorators: [
        (Story) => (
            <div style={{ padding: "1em" }}>
                <Story />
            </div>
        ),
        themeDecorator,
        densityDecorator,
        lookDecorator,
    ],
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
