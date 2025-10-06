import { fileHeader, formattedVariables } from "style-dictionary/utils";
import { PREFIX } from "../config.js";
import type { Dictionary, File, Format } from "style-dictionary/types";

const cssDynamicColorVariablesFormat: Format = {
    name: "css/dynamic-color-variables",
    format: async ({
        dictionary,
        file,
    }: { dictionary: Dictionary; file: File }) => {
        const dynamicColorTokens = (scheme: string) =>
            dictionary.allTokens.filter((token) => token.path.includes(scheme));

        return `${await fileHeader({ file })}
/* stylelint-disable */
@use "../jkl";

@layer jokul.theme {
    ${["light", "dark"]
        .map(
            (scheme) => `@include jkl.${scheme}-mode-variables {
${formattedVariables({
    dictionary: {
        ...dictionary,
        allTokens: dynamicColorTokens(scheme),
    },
    format: "css",
    formatting: {
        indentation: "        ",
        prefix: `--${PREFIX}-`,
    },
})}
    }`,
        )
        .join("\n\n    ")}
}
`;
    },
};

export default cssDynamicColorVariablesFormat;
