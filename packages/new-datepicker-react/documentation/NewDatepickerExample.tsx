import React, { FC } from "react";
import { ExampleComponentProps, ExampleKnobsProps, CodeExample } from "../../../doc-utils";
import { NewDatepicker } from "../src";

export const newDatepickerExampleKnobs: ExampleKnobsProps = {};

export const NewDatepickerExample: FC<ExampleComponentProps> = () => {
    return <NewDatepicker>Edit me!</NewDatepicker>;
};

export default NewDatepickerExample;

export const newDatepickerExampleCode: CodeExample = () => `
<NewDatepicker>Edit me!</NewDatepicker>
`;
