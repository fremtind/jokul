import type { Dictionary, File, Format } from "style-dictionary/types";
import { fileHeader, formattedVariables } from "style-dictionary/utils";

const scssSizeVariablesFormat: Format = {
    name: "scss/size-variables",
    format: async ({
        dictionary,
        file,
    }: {
        dictionary: Dictionary;
        file: File;
    }) => {
        const finalDictionary = dictionary.allTokens.reduce(
            (acc, token) => {
                if (!["small", "medium", "large"].includes(token.path[1])) {
                    acc.push(token);
                }
                return acc;
            },
            [] as typeof dictionary.allTokens,
        );

        return `${await fileHeader({ file })}
${formattedVariables({
    dictionary: { ...dictionary, allTokens: finalDictionary },
    format: "sass",
})}`;
    },
};

export default scssSizeVariablesFormat;
