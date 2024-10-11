import React from "react";
import { DevExample } from "../../../../../../doc-utils";
import { FeedbackExample } from "./FeedbackExample";
import { feedbackExampleProps } from "./feedbackExampleProps";

import "../../../../../../packages/webfonts/webfonts.scss";
import "../../../core/styles/core.scss";
import "../../../styles/styles.scss";

export default function Example() {
    return <DevExample component={FeedbackExample} knobs={feedbackExampleProps} />;
}
