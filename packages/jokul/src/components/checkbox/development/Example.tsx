import React from "react";
import { DevExample } from "utils/dev-example/DevExample.js";
import { CheckboxExample, checkboxExampleKnobs } from "./CheckboxExample.js";

export default function Example() {
    return (
        <DevExample component={CheckboxExample} knobs={checkboxExampleKnobs} />
    );
}
