import React from "react";

// Import utils for showing example
import { renderExample, DevExample } from "../../../doc-utils";

// Import actual example and component stylesheet (specific for this component):
import { Example } from "./Example";
import "@fremtind/jkl-content-toggle/content-toggle.css";

renderExample(
    <DevExample
        knobs={{
            boolProps: ["Bytt verdi"],
            choiceProps: [
                {
                    name: "Variant",
                    values: ["flip", "fade"],
                    defaultValue: 0,
                },
            ],
        }}
        component={Example}
    />,
    document.getElementById("app"),
);
