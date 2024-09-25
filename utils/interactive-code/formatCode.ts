import tsParser from "prettier/parser-typescript";
import * as prettier from "prettier/standalone";

const CODE_START_BLOCK = "/* -- EXAMPLE CODE START -- */";
const CODE_END_BLOCK = "/* -- EXAMPLE CODE END -- */";

export const formatCode = (originalCode: string) => {
    const code = `
        ${(originalCode as string).substring(
            (originalCode as string).indexOf(CODE_START_BLOCK) + CODE_START_BLOCK.length,
            (originalCode as string).indexOf(CODE_END_BLOCK),
        )}
    `;

    const formattedCode = prettier.format(code, {
        parser: "typescript",
        plugins: [tsParser],
        trailingComma: "none",
    });

    return formattedCode.endsWith(";\n") ? formattedCode.substring(0, formattedCode.length - 2) : formattedCode;
};
