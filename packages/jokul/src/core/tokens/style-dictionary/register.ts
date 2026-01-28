import StyleDictionary from "style-dictionary";

import {
    cssColorVariablesFormat,
    cssSizeVariablesFormat,
    cssSpacingVariablesFormat,
    cssThemeVariablesFormat,
    javascriptEsmFormat,
    scssColorVariablesFormat,
    scssSizeVariablesFormat,
    tailwindCssColorsFormat,
} from "./formats/index.js";

import { stripLightDarkTransform } from "./transforms/index.js";

import { isColor, isSize, isSpacing, isUnit } from "./filters/index.js";

// Formats
StyleDictionary.registerFormat(javascriptEsmFormat);
StyleDictionary.registerFormat(cssThemeVariablesFormat);
StyleDictionary.registerFormat(tailwindCssColorsFormat);
StyleDictionary.registerFormat(cssColorVariablesFormat);
StyleDictionary.registerFormat(cssSizeVariablesFormat);
StyleDictionary.registerFormat(cssSpacingVariablesFormat);
StyleDictionary.registerFormat(scssColorVariablesFormat);
StyleDictionary.registerFormat(scssSizeVariablesFormat);

// Transforms
StyleDictionary.registerTransform(stripLightDarkTransform);

// Filters
StyleDictionary.registerFilter(isColor);
StyleDictionary.registerFilter(isSpacing);
StyleDictionary.registerFilter(isSize);
StyleDictionary.registerFilter(isUnit);

StyleDictionary.registerTransformGroup({
    name: "typescript",
    transforms: ["name/camel"],
});

const baseCssTransforms = [...StyleDictionary.hooks.transformGroups.css];
const baseScssTransforms = [...StyleDictionary.hooks.transformGroups.scss];

StyleDictionary.registerTransformGroup({
    name: "css",
    transforms: [...baseCssTransforms, "strip/light-dark"],
});

StyleDictionary.registerTransformGroup({
    name: "css-color",
    transforms: baseCssTransforms,
});

StyleDictionary.registerTransformGroup({
    name: "scss",
    transforms: [...baseScssTransforms, "strip/light-dark"],
});
