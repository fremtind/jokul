import React from "react";

// Import utils for showing example
import { renderExample, DevExample } from "../../../doc-utils";

// Import actual example and component stylesheet (specific for this component):
import { RadioButtonExample } from "./RadioButtonExample";
import "@fremtind/jkl-radio-button/radio-button.css";

renderExample(
    <DevExample
        component={RadioButtonExample}
        knobs={{
            boolProps: ["Kompakt", "Inline", "Med feil", "Invertert"],
            choiceProps: [
                {
                    name: "Variant",
                    values: ["small", "medium", "large"],
                    defaultValue: 1,
                },
            ],
        }}
    />,
    document.getElementById("app"),
);
