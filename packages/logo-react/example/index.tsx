import "@fremtind/jkl-logo/logo.css";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
    LogoAnimated,
    LogoMain,
    LogoStampDistributor,
    LogoStampInnovation,
    LogoStampInsurance,
    LogoStampTechnology,
    LogoSymbol,
} from "../src";

const LogoExample = () => {
    const [showSymbol, toggleSymbol] = useState(false);

    return (
        <>
            <button onClick={() => toggleSymbol(!showSymbol)}>Lean !back Lean !back</button>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                <div style={{ width: "300px" }}>
                    <LogoSymbol />
                    <LogoMain />
                    <LogoAnimated showSymbol={showSymbol} />
                    <LogoAnimated showSymbol={!showSymbol} />
                </div>
                <div style={{ backgroundColor: "#000", color: "#fafafa", width: "300px" }}>
                    <LogoSymbol />
                    <LogoMain />
                    <LogoAnimated showSymbol={showSymbol} centered={false} />
                    <LogoAnimated showSymbol={!showSymbol} centered={true} />
                </div>
                <div style={{ width: "300px" }}>
                    <LogoStampTechnology />
                    <LogoStampDistributor />
                    <LogoStampInnovation />
                    <LogoStampInsurance />
                </div>

                <div style={{ backgroundColor: "#000", color: "#fafafa", width: "300px" }}>
                    <LogoStampTechnology />
                    <LogoStampDistributor />
                    <LogoStampInnovation />
                    <LogoStampInsurance />
                </div>
            </div>
        </>
    );
};

ReactDOM.render(<LogoExample />, document.getElementById("app"));
