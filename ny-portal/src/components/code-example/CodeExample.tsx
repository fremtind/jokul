import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { LivePreview } from "./LivePreview";
import { PATH_SEPARATOR } from "@/fields/code-example";

type Props = { examplePath: string; showEditor?: boolean };

const CODE_START_BLOCK = "/* -- EXAMPLE CODE START -- */";
const CODE_END_BLOCK = "/* -- EXAMPLE CODE END -- */";

export async function CodeExample({ examplePath, showEditor = false }: Props) {
    const exampleFilePath = resolve(
        process.cwd(),
        "..",
        "packages",
        "jokul",
        "src",
        "components",
        ...examplePath.split(PATH_SEPARATOR),
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

        return <LivePreview code={code} showEditor={showEditor} />;
    } catch (e) {
        return <p>missing file</p>;
    }
}
