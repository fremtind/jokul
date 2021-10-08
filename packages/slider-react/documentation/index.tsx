import React from "react";

// Import utils for showing example
import { renderExample, DevExample } from "../../../doc-utils";

// Import actual example and component stylesheet (specific for this component):
import { Example } from "./Example";
import "@fremtind/jkl-slider/slider.css"; // non-minified css for easier debugging

renderExample(
    <DevExample
        component={Example}
        knobs={{
            boolProps: ["Med hjelpetekst", "Med feil"],
            choiceProps: [
                {
                    name: "Etikettvariant",
                    values: ["small", "medium", "large"],
                    defaultValue: 1,
                },
            ],
        }}
    />,
    document.getElementById("app"),
);
