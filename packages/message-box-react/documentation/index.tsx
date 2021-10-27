import React from "react";

// Import utils for showing example
import { renderExample, DevExample } from "../../../doc-utils";

// Import actual example and component stylesheet (specific for this component):
import { Example } from "./MessageBoxExample";
import "@fremtind/jkl-message-box/message-box.css";

renderExample(
    <DevExample
        component={Example}
        knobs={{
            boolProps: ["Full bredde", "Avvisbar"],
            choiceProps: [
                {
                    name: "Type",
                    values: ["Infomelding", "Suksessmelding", "Advarselsmelding", "Feilmelding"],
                    defaultValue: 0,
                },
            ],
        }}
    />,
    document.getElementById("app"),
);
