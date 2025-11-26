import type { Preview } from "@storybook/nextjs";
import { INITIAL_VIEWPORTS } from "storybook/viewport";
import { initTabListener } from "../packages/jokul/src/utilities/tabListener.js";
import { sizeDecorator, sizeGlobal } from "./size.js";
import { themeDecorator, themeGlobal } from "./theme.js";
import "./global.scss";

initTabListener();

const backgroundOptions = [
    {
        name: "Page",
        value: "var(--jkl-color-background-page)",
    },
    {
        name: "Page variant",
        value: "var(--jkl-color-background-page-variant)",
    },
    {
        name: "Container",
        value: "var(--jkl-color-background-container)",
    },
    {
        name: "Container low",
        value: "var(--jkl-color-background-container-low)",
    },
    {
        name: "Container high",
        value: "var(--jkl-color-background-container-high)",
    },
];

const preview: Preview = {
    globalTypes: {
        theme: themeGlobal,
        size: sizeGlobal,
    },
    initialGlobals: {
        theme: undefined,
        size: undefined,
    },
    decorators: [themeDecorator, sizeDecorator],
    tags: ["autodocs"],
    parameters: {
        backgrounds: {
            value: backgroundOptions[0].value,
            options: backgroundOptions,
            grid: {
                cellSize: 4,
                opacity: 0.2,
                cellAmount: 4,
            },
        },
        viewport: {
            options: INITIAL_VIEWPORTS,
        },
        layout: "centered",
        controls: {
            sort: "requiredFirst",
        },
        docs: {
            toc: {
                disable: false,
            },
            controls: {
                sort: "requiredFirst",
            },
            codePanel: true,
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
