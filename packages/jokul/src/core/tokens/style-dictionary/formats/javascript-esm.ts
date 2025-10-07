import { fileHeader } from "style-dictionary/utils";
import { camelCase } from "change-case";
import Prettier from "prettier";
import type {
    Dictionary,
    File,
    DesignToken,
    Format,
} from "style-dictionary/types";

const formatKeysToCamelCase = (token: DesignToken) => {
    if (!token || typeof token !== "object") {
        return token;
    }

    if ("value" in token) {
        return token.value;
    }

    const camelCasedObject: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(token)) {
        const camelCasedKey = camelCase(key);
        camelCasedObject[camelCasedKey] = formatKeysToCamelCase(value);
    }

    return camelCasedObject;
};

const javascriptEsmFormat: Format = {
    name: "javascript/esm",
    format: async ({
        dictionary,
        file,
    }: { dictionary: Dictionary; file: File }) => {
        const output = `${await fileHeader({ file })}export default ${JSON.stringify(formatKeysToCamelCase(dictionary.tokens))};\n`;

        return Prettier.format(output, {
            parser: "babel",
            semi: true,
            trailingComma: "all",
            singleQuote: false,
            printWidth: 120,
            tabWidth: 4,
            arrowParens: "always",
        });
    },
};

export default javascriptEsmFormat;
