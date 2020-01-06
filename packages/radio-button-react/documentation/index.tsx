import React from "react";
import ReactDOM from "react-dom";
import { initTabListener } from "@fremtind/jkl-core";
import "../../webfonts/documentation/internal.scss";

import Example from "./Example";

initTabListener();

ReactDOM.render(<Example />, document.getElementById("app"));
