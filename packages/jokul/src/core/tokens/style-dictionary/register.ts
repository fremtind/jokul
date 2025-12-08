import StyleDictionary from "style-dictionary";

import {
    cssDynamicColorVariablesFormat,
    cssThemeVariablesFormat,
    javascriptEsmFormat,
    scssThemeVariablesFormat,
    tailwindCssColorsFormat,
} from "./formats/index.js";

import { stripLightDarkTransform } from "./transforms/index.js";

import { isColor, isSpacing } from "./filters/index.js";

// Formats
StyleDictionary.registerFormat(javascriptEsmFormat);
StyleDictionary.registerFormat(cssThemeVariablesFormat);
StyleDictionary.registerFormat(scssThemeVariablesFormat);
StyleDictionary.registerFormat(tailwindCssColorsFormat);
StyleDictionary.registerFormat(cssDynamicColorVariablesFormat);

// Transforms
StyleDictionary.registerTransform(stripLightDarkTransform);

// Filters
StyleDictionary.registerFilter(isColor);
StyleDictionary.registerFilter(isSpacing);

StyleDictionary.registerTransformGroup({
    name: "typescript",
    transforms: ["name/camel"],
});

StyleDictionary.registerTransformGroup({
    name: "css",
    transforms: [
        ...StyleDictionary.hooks.transformGroups.css,
        "strip/light-dark",
    ],
});

StyleDictionary.registerTransformGroup({
    name: "scss",
    transforms: [
        ...StyleDictionary.hooks.transformGroups.scss,
        "strip/light-dark",
    ],
});
