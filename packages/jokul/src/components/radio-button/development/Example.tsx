import { DevExample } from "utils/dev-example/DevExample.js";
import React from "react";
import {
    RadioButtonExample,
    radioButtonExampleKnobs,
} from "./RadioButtonExample.js";

export default function Example() {
    return (
        <DevExample
            component={RadioButtonExample}
            knobs={radioButtonExampleKnobs}
        />
    );
}
