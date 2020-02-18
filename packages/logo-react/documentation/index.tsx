import React from "react";
import ReactDOM from "react-dom";
import { LogoExample } from "./LogoExample";
import { LogoStampExample } from "./LogoStampExample";

import "../../webfonts/documentation/internal.scss";
import "@fremtind/jkl-core/core.min.css";
import "@fremtind/jkl-toggle-switch/toggle-switch.min.css";
import "@fremtind/jkl-field-group/field-group.min.css";

const Example = () => (
    <>
        <LogoExample />
        <LogoStampExample />
    </>
);

ReactDOM.render(<Example />, document.getElementById("app"));
