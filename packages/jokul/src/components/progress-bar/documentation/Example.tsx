import React from "react";
import { DevExample } from "../../../../../../utils/dev-example";
import { ProgressBarExample, progressBarExampleKnobs } from "./ProgressBarExample";

export default function Example() {
    return <DevExample component={ProgressBarExample} knobs={progressBarExampleKnobs} />;
}
