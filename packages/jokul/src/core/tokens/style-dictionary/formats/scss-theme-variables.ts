import { fileHeader, formattedVariables } from "style-dictionary/utils";
import { PREFIX } from "../config.js";
import type { Dictionary, File, Format } from "style-dictionary/types";

const scssThemeVariablesFormat: Format = {
    name: "scss/theme-variables",
    format: async ({
        dictionary,
        file,
    }: { dictionary: Dictionary; file: File }) => {
        const header = await fileHeader({ file });
        const staticColorTokens = dictionary.allTokens.filter(
            (token) =>
                !token.path.some((word) => ["light", "dark"].includes(word)),
        );

        // Bruker 'light' som kilde for å unngå duplikater
        const uniqueColorTokens = dictionary.allTokens.filter((token) =>
            token.path.includes("light"),
        );

        const dynamicColorTokens = uniqueColorTokens.map((token) => {
            return {
                ...token,
                value: `var(--${PREFIX}-${token.name})`,
            };
        });

        const staticColorVariables = formattedVariables({
            format: "sass",
            dictionary: { ...dictionary, allTokens: staticColorTokens },
        });

        const dynamicColorVariables = formattedVariables({
            format: "sass",
            dictionary: { ...dictionary, allTokens: dynamicColorTokens },
        });

        return `${header}
${staticColorVariables}

// Dynamiske variabler for farge, via referanse til CSS-variabler
${dynamicColorVariables}`;
    },
};

export default scssThemeVariablesFormat;
