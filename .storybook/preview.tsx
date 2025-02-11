import type { Preview } from "@storybook/react";

import "./global.scss";
import "../packages/jokul/src/components/card/styles/_index.scss";

const preview: Preview = {
    parameters: {
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
