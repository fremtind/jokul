import { kebabCase } from "change-case";
import type {
    Dictionary,
    File,
    Format,
    TransformedToken,
} from "style-dictionary/types";
import { fileHeader } from "style-dictionary/utils";
import { PREFIX } from "../config.js";
import { isColorSchemeToken } from "../filters.js";

/**
 * Navnet på den nøytrale/default fargerollen i color.tokens.json.
 * Tokens under denne rollen mappes til de generiske `--jkl-color-*`-variablene
 * av `css/color-scheme`-formatet, og skal ikke inngå i color-mode-overstyringene.
 */
const DEFAULT_ROLE = "@";

/**
 * Sjekker om et token er et fargerolle-token, dvs. et fargetema-token
 * (light/dark) som ligger under en semantisk rolle som "warning" eller "error",
 * i motsetning til den nøytrale "@"-rollen.
 */
function isSemanticColorRoleToken(token: TransformedToken): boolean {
    return (
        isColorSchemeToken(token) &&
        token.path[0] === "color" &&
        token.path[1] !== undefined &&
        token.path[1] !== DEFAULT_ROLE
    );
}

/**
 * Bygger navnet på den generiske CSS-variabelen et rolle-token skal overstyre,
 * ved å fjerne rollesegmentet fra stien.
 *
 * Eksempel: path ["color", "warning", "background", "page"] → "color-background-page"
 */
function toGenericVariableName(token: TransformedToken): string {
    const [colorSegment, , ...rest] = token.path;
    return [colorSegment, ...rest]
        .map((segment) => kebabCase(segment))
        .join("-");
}

/**
 * Grupperer fargerolle-tokens etter rollenavn (f.eks. "warning", "error"),
 * og bevarer rekkefølgen rollene først opptrer i i kildedataene.
 */
function groupTokensByRole(
    tokens: TransformedToken[],
): Map<string, TransformedToken[]> {
    const grouped = new Map<string, TransformedToken[]>();

    for (const token of tokens) {
        const role = String(token.path[1]);
        const tokensForRole = grouped.get(role) ?? [];
        tokensForRole.push(token);
        grouped.set(role, tokensForRole);
    }

    return grouped;
}

/**
 * Format for semantiske fargeroller (data-color).
 *
 * Genererer CSS custom properties som overstyrer de generiske `--jkl-color-*`
 * rollene (background, text, border) med farger fra en semantisk rolle som
 * `warning`, `error`, `info` eller `success`, styrt av `[data-color="..."]`.
 *
 * Dette holder `_color-mode.scss` i synk med `color.tokens.json`: alle
 * kategori/egenskap-par som finnes for en rolle i tokens, blir automatisk
 * inkludert, og navngivingen kan aldri komme ut av synk med de generiske
 * variablene fra `css/color-scheme`.
 *
 * @example
 * // Generert CSS:
 * // [data-color="warning"] {
 * //     --jkl-color-background-page: var(--jkl-color-warning-background-page);
 * // }
 */
const cssColorMode: Format = {
    name: "css/color-mode",
    format: async ({
        dictionary,
        file,
    }: {
        dictionary: Dictionary;
        file: File;
    }) => {
        const roleTokens = dictionary.allTokens.filter(
            isSemanticColorRoleToken,
        );
        const tokensByRole = groupTokensByRole(roleTokens);
        const indentation = "        ";

        const blocks = [...tokensByRole.entries()]
            .map(([role, tokens]) => {
                const declarations = tokens
                    .map((token) => {
                        const genericName = toGenericVariableName(token);
                        return `${indentation}--${PREFIX}-${genericName}: var(--${PREFIX}-${token.name});`;
                    })
                    .join("\n");

                return `    [data-color="${role}"] {\n${declarations}\n    }`;
            })
            .join("\n\n");

        return `${await fileHeader({ file })}
@layer jokul.theme {
${blocks}
}
`;
    },
};

export default cssColorMode;
