import React from "react";
import { DevExample } from "../../../../../../utils/dev-example";
import { FeedbackExample } from "./FeedbackExample";
import { feedbackExampleProps } from "./feedbackExampleProps";

export default function Example() {
    return <DevExample component={FeedbackExample} knobs={feedbackExampleProps} />;
}
