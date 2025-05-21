import { DevExample } from "utils/dev-example/DevExample.js";
import React from "react";
import { CheckboxExample, checkboxExampleKnobs } from "./CheckboxExample.js";

export default function Example() {
    return (
        <DevExample component={CheckboxExample} knobs={checkboxExampleKnobs} />
    );
}
