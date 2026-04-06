import type {
    Dictionary,
    File,
    Format,
    TransformedToken,
} from "style-dictionary/types";
import { fileHeader } from "style-dictionary/utils";
import { PREFIX } from "../config.js";
import { isSizeToken } from "../filters.js";

/**
 * Henter CSS-variabelnavnet for en token.
 */
function getVariableName(token: TransformedToken): string {
    return `--${PREFIX}-${token.name}`;
}

/**
 * Formaterer en enkelt token som en CSS custom property.
 */
function formatToken(
    token: TransformedToken,
    size: "small" | "medium" | "large",
    indentation: string,
): string {
    const varName = getVariableName(token);
    const value = token.value[size];

    return `${indentation}${varName}: ${value};`;
}

/**
 * Format for størrelsesavhengige tokens.
 *
 * Dette formatet håndterer tokens som har forskjellige verdier basert på
 * skjermstørrelse (small, medium, large). Verdiene blir generert som
 * CSS custom properties under `[data-size]`-selektorer, slik at de kan
 * endres dynamisk basert på viewport eller brukerpreferanser.
 *
 * @example
 * Tokens med struktur:
 * ```json
 * {
 *   "font": {
 *     "size": {
 *       "1": {
 *         "value": { "small": "12px", "medium": "14px", "large": "14px" }
 *       }
 *     }
 *   }
 * }
 * ```
 *
 * Blir til:
 * ```css
 * [data-size="small"] { --jkl-font-size-1: 12px; }
 * [data-size="medium"] { --jkl-font-size-1: 14px; }
 * [data-size="large"] { --jkl-font-size-1: 14px; }
 * ```
 */
const cssSizeFormat: Format = {
    name: "css/size",
    format: async ({
        dictionary,
        file,
    }: { dictionary: Dictionary; file: File }) => {
        const sizeTokens = dictionary.allTokens.filter(isSizeToken);
        const indentation = "        ";

        const sizes = ["medium", "small", "large"] as const;

        const sizeBlocks = sizes
            .map((size) => {
                const variables = sizeTokens
                    .map((token) => formatToken(token, size, indentation))
                    .join("\n");

                return `    [data-size="${size}"] {
${variables}
    }`;
            })
            .join("\n\n");

        return `${await fileHeader({ file })}
@layer jokul.theme {
    :root,
    [data-size],
${sizeBlocks}
}
`;
    },
};

export default cssSizeFormat;
