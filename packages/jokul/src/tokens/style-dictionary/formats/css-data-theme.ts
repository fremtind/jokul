import type {
    Dictionary,
    File,
    Format,
    TransformedToken,
} from "style-dictionary/types";
import { fileHeader } from "style-dictionary/utils";
import { PREFIX } from "../config.js";
import { isDataThemeToken } from "../filters.js";

function declarations(
    tokens: TransformedToken[],
    scheme: "light" | "dark",
    indent: string,
): string {
    return tokens
        .map((t) => `${indent}--${PREFIX}-${t.name}: ${t.value[scheme]};`)
        .join("\n");
}

/**
 * Format for lys/mørk-avhengige tokens som ikke er farger (f.eks. opacity).
 * light-dark() fungerer bare for farger, så vi bruker selektorer som dekker
 * både brukerens preferanse (media query) og manuelt satt [data-theme].
 */
const cssDataTheme: Format = {
    name: "css/data-theme",
    format: async ({
        dictionary,
        file,
    }: {
        dictionary: Dictionary;
        file: File;
    }) => {
        const tokens = dictionary.allTokens.filter(isDataThemeToken);

        return `${await fileHeader({ file })}
@layer jokul.theme {
    :root,
    [data-theme="light"] {
${declarations(tokens, "light", "        ")}
    }

    @media (prefers-color-scheme: dark) {
        :root:not([data-theme="light"]) {
${declarations(tokens, "dark", "            ")}
        }
    }

    [data-theme="dark"] {
${declarations(tokens, "dark", "        ")}
    }
}
`;
    },
};

export default cssDataTheme;
