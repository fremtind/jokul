import type { Preview } from "@storybook/nextjs";
import { initTabListener } from "../packages/jokul/src/utilities/tabListener.js";

import "./global.scss";
import { getPreferredColorScheme, themes } from "storybook/theming";
import { brandDecorator, brandGlobal, brands } from "./globals/brand.js";
import { sizeDecorator, sizeGlobal } from "./globals/size.js";
import { themeDecorator, themeGlobal } from "./globals/theme.js";

initTabListener();

const preview: Preview = {
    globalTypes: {
        ...(brands.length > 0 ? { brand: brandGlobal } : {}),
        theme: themeGlobal,
        size: sizeGlobal,
    },
    initialGlobals: {
        ...(brands.length > 0 ? { brand: brands[0]?.value } : {}),
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
