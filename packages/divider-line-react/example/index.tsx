import React from "react";
import ReactDOM from "react-dom";
import { DividerLine } from "../src";
import "@fremtind/jkl-divider-line/divider-line.css";

const Line = () => (
    <div style={{ width: "500px" }}>
        <DividerLine />
    </div>
);

const mountNode = document.getElementById("app");
ReactDOM.render(<Line />, mountNode);
