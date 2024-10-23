import { DevExample } from "doc-utils/DevExample.js";
import React from "react";
import { ProgressBarExample, progressBarExampleKnobs } from "./ProgressBarExample.js";

export default function Example() {
    return <DevExample component={ProgressBarExample} knobs={progressBarExampleKnobs} />;
}
