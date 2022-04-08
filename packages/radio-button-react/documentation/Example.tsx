import React from "react";
import { DevExample } from "../../../doc-utils";
import { RadioButtonExample, radioButtonExampleKnobs } from "./RadioButtonExample";
import "../../radio-button/radio-button.scss";

export default function Example() {
    return <DevExample component={RadioButtonExample} knobs={radioButtonExampleKnobs} />;
}
