import StyleDictionary from "style-dictionary";
import type { TransformedToken } from "style-dictionary/types";

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
 * Konverterer en token-verdi til en CSS-variabelreferanse.
 *
 * Baserer seg på `token.name` som er satt av SD sitt innebygde `name/kebab`-transform,
 * slik at navngivingslogikken ligger ett sted og vi ikke gjenskaper den her.
 *
 * Eksempler (forutsetter at name/kebab har kjørt):
 * - token.name = "spacing-24"                     → var(--jkl-spacing-24)
 * - token.name = "spacing-2xs"                    → var(--jkl-spacing-2xs)
 * - token.name = "motion-easing-ease-in-bounce-out" → var(--jkl-motion-easing-ease-in-bounce-out)
 */
export function cssVarReferenceTransform(
    token: Pick<TransformedToken, "name">,
): string {
    return `var(--${PREFIX}-${token.name})`;
}

StyleDictionary.registerTransform({
    name: "value/css-var-reference",
    type: "value",
    transitive: true,
    transform: cssVarReferenceTransform,
});

// Filters
StyleDictionary.registerFilter(isColorSchemeValue);
StyleDictionary.registerFilter(isSizeValue);
StyleDictionary.registerFilter(isStaticToken);
StyleDictionary.registerFilter(isBrandFontValue);

/**
 * Transform-gruppe for TypeScript-output.
 *
 * Bruker `name/kebab` (samme som CSS-plattformen) slik at `token.name` alltid
 * er korrekt kebab-case når `value/css-var-reference` bruker det til å bygge
 * CSS-variabelreferansen. Den nøstede objektstrukturen i tokens.ts er uavhengig
 * av token-navn og styres av token-stien.
 */
StyleDictionary.registerTransformGroup({
    name: "typescript-css-var",
    transforms: ["name/kebab", "value/css-var-reference"],
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
