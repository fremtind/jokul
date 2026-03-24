import type { Preview } from "@storybook/nextjs";
import { INITIAL_VIEWPORTS } from "storybook/viewport";
import { initTabListener } from "../packages/jokul/src/utilities/tabListener.js";
import { brandDecorator, brandGlobal } from "./globals/brand.js";
import { sizeDecorator, sizeGlobal } from "./globals/size.js";
import { themeDecorator, themeGlobal } from "./globals/theme.js";
import { variantDecorator, variantGlobal } from "./globals/variant.js";

import "./global.scss";

initTabListener();

const backgroundOptions = [
    {
        name: "Page",
        value: "var(--jkl-color-background-page)",
    },
    {
        name: "Container",
        value: "var(--jkl-color-background-container)",
    },
];

const preview: Preview = {
    globalTypes: {
        brand: brandGlobal,
        theme: themeGlobal,
        size: sizeGlobal,
        variant: variantGlobal,
    },
    initialGlobals: {
        brand: "default",
        theme: undefined,
        size: undefined,
        variant: "neutral",
    },
    decorators: [
        themeDecorator,
        sizeDecorator,
        variantDecorator,
        brandDecorator,
    ],
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
                headingSelector: "h2, h3",
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
