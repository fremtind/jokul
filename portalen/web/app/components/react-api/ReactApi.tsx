import { Accordion, AccordionItem } from "@fremtind/jokul";
import { useQuery } from "@tanstack/react-query";
import React, { type FC } from "react";
import { CodeSnippet } from "../code-snippet";

const isOwnProp = (prop: any) =>
    prop.declarations?.some(
        (declaration: any) =>
            prop.name === "children" ||
            declaration.fileName.includes("jokul/packages"),
    );

const parsePropToSnippet = (prop: any) => {
    const defaultValue =
        prop.defaultValue === null
            ? ""
            : `
* @default ${prop.defaultValue.value}`;
    const description =
        prop.description === ""
            ? ""
            : `/**
* ${prop.description}${defaultValue}
*/
`;

    return `${description}${prop.name}${
        prop.required ? "" : "?"
    }: ${removeUndefinedFromOptional(prop)};
`;
};

const removeUndefinedFromOptional = (prop: any) => {
    if (prop.required) return prop.type.name;

    return prop.type.name.replace(/ \| undefined/, "");
};

const includeJsDoc = (propTypes: {
    description: string;
    tags?: { param?: string; returns?: string };
}) => {
    if (
        !propTypes.description &&
        !propTypes.tags?.param &&
        !propTypes.tags?.returns
    ) {
        return "";
    }

    const description: string | undefined = propTypes.description
        ?.split("\n")
        .map((line) => ` * ${line}`)
        .join("\n");

    const params: string | undefined = propTypes.tags?.param
        ?.split("\n")
        .map((param) => ` * @param ${param}`)
        .join("\n");

    const returns: string | undefined = propTypes.tags?.returns
        ? ` * @returns ${propTypes.tags.returns}`
        : undefined;

    const lines = ["/**", description, " *", params, returns, ` */`];

    return lines.filter((line) => Boolean(line)).join("\n");
};

interface APIDocumentationProps {
    packageName: string;
}

export const ReactApi: FC<APIDocumentationProps> = ({ packageName }) => {
    const { status, data: types } = useQuery<{
        version: string;
        types: Record<string, any>;
    }>({
        queryKey: ["react-api", packageName],
        queryFn: async () => {
            const res = await fetch(`/types/${packageName}.json`);
            return await res.json();
        },
    });

    if (status === "loading" || status === "error" || !types || !types.types) {
        return null;
    }

    return (
        <Accordion>
            {Object.entries(types.types).map(([displayName, propTypes]) => {
                const ownProps = propTypes.props
                    ? Object.values(propTypes.props).filter(isOwnProp)
                    : [];

                const propCodeSnippet = ownProps.reduce(
                    (output, prop) => `${output}${parsePropToSnippet(prop)}`,
                    ``,
                );

                const code = [includeJsDoc(propTypes), propCodeSnippet]
                    .join("\n")
                    .trim();

                return (
                    <AccordionItem title={displayName} key={displayName}>
                        <CodeSnippet code={code} />
                    </AccordionItem>
                );
            })}
        </Accordion>
    );
};
