import React from "react";

// Import utils for showing example
import { renderExample, DevExample } from "../../../doc-utils";

// Import actual example and component stylesheet (specific for this component):
import { Example } from "./Example";
import "@fremtind/jkl-button/button.css";
import "@fremtind/jkl-loader/loader.css";

const mountNode = document.getElementById("app");

renderExample(
    <DevExample
        component={Example}
        knobs={{
            boolProps: ["Kompakt", "Invertert", { prop: "withLoader", defaultValue: true }, "isLoading"],
        }}
    />,
    mountNode,
);
