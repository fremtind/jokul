import { Title } from "@storybook/blocks";
import type { Preview } from "@storybook/react";
import React from "react";
import "../packages/jokul/src/components/card/styles/_index.scss";
import { PropDocs } from "./docs/props/PropDocs.js";
import "./global.scss";
import { themeDecorator, themeGlobal, themes } from "./theme.js";

const preview: Preview = {
    globalTypes: {
        theme: themeGlobal,
    },
    initialGlobals: {
        theme: themes[0],
        backgrounds: { value: "page" },
    },
    decorators: [themeDecorator],
    parameters: {
        backgrounds: {
            options: {
                page: {
                    name: "Page",
                    value: "var(--jkl-color-background-page)",
                },
                pageVariant: {
                    name: "Page variant",
                    value: "var(--jkl-color-background-page-variant)",
                },
                container: {
                    name: "Container",
                    value: "var(--jkl-color-background-container)",
                },
                containerLow: {
                    name: "Container low",
                    value: "var(--jkl-color-background-container-low)",
                },
                containerHigh: {
                    name: "Container high",
                    value: "var(--jkl-color-background-container-high)",
                },
            },
        },
        options: {
            storySort: (a, b) => {
                let compareBy = "name";
                if (a.type === "docs" && b.type === "story") {
                    return -1;
                } else if (a.type === "story" && b.type === "docs") {
                    return 1;
                } else if (a.type === "docs" && b.type === "docs") {
                    compareBy = "id";
                }

                return a[compareBy] === b[compareBy]
                    ? 0
                    : a[compareBy].localeCompare(b[compareBy], undefined, {
                          numeric: true,
                      });
            },
        },
        layout: "centered",
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        docs: {
            page: () => (
                <>
                    <Title />
                    <PropDocs />
                    {/* For comparison with default ArgTypes table */}
                    {/* <ArgTypes /> */}
                </>
            ),
        },
    },
};

export default preview;
