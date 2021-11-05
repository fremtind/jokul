import React from "react";

// Import utils for showing example
import { renderExample, DevExample } from "../../../doc-utils";
import "@fremtind/jkl-icon-button/icon-button.min.css";

// Import actual example and component stylesheet (specific for this component):
import { FeedbackExample } from "./FeedbackExample";
import { feedbackExampleProps } from "./feedbackExampleProps";
import "@fremtind/jkl-feedback/feedback.css";
import "@fremtind/jkl-text-input/text-input.css";
import "@fremtind/jkl-button/button.css";
import "@fremtind/jkl-message-box/message-box.css";
import "@fremtind/jkl-slider/slider.css";

renderExample(<DevExample component={FeedbackExample} knobs={feedbackExampleProps} />, document.getElementById("app"));
