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
    const [isSymbol, toggleSymbol] = useState(false);

    return (
        <>
            <button onClick={() => toggleSymbol(!isSymbol)}>Lean !back Lean !back</button>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                <div style={{ width: "300px" }}>
                    <LogoSymbol />
                    <LogoMain />
                    <LogoAnimated isSymbol={isSymbol} />
                    <LogoAnimated isSymbol={!isSymbol} />
                </div>
                <div style={{ backgroundColor: "#000", color: "#fafafa", width: "300px" }}>
                    <LogoSymbol />
                    <LogoMain />
                    <LogoAnimated isSymbol={isSymbol} centered={false} />
                    <LogoAnimated isSymbol={!isSymbol} centered={true} />
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
