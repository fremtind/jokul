import React from "react";

// Import utils for showing example
import { renderExample, DevExample } from "../../../doc-utils";

// Import actual example and component stylesheet (specific for this component):
import { LogoExample } from "./LogoExample";
import "@fremtind/jkl-logo/logo.css";

renderExample(
    <DevExample
        component={LogoExample}
        knobs={{
            boolProps: ["Animert", "Kun symbol", "Sentrert"],
        }}
    />,
    document.getElementById("app"),
);
