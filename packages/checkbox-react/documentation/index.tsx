import React from "react";

// Import utils for showing example
import { renderExample, DevExample } from "../../../doc-utils";

// Import actual example and component stylesheet (specific for this component):
import { CheckboxExample } from "./CheckboxExample";
import "@fremtind/jkl-checkbox/checkbox.css";

renderExample(
    <DevExample
        component={CheckboxExample}
        knobs={{
            boolProps: ["Compact", "Med feil", "Invertert"],
        }}
    />,
    document.getElementById("app"),
);
