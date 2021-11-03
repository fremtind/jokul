import React from "react";

// Import utils for showing example
import { renderExample, DevExample } from "../../../doc-utils";

// Import actual example and component stylesheet (specific for this component):
import { FieldGroupExample } from "./FieldGroupExample";
import "@fremtind/jkl-field-group/field-group.css";

renderExample(
    <DevExample
        component={FieldGroupExample}
        knobs={{
            boolProps: ["Kompakt", "Med hjelpetekst", "Med feil"],
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
