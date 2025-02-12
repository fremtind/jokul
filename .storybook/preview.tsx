import type { Preview } from "@storybook/react";

import "./global.scss";
import "../packages/jokul/src/components/card/styles/_index.scss";

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
    },
};

export default preview;
