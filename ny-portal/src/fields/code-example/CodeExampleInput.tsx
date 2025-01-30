import nodePath, { resolve } from "node:path";
import glob from "tiny-glob";
import { CodeExampleSelect } from "./CodeExampleSelect";

export const PATH_SEPARATOR = "_";

export const CodeExampleInput = async ({ path }: { path: string }) => {
    const optionGroups = Object.groupBy(
        (
            await glob("**/documentation/*.tsx", {
                cwd: resolve("..", "packages", "jokul", "src", "components"),
            })
        )
            .sort()
            .map((e) => ({
                label: e.substring(
                    e.lastIndexOf(nodePath.sep) + 1,
                    e.lastIndexOf("."),
                ),
                value: e.replaceAll(nodePath.sep, PATH_SEPARATOR),
                group: e.split(nodePath.sep)[0],
            })),
        (e) => e.group,
    );

    return (
        <CodeExampleSelect
            optionGroups={JSON.stringify(optionGroups)}
            path={path}
        />
    );
};

export default CodeExampleInput;
