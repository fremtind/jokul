import { commentStyles } from "style-dictionary/enums";
import type { Dictionary, File, Format } from "style-dictionary/types";
import { fileHeader, formattedVariables } from "style-dictionary/utils";
import { PREFIX } from "../config.js";

const scssColorVariablesFormat: Format = {
    name: "scss/color-variables",
    format: async ({
        dictionary,
        file,
    }: {
        dictionary: Dictionary;
        file: File;
    }) => {
        const header = await fileHeader({
            file,
            commentStyle: commentStyles.short,
        });

        const dynamicColorTokens = dictionary.allTokens.map((token) => {
            return {
                ...token,
                value: `var(--${PREFIX}-${token.name})`,
            };
        });

        const dynamicColorVariables = formattedVariables({
            format: "sass",
            dictionary: { ...dictionary, allTokens: dynamicColorTokens },
        });

        return `${header}
${dynamicColorVariables}`;
    },
};

export default scssColorVariablesFormat;
