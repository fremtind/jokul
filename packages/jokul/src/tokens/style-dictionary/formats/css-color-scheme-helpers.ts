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
 * Skriver én fargetoken som to CSS-deklarasjoner:
 * først en vanlig fallback-verdi, deretter samme variabel med `light-dark()`.
 *
 * Det gir lesbar output og sørger for at eldre nettlesere fortsatt får en verdi.
 */
function formatColorTokenDeclaration(
    token: TransformedToken,
    indentation: string,
): string {
    const variableName = getColorTokenVariableName(token);
    const lightValue = token.value.light;
    const darkValue = token.value.dark;

    const fallbackDeclaration = `${indentation}${variableName}: ${lightValue};`;
    const lightDarkDeclaration = `${indentation}${variableName}: light-dark(${lightValue}, ${darkValue});`;

    return `${fallbackDeclaration}\n${lightDarkDeclaration}`;
}

/**
 * Formaterer hele settet av fargetokens til CSS custom properties.
 *
 * Denne brukes av både `css/color-scheme` og `css/color-scheme-brand`, slik at
 * basefilen og brand-overrides får identisk syntaks for tokenverdiene.
 */
export function formatColorTokenDeclarations(
    colorTokens: TransformedToken[],
    indentation: string,
): string {
    const declarations = colorTokens
        .map((token) => formatColorTokenDeclaration(token, indentation))
        .join("\n");

    return `${indentation}/* stylelint-disable declaration-block-no-duplicate-custom-properties -- fallback and light-dark() declarations are intentionally paired. */\n${declarations}\n${indentation}/* stylelint-enable declaration-block-no-duplicate-custom-properties */`;
}
