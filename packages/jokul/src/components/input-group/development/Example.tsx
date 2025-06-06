import React from "react";
import { DevExample } from "utils/dev-example/DevExample.js";
import InputGroupExample, {
    inputGroupExampleKnobs,
} from "./InputGroupExample.js";

export default function Example() {
    return (
        <DevExample
            component={InputGroupExample}
            knobs={inputGroupExampleKnobs}
        />
    );
}
