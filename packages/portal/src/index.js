import React from "react";
import ReactDOM from "react-dom";
import Portal from "./Portal";
import "@fremtind/jkl-core/build/css/core.css";
import "@fremtind/jkl-footer/footer.css";
import "@fremtind/jkl-grid/grid.css";
import "@fremtind/jkl-header/header.css";

const mountNode = document.getElementById("app");
ReactDOM.render(<Portal />, mountNode);
