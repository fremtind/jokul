import { fileHeader, formattedVariables } from "style-dictionary/utils";
import { PREFIX } from "../config.js";
import type { Dictionary, File, Format } from "style-dictionary/types";

const cssThemeVariablesFormat: Format = {
    name: "css/theme-variables",
    format: async ({
        dictionary,
        file,
    }: { dictionary: Dictionary; file: File }) => {
        return `${await fileHeader({ file })}
@layer jokul.theme {
    :root {
${formattedVariables({
    dictionary,
    format: "css",
    formatting: {
        indentation: "        ",
        prefix: `--${PREFIX}-`,
    },
})}
    }
}`;
    },
};

export default cssThemeVariablesFormat;
