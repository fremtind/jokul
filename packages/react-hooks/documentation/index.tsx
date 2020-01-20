import React from "react";
import ReactDOM from "react-dom";
import Example from "./Example";
import "../../webfonts/documentation/internal.scss";
import { initTabListener } from "@fremtind/jkl-core";

initTabListener();

const mountNode = document.getElementById("app");
ReactDOM.render(<Example />, mountNode);
