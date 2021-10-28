import React from "react";

// Import utils for showing example
import { renderExample, DevExample } from "../../../doc-utils";

// Import actual example and component stylesheet (specific for this component):
import { SelectExample } from "./Example";
import "@fremtind/jkl-select/select.css"; // non-minified css for easier debugging

renderExample(
    <DevExample
        component={SelectExample}
        knobs={{
            boolProps: ["Native", "Kompakt", "Invertert", "Med hjelpetekst", "Med feil", "Med søk"],
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
