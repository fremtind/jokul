import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { PortableTextTypeComponentProps } from "next-sanity";
import { LivePreview } from "./LivePreview";

export const PATH_SEPARATOR = "_";

const CODE_START_BLOCK = "/* -- EXAMPLE CODE START -- */";
const CODE_END_BLOCK = "/* -- EXAMPLE CODE END -- */";

type CodeExampleSchema = {
    codeExample: string;
    showEditor: boolean;
};

export const CodeExample = async ({
    value,
}: PortableTextTypeComponentProps<CodeExampleSchema>) => {
    const exampleFilePath = resolve(
        process.cwd(),
        "..",
        "packages",
        "jokul",
        "src",
        "components",
        ...value.codeExample.split(PATH_SEPARATOR),
    );

    try {
        const file = await readFile(exampleFilePath);
        const exampleCode = `
           ${(file.toString() as string).substring(
               (file.toString() as string).indexOf(CODE_START_BLOCK) +
                   CODE_START_BLOCK.length,
               (file.toString() as string).indexOf(CODE_END_BLOCK),
           )}
           `;

        const code = exampleCode.endsWith(";\n")
            ? exampleCode.substring(0, exampleCode.length - 2)
            : exampleCode;

        return <LivePreview code={code} showEditor={value.showEditor} />;
    } catch (e) {
        return <p>missing file</p>;
    }
};
