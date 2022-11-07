import { ExampleComponentProps, CodeExample } from "@fremtind/jkl-internal-doc-utils";
import React, { FC } from "react";
import { Breadcrumb, BreadcrumbItem } from "../src";

export const BreadcrumbExample: FC<ExampleComponentProps> = () => {
    return (
        <Breadcrumb>
            <BreadcrumbItem>
                <a href="/">Hjem</a>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <a href="/komponenter/accordion">Komponenter</a>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <a href="/komponenter/breadcrumb">Breadcrumb</a>
            </BreadcrumbItem>
        </Breadcrumb>
    );
};

export default BreadcrumbExample;

export const breadcrumbExampleCode: CodeExample = () => `
<Breadcrumb>
    <BreadcrumbItem>
        <a href="/">Hjem</a>
    </BreadcrumbItem>
    <BreadcrumbItem>
        <a href="/komponenter/accordion">Komponenter</a>
    </BreadcrumbItem>
    <BreadcrumbItem>
        <a href="/komponenter/breadcrumb">Breadcrumb</a>
    </BreadcrumbItem>
</Breadcrumb>
`;
