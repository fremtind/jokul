import React from "react";
import ReactDOM from "react-dom";
import { DividerLine } from "../src";
import "@fremtind/jkl-core/core.min.css";
import "@fremtind/jkl-divider-line/divider-line.css";

const Line = () => (
    <>
        <DividerLine />
    </>
);

const mountNode = document.getElementById("app");
ReactDOM.render(<Line />, mountNode);
