import type { Preview } from "@storybook/nextjs";
import { initTabListener } from "../packages/jokul/src/utilities/tabListener.js";

import "./global.scss";
import { getPreferredColorScheme, themes } from "storybook/theming";
import { brandDecorator, brandGlobal } from "./globals/brand.js";
import { sizeDecorator, sizeGlobal } from "./globals/size.js";
import { themeDecorator, themeGlobal } from "./globals/theme.js";

initTabListener();

const preview: Preview = {
    globalTypes: {
        brand: brandGlobal,
        theme: themeGlobal,
        size: sizeGlobal,
    },
    initialGlobals: {
        brand: undefined,
        theme: undefined,
        size: undefined,
    },
    decorators: [themeDecorator, sizeDecorator, brandDecorator],
    parameters: {
        layout: "centered",
        controls: {
            sort: "requiredFirst",
        },
        docs: {
            theme: themes[getPreferredColorScheme()],
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
    tags: ["autodocs"],
};

export default preview;
