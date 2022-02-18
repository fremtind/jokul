import React from "react";

// Import utils for showing example
import { renderExample, DevExample } from "../../../doc-utils";

// Import actual example and component stylesheet (specific for this component):
import { InfoCardExample } from "./InfoCardExample";
import { NavCardExample, navCardExampleCode } from "./NavCardExample";
import { TaskCardExample } from "./TaskCardExample";
import "@fremtind/jkl-card/card.css";
import "@fremtind/jkl-button/button.css";
import "@fremtind/jkl-checkbox/checkbox.css";
import "@fremtind/jkl-select/select.css";
import "@fremtind/jkl-tag/tag.css";
import { infoCardExampleProps, navCardExampleProps, taskCardExampleProps } from "./cardExampleProps";

renderExample(
    <>
        <DevExample knobs={navCardExampleProps} component={NavCardExample} codeExample={navCardExampleCode} />
        <DevExample knobs={infoCardExampleProps} component={InfoCardExample} />
        <DevExample knobs={taskCardExampleProps} component={TaskCardExample} />
    </>,
    document.getElementById("app"),
);
