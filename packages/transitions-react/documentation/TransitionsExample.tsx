import React, { FC } from "react";
import { ExampleComponentProps, ExampleKnobsProps, CodeExample } from "../../../doc-utils";
import { Transitions } from "../src";

export const transitionsExampleKnobs: ExampleKnobsProps = {};

export const TransitionsExample: FC<ExampleComponentProps> = () => {
    return <Transitions>Edit me!</Transitions>;
};

export default TransitionsExample;

export const transitionsExampleCode: CodeExample = () => `
<Transitions>Edit me!</Transitions>
`;
