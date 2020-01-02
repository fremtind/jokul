import { initTabListener } from "@fremtind/jkl-core/src";
import React from "react";
import ReactDOM from "react-dom";
import "../../webfonts/documentation/internal.scss";

import { Example } from "./Example";

initTabListener();

const mountNode = document.getElementById("app");
ReactDOM.render(<Example />, mountNode);
