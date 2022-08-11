import React from "react";
import { DevExample } from "../../../doc-utils";
import { DropdownExample, dropdownExampleCode, dropdownExampleKnobs } from "./DropdownExample";
import "../../dropdown/dropdown.scss";

export default function Example() {
    return <DevExample component={DropdownExample} code={dropdownExampleCode} knobs={dropdownExampleKnobs} />;
}
