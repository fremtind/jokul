import React, { useState } from "react";
import { Logo, LogoStampDistributor, LogoStampInnovation, LogoStampInsurance, LogoStampTechnology } from "../src";
import "@fremtind/jkl-logo/logo.css";

const Example = () => {
    const [isSymbol, toggleSymbol] = useState(false);

    return (
        <>
            <button onClick={() => toggleSymbol(!isSymbol)}>Animer symbol</button>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                <div style={{ width: "300px" }}>
                    <Logo />
                    <Logo isSymbol centered={false} />
                    <Logo isSymbol={isSymbol} />
                    <Logo isSymbol={!isSymbol} />
                </div>
                <div style={{ backgroundColor: "#000", color: "#fafafa", width: "300px" }}>
                    <Logo />
                    <Logo isSymbol />
                    <Logo isSymbol={isSymbol} centered={false} />
                    <Logo isSymbol={!isSymbol} centered />
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

export default Example;
