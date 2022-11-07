import { DevExample } from "@fremtind/jkl-internal-doc-utils";
import React from "react";
import { CheckboxExample, checkboxExampleCode, checkboxExampleKnobs } from "./CheckboxExample";
import "../../checkbox/checkbox.scss";

export default function Example() {
    return <DevExample component={CheckboxExample} knobs={checkboxExampleKnobs} codeExample={checkboxExampleCode} />;
}
