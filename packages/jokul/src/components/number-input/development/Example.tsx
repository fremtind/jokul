import React from "react";
import { DevExample } from "utils/dev-example/DevExample.js";
import {
    NumberInputExample,
    numberInputExampleKnobs,
} from "./NumberInputExample.js";

export default function Example() {
    return (
        <DevExample
            title="NumberInput"
            component={NumberInputExample}
            knobs={numberInputExampleKnobs}
        />
    );
}
