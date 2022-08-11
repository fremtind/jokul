import React, { FC } from "react";
import { ExampleComponentProps, ExampleKnobsProps, CodeExample } from "../../../doc-utils";
import { Dropdown } from "../src";
import "../../dropdown/dropdown.scss";

export const dropdownExampleKnobs: ExampleKnobsProps = {};

export const DropdownExample: FC<ExampleComponentProps> = () => {
    return <Dropdown label="Åpne meg">Hei hei!</Dropdown>;
};

export default DropdownExample;

export const dropdownExampleCode: CodeExample = () => `
<Dropdown>Edit me!</Dropdown>
`;
