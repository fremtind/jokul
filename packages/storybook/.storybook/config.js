import { addParameters, configure } from "@storybook/react";
import jklTheme from "./jkl-theme";

addParameters({
    options: {
        theme: jklTheme,
    },
});

const req = require.context("../../", true, /\.stories\.tsx$/);

function loadStories() {
    req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
