import React from "react";
import ReactDOM from "react-dom";
import { initTabListener } from "@fremtind/jkl-core";
import Example from "./Example";

initTabListener();

const mountNode = document.getElementById("app");
ReactDOM.render(<Example />, mountNode);
