import React from "react";
import ReactDOM from "react-dom";
import { LogoSymbol, LogoMain, LogoAnimated } from "../src";

const Buttons = () => (
    <>
        <LogoSymbol />
        <div style={{ backgroundColor: "#000" }}>
            <LogoSymbol positive={false} />
        </div>
        <LogoMain />
        <div style={{ backgroundColor: "#000" }}>
            <LogoMain positive={false} />
        </div>
        <LogoAnimated />
        <div style={{ height: "100vh" }} />
    </>
);

var mountNode = document.getElementById("app");
ReactDOM.render(<Buttons />, mountNode);
