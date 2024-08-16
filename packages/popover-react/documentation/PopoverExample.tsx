import React, { FC } from "react";
import { ExampleComponentProps, ExampleKnobsProps, CodeExample } from "../../../doc-utils";
import { Popover } from "../src";

export const popoverExampleKnobs: ExampleKnobsProps = {};

export const PopoverExample: FC<ExampleComponentProps> = () => {
    return <Popover>Edit me!</Popover>;
};

export default PopoverExample;

export const popoverExampleCode: CodeExample = () => `
<Popover>Edit me!</Popover>
`;
