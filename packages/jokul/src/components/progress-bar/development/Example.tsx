import { DevExample } from "doc-utils/DevExample.js";
import React from "react";
import { CountdownExample, countdownExampleKnobs } from "./CountdownExample.js";
import {
    ProgressBarExample,
    progressBarExampleKnobs,
} from "./ProgressBarExample.js";

export default function Example() {
    return (
        <>
            <DevExample
                component={ProgressBarExample}
                knobs={progressBarExampleKnobs}
            />
            <DevExample
                component={CountdownExample}
                knobs={countdownExampleKnobs}
            />
        </>
    );
}
