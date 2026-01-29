import type { Dictionary, File, Format } from "style-dictionary/types";
import { fileHeader, formattedVariables } from "style-dictionary/utils";
import { PREFIX } from "../config.js";

type Size = "small" | "medium" | "large";

const getSizeValue = (dictionary: Dictionary, size: Size) => {
    const token = dictionary.allTokens.find(
        (t) => t.path[0] === "size" && t.path[1] === size,
    );

    if (!token) {
        throw new Error(`Missing token: size.${size}`);
    }

    const value = token.value;
    if (typeof value !== "number") {
        throw new Error(
            `Expected size.${size} to be a number, got: ${typeof value}`,
        );
    }

    return value;
};

const cssSizeVariablesFormat: Format = {
    name: "css/size-variables",
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

        const header = await fileHeader({ file });

        const small = getSizeValue(dictionary, "small");
        const medium = getSizeValue(dictionary, "medium");
        const large = getSizeValue(dictionary, "large");

        return `${header}
@use "../../jkl";

@layer jokul.theme {
    :root,
    [data-size] {
${formattedVariables({
    dictionary: { ...dictionary, allTokens: finalDictionary },
    format: "css",
    formatting: {
        indentation: "        ",
        prefix: `--${PREFIX}-`,
    },
})}
    }

    [data-size="small"] {
        --jkl-unit-base: #{jkl.rem(${small}px)};
    }

    :root,
    [data-size="medium"] {
        --jkl-unit-base: #{jkl.rem(${medium}px)};
    }

    [data-size="large"] {
        --jkl-unit-base: #{jkl.rem(${large}px)};
    }
}
`;
    },
};

export default cssSizeVariablesFormat;
