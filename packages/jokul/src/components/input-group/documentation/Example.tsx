import { DevExample } from "doc-utils/DevExample.js";
import React from "react";
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
