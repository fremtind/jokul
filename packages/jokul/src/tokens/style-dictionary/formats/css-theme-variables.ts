import { kebabCase } from "change-case";
import type { Format, TransformedToken } from "style-dictionary/types";
import { fileHeader, formattedVariables } from "style-dictionary/utils";
import { PREFIX } from "../config.js";

/**
 * Sjekker om et token er et sammensatt typografi-token med fontSize, lineHeight,
 * fontWeight og fontFamily.
 */
function isTypographyToken(token: TransformedToken): boolean {
    const value = token.original?.value ?? token.value;
    return (
        value !== null &&
        typeof value === "object" &&
        "fontSize" in value &&
        "lineHeight" in value &&
        "fontWeight" in value &&
        "fontFamily" in value
    );
}

/**
 * Konverterer en referansestreng som "{font.size.2}" til en CSS-variabelreferanse
 * som "var(--jkl-font-size-2)".
 */
function referenceToVar(reference: string): string {
    if (
        typeof reference === "string" &&
        reference.startsWith("{") &&
        reference.endsWith("}")
    ) {
        const path = reference
            .replace(/[{}]/g, "")
            .split(".")
            .map((pathSegment) => kebabCase(pathSegment))
            .join("-");
        return `var(--${PREFIX}-${path})`;
    }
    return reference;
}

/**
 * Formaterer et typografi-token som en CSS custom property med alle fire verdier
 * i CSS font shorthand-format: <font-weight> <font-size>/<line-height> <font-family>
 */
function formatTypographyToken(
    token: TransformedToken,
    indentation: string,
): string {
    const originalValue = token.original?.value as {
        fontSize: string;
        lineHeight: string;
        fontWeight: string;
        fontFamily: string;
    };

    const fontSizeVar = referenceToVar(originalValue.fontSize);
    const lineHeightVar = referenceToVar(originalValue.lineHeight);
    const fontWeightVar = referenceToVar(originalValue.fontWeight);
    const fontFamilyVar = referenceToVar(originalValue.fontFamily);

    return `${indentation}--${PREFIX}-${token.name}: ${fontWeightVar} ${fontSizeVar}/${lineHeightVar} ${fontFamilyVar};`;
}

/**
 * Format for statiske CSS-variabler.
 *
 * Dette formatet genererer CSS custom properties for alle statiske tokens
 * (tokens som ikke er avhengige av fargeskjema eller skjermstørrelse).
 *
 * Typografi-tokens håndteres spesielt og formateres som CSS font shorthand-verdier,
 * f.eks: `--jkl-text-styles-body: var(--jkl-font-weight-normal) var(--jkl-font-size-2)/var(--jkl-line-height-relaxed) var(--jkl-font-family-regular);`
 *
 * Alle variabler legges i `:root` innenfor `@layer jokul.theme`.
 */
const cssThemeVariablesFormat: Format = {
    name: "css/theme-variables",
    format: async ({ dictionary, file, options }) => {
        const indentation = "        ";

        // Separerer typografi-tokens fra andre tokens
        const typographyTokens = dictionary.allTokens.filter(isTypographyToken);
        const otherTokens = dictionary.allTokens.filter(
            (token) => !isTypographyToken(token),
        );

        // Formaterer typografi-tokens manuelt
        const typographyVariables = typographyTokens
            .map((token) => formatTypographyToken(token, indentation))
            .join("\n");

        // Formaterer andre tokens med formattedVariables
        const otherVariables = formattedVariables({
            dictionary: { ...dictionary, allTokens: otherTokens },
            format: "css",
            outputReferences: options.outputReferences,
            formatting: {
                indentation,
                prefix: `--${PREFIX}-`,
            },
        });

        const allVariables = [otherVariables, typographyVariables]
            .filter(Boolean)
            .join("\n");

        return `${await fileHeader({ file })}
@layer jokul.theme {
    :root,
    [data-size],
    [data-theme] {
${allVariables}
    }
}`;
    },
};

export default cssThemeVariablesFormat;
