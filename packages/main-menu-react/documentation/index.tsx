import React from "react";
import ReactDOM from "react-dom";

// Import core styles, webfonts and tab listener (same for all components):
import { initTabListener } from "@fremtind/jkl-core";
import "@fremtind/jkl-core/core.scss";
import "../../webfonts/documentation/internal.scss";

// Imports required for showing example (same for all components):
import { DevExample } from "@fremtind/jkl-portal-components";
import "@fremtind/jkl-portal-components/dev-example.min.css";
import "@fremtind/jkl-radio-button/radio-button.min.css";
import "@fremtind/jkl-checkbox/checkbox.min.css";

// Import actual example and component stylesheet (specific for this component):
import { Example, ExtraElementsExample } from "./Examples";
import "@fremtind/jkl-main-menu/main-menu.css";
import "@fremtind/jkl-main-menu/full-screen-menu.css";
import "@fremtind/jkl-hamburger/hamburger.css";

import "@fremtind/jkl-button/button.min.css";

initTabListener();

ReactDOM.render(
    <>
        <DevExample
            component={Example}
            knobs={{
                boolProps: ["Vis toppnivå"],
            }}
        />
        <DevExample
            component={ExtraElementsExample}
            knobs={{
                boolProps: ["Vis toppnivå"],
            }}
        />
    </>,
    document.getElementById("app"),
);
