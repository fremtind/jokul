import { statSync } from "node:fs";
import { resolve } from "node:path";
import type { Field } from "payload";
import glob from "tiny-glob";

export const PATH_SEPARATOR = "_";

const packageRoot = resolve("..", "packages", "jokul", "src", "components");

const paths = (
    await glob("*", {
        cwd: packageRoot,
    })
).filter((path) => statSync(resolve(packageRoot, path)).isDirectory());

const optionGroups = Object.groupBy(
    paths.sort().map((path) => ({
        label: path,
        value: path,
        group: path,
    })),
    () => "_",
);

export const ComponentFolderField: (position?: "sidebar") => Field = (
    position?: "sidebar",
) => ({
    type: "text",
    name: "component-folder",
    admin: {
        ...(position ? { position } : {}),
        components: {
            Field: {
                path: "@/fields/component-folder/ComponentFolderInput",
                serverProps: {
                    optionGroups,
                },
                clientProps: {
                    optionGroups,
                },
            },
        },
    },
});
