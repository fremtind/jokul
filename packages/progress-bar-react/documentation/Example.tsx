import React from "react";
import { DevExample } from "../../../doc-utils";
import {
    ProgressBarExample,
    progressBarExampleCode,
    progressBarExampleKnobs,
} from "./ProgressBarExample";
import "../../icon-button/icon-button.scss";
import "../../icons/icons.scss";
import "../../progress-bar/progress-bar.scss";

export default function Example() {
    return (
        <>
            <DevExample
                component={ProgressBarExample}
                knobs={progressBarExampleKnobs}
                codeExample={progressBarExampleCode}
            />
        </>
    );
}
