import React from "react";
import ReactDOM from "react-dom";
import { initTabListener } from "@fremtind/jkl-core";
import Example from "./Example";
import "../../webfonts/documentation/internal.scss";
import "@fremtind/jkl-core/core.min.css";

initTabListener();

ReactDOM.render(<Example />, document.getElementById("app"));
