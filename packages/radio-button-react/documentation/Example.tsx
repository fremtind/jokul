import React from "react";
import { DevExample } from "../../../doc-utils";
import { RadioButtonExample, radioButtonExampleKnobs } from "./RadioButtonExample";
import "../../radio-button/radio-button.scss";

export default function Client() {
    return <DevExample component={RadioButtonExample} knobs={radioButtonExampleKnobs} />;
}
