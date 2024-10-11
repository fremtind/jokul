import React from "react";
import { DevExample } from "../../../../../../utils/dev-example";
import { CheckboxExample, checkboxExampleKnobs } from "./CheckboxExample";

export default function Example() {
    return <DevExample component={CheckboxExample} knobs={checkboxExampleKnobs} />;
}
