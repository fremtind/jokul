import React from "react";
import type { Preview } from "@storybook/react";
import { initTabListener } from "../packages/jokul/src/utilities/tabListener.js";
import { backgroundOptions } from "./backgrounds.js";
import { densities, densityDecorator, densityGlobal } from "./density.js";
import { themeDecorator, themeGlobal, themes } from "./theme.js";
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
    decorators: [
        (Story) => (
            <div style={{ padding: "1em" }}>
                <Story />
            </div>
        ),
        themeDecorator,
        densityDecorator,
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
