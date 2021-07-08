import React from "react";

// Import utils for showing example
import { renderExample, DevExample } from "../../../doc-utils";

// Import actual example and component stylesheet (specific for this component):
import { Example } from "./Example";
import { choiceProps, boolProps } from "./internal/props";
import "@fremtind/jkl-icons/animated-icons.css";
import "@fremtind/jkl-text-input/text-input.css";
import "@fremtind/jkl-button/button.css";

renderExample(
    <DevExample
        component={Example}
        knobs={{
            boolProps,
            choiceProps,
        }}
    />,
    document.getElementById("app"),
);
