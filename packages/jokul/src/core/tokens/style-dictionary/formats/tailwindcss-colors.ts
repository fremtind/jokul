import { fileHeader } from "style-dictionary/utils";
import { PREFIX } from "../config.js";
import type { Dictionary, File, Format } from "style-dictionary/types";

const tailwindCssColorsFormat: Format = {
    name: "tailwindcss/colors",
    format: async ({
        dictionary,
        file,
    }: { dictionary: Dictionary; file: File }) => {
        let output = await fileHeader({ file });

        const tailwindColors = dictionary.allTokens
            .map((token) => {
                const tailwindColorName = token.name
                    .split("-")
                    .slice(1)
                    .join("-");
                const cssVariableName = token.name.split("-").join("-");

                return `    "${tailwindColorName}": "var(--${PREFIX}-${cssVariableName})",`;
            })
            .join("\n");

        output += `const colors = {\n${tailwindColors}\n};\n\n`;
        output += "export default colors;\n";

        return output;
    },
};

export default tailwindCssColorsFormat;
