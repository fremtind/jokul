import React from "react";

// Import utils for showing example
import { renderExample, DevExample } from "../../../doc-utils";

// Import actual example and component stylesheet (specific for this component):
import { ExpandSectionExample } from "./ExpandSectionExample";
import { ExpandButtonExample } from "./ExpandButtonExample";
import "@fremtind/jkl-expand-button/expand-button.css";
import "@fremtind/jkl-icons/animated-icons.css";

renderExample(
    <>
        <DevExample
            title="ExpandSection"
            component={ExpandSectionExample}
            knobs={{
                boolProps: ["Compact"],
            }}
        />
        <DevExample
            title="ExpandButton"
            component={ExpandButtonExample}
            knobs={{
                boolProps: ["Compact"],
            }}
        />
    </>,
    document.getElementById("app"),
);
