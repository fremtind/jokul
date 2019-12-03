import { initTabListener } from "@fremtind/jkl-core/src";
import React from "react";
import ReactDOM from "react-dom";

import "@fremtind/jkl-core/core.min.css";
import "@fremtind/jkl-accordion/accordion.min.css";

import { Example } from "./Example";

initTabListener();

const mountNode = document.getElementById("app");
ReactDOM.render(<Example />, mountNode);
