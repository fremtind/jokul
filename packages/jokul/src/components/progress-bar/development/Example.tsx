import React from "react";
import { DevExample } from "utils/dev-example/DevExample.js";
import {
    ProgressBarExample,
    progressBarExampleKnobs,
} from "./ProgressBarExample.js";

export default function Example() {
    return (
        <DevExample
            component={ProgressBarExample}
            knobs={progressBarExampleKnobs}
        />
    );
}
