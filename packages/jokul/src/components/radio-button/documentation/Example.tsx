import React from "react";
import { DevExample } from "../../../../../../utils/dev-example";
import { RadioButtonExample, radioButtonExampleKnobs } from "./RadioButtonExample";

export default function Example() {
    return <DevExample component={RadioButtonExample} knobs={radioButtonExampleKnobs} />;
}
