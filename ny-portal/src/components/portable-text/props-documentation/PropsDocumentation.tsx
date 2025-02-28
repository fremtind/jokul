import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { PortableTextTypeComponentProps } from "next-sanity";
import { FC } from "react";
import MissingTypesMessage from "./missing-types.mdx";
import { Props } from "./Props";

type PropsDocumentationSchema = {
    component_folder: string;
};

export const PropsDocumentation: FC<
    PortableTextTypeComponentProps<PropsDocumentationSchema>
> = async ({ value }) => {
    const exampleFilePath = resolve(
        process.cwd(),
        "..",
        "packages",
        "jokul",
        "src",
        "components",
        value.component_folder,
        "types.ts",
    );

    try {
        const file = await readFile(exampleFilePath);

        return <Props props={file.toString()} />;
    } catch (e) {
        return <MissingTypesMessage />;
    }
};
