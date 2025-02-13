import { Title } from "@storybook/blocks";
import type { Preview } from "@storybook/react";
import React from "react";
import "../packages/jokul/src/components/card/styles/_index.scss";
import { PropDocs } from "./docs/props/PropDocs.js";
import "./global.scss";

const preview: Preview = {
    parameters: {
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
