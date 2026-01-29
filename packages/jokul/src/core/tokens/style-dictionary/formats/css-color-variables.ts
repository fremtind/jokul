import type {
    Dictionary,
    File,
    Format,
    TransformedToken,
} from "style-dictionary/types";
import { fileHeader, formattedVariables } from "style-dictionary/utils";
import { PREFIX } from "../config.js";

const stripSchemeFromPath = (path: string[]) =>
    path.filter((step) => step !== "light" && step !== "dark").join("-");

const normalizeTokenName = (token: TransformedToken) => ({
    ...token,
    name: stripSchemeFromPath(token.path),
});

const cssColorVariablesFormat: Format = {
    name: "css/color-variables",
    format: async ({
        dictionary,
        file,
    }: {
        dictionary: Dictionary;
        file: File;
    }) => {
        const dynamicColorTokens = (scheme: string) =>
            dictionary.allTokens
                .filter((token) => token.path.includes(scheme))
                .map(normalizeTokenName);

        return `${await fileHeader({ file })}
/* stylelint-disable */
@use "../../jkl";

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

export default cssColorVariablesFormat;
