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
 * Genererer CSS-variabelnavn for en token.
 * @example `font.size.2 --> --jkl-font-size-2`
 */
function getVariableName(token: TransformedToken): string {
    return `--${PREFIX}-${token.name}`;
}

/**
 * Formaterer en enkelt token som en CSS custom property med light-dark()-funksjonen.
 * Inkluderer også en fallback for nettlesere som ikke støtter light-dark().
 *
 * @example
 * // Token
 * color.background.page.value = {
 *   light: "#F4F2EF",
 *   dark: "#1B1917"
 * }
 *
 * // Resultat:
 * --jkl-color-background-page: #F4F2EF;
 * --jkl-color-background-page: light-dark(#F4F2EF, #1B1917);
 */
function formatToken(token: TransformedToken, indentation: string): string {
    const varName = getVariableName(token);
    const lightValue = token.value.light;
    const darkValue = token.value.dark;

    // Fallback for nettlesere som ikke støtter light-dark()
    const fallbackLine = `${indentation}${varName}: ${lightValue};`;
    // Moderne nettlesere med light-dark()-støtte
    const lightDarkLine = `${indentation}${varName}: light-dark(${lightValue}, ${darkValue});`;

    return `${fallbackLine}\n${lightDarkLine}`;
}

/**
 * Format for fargevariabler som støtter lys og mørk modus.
 *
 * Dette formatet genererer CSS custom properties som bruker CSS-funksjonen
 * `light-dark()` for å automatisk bytte mellom lys og mørk verdi basert på
 * brukerens foretrukne fargetema.
 *
 * Outputfilen inkluderer:
 * - `color-scheme: light dark` på `:root` for å aktivere automatisk temabytte
 * - Fallback-verdier for nettlesere uten `light-dark()`-støtte
 * - Selektorer for manuell overstyring via `data-theme`-attributtet
 *
 * @example
 * // Generert CSS:
 * // :root {
 * //     color-scheme: light dark;
 * //     --jkl-color-background: #ffffff;
 * //     --jkl-color-background: light-dark(#ffffff, #1a1a1a);
 * // }
 */
const cssColorScheme: Format = {
    name: "css/color-scheme",
    format: async ({
        dictionary,
        file,
    }: { dictionary: Dictionary; file: File }) => {
        const lightDarkTokens = dictionary.allTokens.filter(isColorSchemeToken);
        const indentation = "        ";

        const variables = lightDarkTokens
            .map((token) => formatToken(token, indentation))
            .join("\n");

        return `${await fileHeader({ file })}
@layer jokul.theme {
    :root {
        color-scheme: light dark;

${variables}
    }

    [data-theme="light"] {
        color-scheme: light;
    }
    [data-theme="dark"] {
        color-scheme: dark;
    }
}
`;
    },
};

export default cssColorScheme;
