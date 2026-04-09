import type { Dictionary, File, Format } from "style-dictionary/types";
import { fileHeader } from "style-dictionary/utils";
import { isColorSchemeToken } from "../filters.js";
import { formatColorTokenDeclarations } from "./css-color-scheme-helpers.js";

type BrandColorSchemeOptions = {
    selector?: string;
};

/**
 * Format for distributørspesifikke fargeoverstyringer.
 *
 * Skriver samme tokennavn som base-formatet, men scoped til en selector
 * som for eksempel `[data-brand="dnb"]`.
 */
const cssColorSchemeBrand: Format = {
    name: "css/color-scheme-brand",
    format: async ({
        dictionary,
        file,
        options,
    }: {
        dictionary: Dictionary;
        file: File;
        options?: BrandColorSchemeOptions;
    }) => {
        const selector = options?.selector;

        if (!selector) {
            throw new Error(
                'The "css/color-scheme-brand" format requires a selector option.',
            );
        }

        const colorSchemeTokens =
            dictionary.allTokens.filter(isColorSchemeToken);
        const indentation = "        ";
        const colorTokenDeclarations = formatColorTokenDeclarations(
            colorSchemeTokens,
            indentation,
        );

        return `${await fileHeader({ file })}
@layer jokul.theme {
    ${selector} {
${colorTokenDeclarations}
    }
}
`;
    },
};

export default cssColorSchemeBrand;
