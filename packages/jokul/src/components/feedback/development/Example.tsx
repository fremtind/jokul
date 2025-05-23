import React from "react";
import { DevExample } from "utils/dev-example/DevExample.js";
import { FeedbackExample } from "./FeedbackExample.js";
import { feedbackExampleProps } from "./feedbackExampleProps.js";

export default function Example() {
    return (
        <DevExample component={FeedbackExample} knobs={feedbackExampleProps} />
    );
}
