import React, { useState } from "react";
import ReactDOM from "react-dom";
import { LogoSymbol, LogoMain, LogoAnimated } from "../src";
import "@fremtind/jkl-logo/logo.css";

const Buttons = () => {
    const [showSymbol, toggleSymbol] = useState(false);

    return (
        <div style={{ width: "300px" }}>
            <LogoSymbol />
            <div style={{ backgroundColor: "#000" }}>
                <LogoSymbol negative={true} />
            </div>
            <LogoMain />
            <div style={{ backgroundColor: "#000" }}>
                <LogoMain negative={true} />
            </div>
            <LogoAnimated showSymbol={showSymbol} />
            <div style={{ backgroundColor: "#000" }}>
                <LogoAnimated showSymbol={showSymbol} negative centered={false} />
            </div>
            <LogoAnimated showSymbol={!showSymbol} />
            <div style={{ backgroundColor: "#000" }}>
                <LogoAnimated showSymbol={!showSymbol} negative centered={false} />
            </div>
            <button onClick={() => toggleSymbol(!showSymbol)}>Lean !back Lean !back</button>
            <div style={{ height: "100vh" }} />
        </div>
    );
};

var mountNode = document.getElementById("app");
ReactDOM.render(<Buttons />, mountNode);
