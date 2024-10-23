import { DevExample } from "doc-utils/DevExample.js";
import React from "react";
import { RadioButtonExample, radioButtonExampleKnobs } from "./RadioButtonExample.js";

export default function Example() {
    return <DevExample component={RadioButtonExample} knobs={radioButtonExampleKnobs} />;
}
