import nodePath, { resolve } from "node:path";
import type { Field } from "payload";
import glob from "tiny-glob";

export const PATH_SEPARATOR = "_";

const codeExamplePaths = await glob("**/documentation/*.tsx", {
    cwd: resolve("..", "packages", "jokul", "src", "components"),
});

const optionGroups = Object.groupBy(
    codeExamplePaths.sort().map((examplePath) => ({
        label: examplePath.substring(
            examplePath.lastIndexOf(nodePath.sep) + 1,
            examplePath.lastIndexOf("."),
        ),
        value: examplePath.replaceAll(nodePath.sep, PATH_SEPARATOR),
        group: examplePath.split(nodePath.sep)[0],
    })),
    (examplePaths) => examplePaths.group,
);

export const CodeExampleField: Field = {
    type: "text",
    name: "path",
    admin: {
        components: {
            Field: {
                path: "@/fields/code-example/CodeExampleInput",
                serverProps: {
                    optionGroups,
                },
                clientProps: {
                    optionGroups,
                },
            },
        },
    },
};
