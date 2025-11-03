import { camelCase } from "change-case";
import type {
    DesignToken,
    Dictionary,
    File,
    Format,
} from "style-dictionary/types";
import { fileHeader } from "style-dictionary/utils";

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
        return `${await fileHeader({ file })}export default ${JSON.stringify(formatKeysToCamelCase(dictionary.tokens))};\n`;
    },
};

export default javascriptEsmFormat;
