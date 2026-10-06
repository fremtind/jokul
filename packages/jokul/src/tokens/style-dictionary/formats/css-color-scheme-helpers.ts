import type { TransformedToken } from "style-dictionary/types";
import { PREFIX } from "../config.js";

/**
 * Hjelpere som brukes av både base color-scheme-formatet og brand-overrides.
 *
 * Målet er å samle den delte formatteringen ett sted, så de to formatene
 * skriver samme deklarasjoner.
 */
function getColorTokenVariableName(token: TransformedToken): string {
    return `--${PREFIX}-${token.name}`;
}

/**
 * Formaterer hele settet av fargetokens til CSS custom properties med
 * `light-dark()`.
 *
 * Denne brukes av både `css/color-scheme` og `css/color-scheme-brand`, slik at
 * basefilen og brand-overrides får identisk syntaks for tokenverdiene.
 */
export function formatColorTokenDeclarations(
    colorTokens: TransformedToken[],
    indentation: string,
): string {
    return colorTokens
        .map(
            (token) =>
                `${indentation}${getColorTokenVariableName(token)}: light-dark(${token.value.light}, ${token.value.dark});`,
        )
        .join("\n");
}

/**
 * Formaterer fargetokens med bare lys verdi, til bruk som fallback i
 * nettlesere uten støtte for `light-dark()`.
 */
export function formatColorTokenFallbackDeclarations(
    colorTokens: TransformedToken[],
    indentation: string,
): string {
    return colorTokens
        .map(
            (token) =>
                `${indentation}${getColorTokenVariableName(token)}: ${token.value.light};`,
        )
        .join("\n");
}

/**
 * Betingelsen for fallback-blokken. Verdiene i testen må være gyldige farger.
 */
export const LIGHT_DARK_UNSUPPORTED =
    "@supports not (color: light-dark(#000, #fff))";
