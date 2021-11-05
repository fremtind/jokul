import React from "react";

// Import utils for showing example
import { renderExample, DevExample } from "../../../doc-utils";

// Import actual example and component stylesheet (specific for this component):
import { AlertMessageExample } from "./AlertMessageExample";
import "@fremtind/jkl-alert-message/alert-message.css";

renderExample(
    <DevExample
        component={AlertMessageExample}
        knobs={{
            boolProps: ["Avvisbar"],
            choiceProps: [
                {
                    name: "Type",
                    values: ["Infomelding", "Suksessmelding", "Advarselmelding", "Feilmelding"],
                    defaultValue: 0,
                },
            ],
        }}
    />,
    document.getElementById("app"),
);
