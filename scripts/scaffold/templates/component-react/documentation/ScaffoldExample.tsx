import React, { FC } from "react";
import { ExampleComponentProps, ExampleKnobsProps, CodeExample } from "@fremtind/jkl-internal-doc-utils";
import { Scaffold } from "../src";

export const scaffoldExampleKnobs: ExampleKnobsProps = {};

export const ScaffoldExample: FC<ExampleComponentProps> = () => {
    return <Scaffold>Edit me!</Scaffold>;
};

export default ScaffoldExample;

export const scaffoldExampleCode: CodeExample = () => `
<Scaffold>Edit me!</Scaffold>
`;
