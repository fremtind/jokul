import React from "react";

// Import utils for showing example
import { renderExample, DevExample } from "../../../doc-utils";

// Import actual example and component stylesheet (specific for this component):
import { MessageBoxExample, messageBoxExampleKnobs } from "./MessageBoxExample";
import "@fremtind/jkl-message-box/message-box.css";

renderExample(
    <DevExample component={MessageBoxExample} knobs={messageBoxExampleKnobs} />,
    document.getElementById("app"),
);
