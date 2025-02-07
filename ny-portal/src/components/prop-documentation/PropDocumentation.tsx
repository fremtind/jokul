import { readFile } from "node:fs/promises";
import { EOL } from "node:os";
import { resolve } from "node:path";
import MissingTypesMessage from "./missing-types.mdx";
import { Props } from "./Props";

type Props = { component: string };

export async function PropDocumentation({ component }: Props) {
    const exampleFilePath = resolve(
        process.cwd(),
        "..",
        "packages",
        "jokul",
        "src",
        "components",
        component,
        "types.ts",
    );

    try {
        const file = await readFile(exampleFilePath);

        return (
            <Props
                props={
                    file.toString()
                    // .split(EOL)
                    // .filter((line) => !line.startsWith("import"))
                    // .join(EOL)
                }
            />
        );
    } catch (e) {
        return <MissingTypesMessage />;
    }
}
