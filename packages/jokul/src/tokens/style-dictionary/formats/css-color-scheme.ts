import type { Dictionary, File, Format } from "style-dictionary/types";
import { fileHeader } from "style-dictionary/utils";
import { isColorSchemeToken } from "../filters.js";
import {
    formatColorTokenDeclarations,
    formatVariantAliasBlocks,
} from "./css-color-scheme-helpers.js";

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
    }: {
        dictionary: Dictionary;
        file: File;
    }) => {
        const colorSchemeTokens =
            dictionary.allTokens.filter(isColorSchemeToken);
        const indentation = "        ";
        const colorTokenDeclarations = formatColorTokenDeclarations(
            colorSchemeTokens,
            indentation,
        );
        const variantAliasBlocks = formatVariantAliasBlocks(
            colorSchemeTokens,
            (variant) =>
                variant === "neutral"
                    ? ':root, [data-variant="neutral"]'
                    : `[data-variant="${variant}"]`,
            indentation,
        );

        return `${await fileHeader({ file })}
@layer jokul.theme {
    :root {
        color-scheme: light dark;

${colorTokenDeclarations}
    }

${variantAliasBlocks ? `${variantAliasBlocks}` : ""}

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
