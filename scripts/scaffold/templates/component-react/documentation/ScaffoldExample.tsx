import React, { FC } from "react";
import { ExampleComponentProps, CodeExample } from "../../../doc-utils";
import { Scaffold } from "../src";

export const ScaffoldExample: FC<ExampleComponentProps> = () => {
    return <Scaffold>Edit me!</Scaffold>;
};

export default ScaffoldExample;

export const scaffoldExampleCode: CodeExample = () => `
<Scaffold>Edit me!</Scaffold>
`;
