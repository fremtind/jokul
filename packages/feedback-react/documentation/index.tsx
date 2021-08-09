import React from "react";

// Import utils for showing example
import { renderExample, DevExample } from "../../../doc-utils";
import "@fremtind/jkl-icon-button/icon-button.min.css";

// Import actual example and component stylesheet (specific for this component):
import { Example } from "./Example";
import "@fremtind/jkl-feedback/feedback.css";
import "@fremtind/jkl-text-input/text-input.css";
import "@fremtind/jkl-button/button.css";
import "@fremtind/jkl-message-box/message-box.css";

renderExample(
    <DevExample
        component={Example}
        knobs={{
            boolProps: ["Uten smilefjes", "Uten tekst"],
        }}
    />,
    document.getElementById("app"),
);
