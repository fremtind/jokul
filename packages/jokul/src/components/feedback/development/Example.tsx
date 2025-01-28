import { DevExample } from "doc-utils/DevExample.js";
import React from "react";
import { FeedbackExample } from "./FeedbackExample.js";
import { feedbackExampleProps } from "./feedbackExampleProps.js";

export default function Example() {
    return (
        <DevExample component={FeedbackExample} knobs={feedbackExampleProps} />
    );
}
