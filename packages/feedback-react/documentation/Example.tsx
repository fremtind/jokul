import { DevExample } from "@fremtind/jkl-internal-doc-utils";
import React from "react";
import { feedbackCode, FeedbackExample } from "./FeedbackExample";
import { feedbackExampleProps } from "./feedbackExampleProps";
import "../../feedback/feedback.scss";
import "../../button/button.scss";
import "../../text-input/text-input.scss";
import "../../message-box/message-box.scss";

export default function Example() {
    return <DevExample component={FeedbackExample} knobs={feedbackExampleProps} codeExample={feedbackCode} />;
}
