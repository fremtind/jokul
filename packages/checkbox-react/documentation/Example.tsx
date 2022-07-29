import React from "react";
import { DevExample } from "../../../doc-utils";
import { CheckboxExample, checkboxExampleCode, checkboxExampleKnobs } from "./CheckboxExample";
import "../../checkbox/checkbox.scss";

export default function Example() {
    return <DevExample component={CheckboxExample} knobs={checkboxExampleKnobs} codeExample={checkboxExampleCode} />;
}
