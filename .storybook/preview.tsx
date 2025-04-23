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
        backgrounds: { value: "page" },
    },
    decorators: [themeDecorator],
    parameters: {
        actions: { argTypesRegex: "^on.*" },
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
            exclude: /(^on*|^id$|className|density|^data-*|style)/i,
        },
        docs: {
            controls: {
                sort: "alpha",
            },
        },
    },
    argTypes: {
        labelProps: {
            if: {
                arg: "label",
                exists: true,
            },
            description:
                "LabelProps kan endre class, id og variant på label. Teksten endrer du med label-propen.",
            table: {
                category: "Label",
                defaultValue: {
                    summary: undefined,
                },
            },
            options: ["Screen reader only", "Large", "Medium", "Small"],
            control: { type: "select" },
            mapping: {
                "Screen reader only": {
                    srOnly: true,
                },
                Large: {
                    variant: "large",
                },
                Medium: {
                    variant: "medium",
                },
                Small: {
                    variant: "small",
                },
            },
        },
        tooltip: {
            if: {
                arg: "label",
                exists: true,
            },
            table: {
                category: "Label",
                defaultValue: {
                    summary: undefined,
                },
            },
        },
        helpLabel: {
            if: {
                arg: "label",
                exists: true,
            },
            table: {
                category: "Label",
                defaultValue: {
                    summary: undefined,
                },
            },
        },
        errorLabel: {
            if: {
                arg: "label",
                exists: true,
            },
            table: {
                category: "Label",
                defaultValue: {
                    summary: undefined,
                },
            },
        },
    },
};

export default preview;
