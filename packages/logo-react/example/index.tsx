import React, { useState } from "react";
import ReactDOM from "react-dom";
import { LogoSymbol, LogoMain, LogoAnimated } from "../src";
import "@fremtind/jkl-logo/logo.css";

const Buttons = () => {
    const [showSymbol, toggleSymbol] = useState(false);

    return (
        <div style={{ width: "300px" }}>
            <LogoSymbol />
            <div style={{ backgroundColor: "#000", color: "#fafafa" }}>
                <LogoSymbol />
            </div>
            <LogoMain />
            <div style={{ backgroundColor: "#000", color: "#fafafa" }}>
                <LogoMain />
            </div>
            <LogoAnimated showSymbol={showSymbol} />
            <div style={{ backgroundColor: "#000", color: "#fafafa" }}>
                <LogoAnimated showSymbol={showSymbol} centered={false} />
            </div>
            <LogoAnimated showSymbol={!showSymbol} />
            <div style={{ backgroundColor: "#000", color: "#fafafa" }}>
                <LogoAnimated showSymbol={!showSymbol} centered={true} />
            </div>
            <button onClick={() => toggleSymbol(!showSymbol)}>Lean !back Lean !back</button>
            <div style={{ height: "100vh" }} />
        </div>
    );
};

var mountNode = document.getElementById("app");
ReactDOM.render(<Buttons />, mountNode);
