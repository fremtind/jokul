import { kebabCase } from "change-case";
import StyleDictionary from "style-dictionary";

import cssBrandFontsFormat from "./formats/css-brand-fonts.js";
import cssColorSchemeBrand from "./formats/css-color-scheme-brand.js";
import cssColorScheme from "./formats/css-color-scheme.js";
import cssSizeFormat from "./formats/css-size.js";
import cssTailwind4Format from "./formats/css-tailwind4.js";
import cssThemeVariablesFormat from "./formats/css-theme-variables.js";

import {
    isBrandFontValue,
    isColorSchemeValue,
    isSizeValue,
    isStaticToken,
} from "./filters.js";

import { PREFIX } from "./config.js";

// Formats
StyleDictionary.registerFormat(cssThemeVariablesFormat);
StyleDictionary.registerFormat(cssColorScheme);
StyleDictionary.registerFormat(cssColorSchemeBrand);
StyleDictionary.registerFormat(cssBrandFontsFormat);
StyleDictionary.registerFormat(cssSizeFormat);
StyleDictionary.registerFormat(cssTailwind4Format);

// Transforms

/**
 * Transformerer token-verdier til CSS-variabelreferanser.
 *
 * Konverterer en token med path ["color", "background", "page"]
 * til verdien "var(--jkl-color-background-page)".
 *
 * Håndterer også camelCase i path-segmenter ved å konvertere dem til kebab-case,
 * slik at ["typography", "lineHeight", "tight"] blir "var(--jkl-typography-line-height-tight)".
 */
StyleDictionary.registerTransform({
    name: "value/css-var-reference",
    type: "value",
    transitive: true,
    transform: (token) => {
        const varName = token.path
            .map((pathSegment) => kebabCase(pathSegment))
            .join("-");
        return `var(--${PREFIX}-${varName})`;
    },
});

// Filters
StyleDictionary.registerFilter(isColorSchemeValue);
StyleDictionary.registerFilter(isSizeValue);
StyleDictionary.registerFilter(isStaticToken);
StyleDictionary.registerFilter(isBrandFontValue);

/**
 * Transform-gruppe for TypeScript-output.
 *
 * Konverterer token-navn til camelCase og token-verdier til CSS-variabelreferanser.
 * Brukes for å generere TypeScript-objekter der verdiene peker til CSS custom properties.
 */
StyleDictionary.registerTransformGroup({
    name: "typescript-css-var",
    transforms: ["name/camel", "value/css-var-reference"],
});

/**
 * Transform-gruppe for SCSS-output.
 *
 * Utvider standard SCSS-transforms med konvertering av verdier til CSS-variabelreferanser.
 * Brukes for å generere Sass-variabler og maps der verdiene peker til CSS custom properties.
 */
StyleDictionary.registerTransformGroup({
    name: "scss-css-var",
    transforms: [
        ...StyleDictionary.hooks.transformGroups.scss,
        "value/css-var-reference",
    ],
});
