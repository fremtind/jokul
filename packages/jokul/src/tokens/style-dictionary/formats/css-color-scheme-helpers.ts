import { kebabCase } from "change-case";
import type { TransformedToken } from "style-dictionary/types";
import { PREFIX } from "../config.js";

const GLOBAL_VARIANTS = new Set(["neutral", "accent"]);

/**
 * Hjelpere som brukes av både base color-scheme-formatet og brand-overrides.
 *
 * Målet er å samle den delte formatteringen ett sted, så de to formatene
 * skriver samme deklarasjoner og aliaser.
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

type VariantAlias = {
    aliasVariableName: string;
    variantName: string;
};

/**
 * Henter ut koblingen mellom en rollebasert token og den generiske variabelen
 * komponentene leser fra, for globale varianter som `neutral` og `accent`.
 *
 * Eksempel:
 * `color.accent.background.container`
 * blir til varianten `accent` og aliaset `--jkl-color-background-container`.
 */
function getVariantAlias(token: TransformedToken): VariantAlias | null {
    if (token.path[0] !== "color" || token.path.length < 4) {
        return null;
    }

    const variantName = kebabCase(token.path[1]);

    if (!GLOBAL_VARIANTS.has(variantName)) {
        return null;
    }

    const aliasPath = [token.path[0], ...token.path.slice(2)];

    return {
        aliasVariableName: `--${PREFIX}-${aliasPath.map((segment) => kebabCase(segment)).join("-")}`,
        variantName,
    };
}

/**
 * Genererer variantblokker som peker de generiske `--jkl-color-*`-variablene
 * til riktig rollebasert tokensett.
 *
 * Resultatet er CSS som:
 * `[data-variant="accent"] { --jkl-color-background-container: var(--jkl-color-accent-background-container); }`
 *
 * Da kan komponenter alltid bruke den generiske flaten, mens variantselectoren
 * bestemmer hvilken global rolle som er aktiv.
 */
export function formatVariantAliasBlocks(
    colorTokens: TransformedToken[],
    getVariantSelector: (variantName: string) => string,
    indentation = "        ",
): string {
    const aliasLinesByVariant = new Map<string, string[]>();

    for (const token of colorTokens) {
        const variantAlias = getVariantAlias(token);

        if (!variantAlias) {
            continue;
        }

        const aliasLine = `${indentation}${variantAlias.aliasVariableName}: var(--${PREFIX}-${token.name});`;
        const existingLines =
            aliasLinesByVariant.get(variantAlias.variantName) ?? [];

        existingLines.push(aliasLine);
        aliasLinesByVariant.set(variantAlias.variantName, existingLines);
    }

    return Array.from(aliasLinesByVariant.entries())
        .map(
            ([variantName, lines]) => `    ${getVariantSelector(variantName)} {
${lines.join("\n")}
    }`,
        )
        .join("\n\n");
}
