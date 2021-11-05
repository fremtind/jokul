import React from "react";

// Import utils for showing example
import { renderExample, DevExample } from "../../../doc-utils";

// Import actual example and component stylesheet (specific for this component):
import { HamburgerExample } from "./HamburgerExample";
import "@fremtind/jkl-hamburger/hamburger.css";

renderExample(
    <DevExample
        knobs={{ boolProps: ["Invertert", "Med tekst", "Tekst før knapp", "Skaler tekst ved hover"] }}
        component={HamburgerExample}
    />,
    document.getElementById("app"),
);
