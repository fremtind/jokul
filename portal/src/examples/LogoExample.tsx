import React from "react";
import { Example } from "../components";
import { LogoMain, LogoSymbol, LogoAnimated } from "@fremtind/jkl-logo-react";
import "@fremtind/jkl-logo/logo.min.css";
// @ts-ignore
import logoMainType from "!raw-loader!@fremtind/jkl-logo-react/build/LogoMain.d.ts";
// @ts-ignore
import logoSymbolType from "!raw-loader!@fremtind/jkl-logo-react/build/LogoSymbol.d.ts";
// @ts-ignore
import logoAnimatedType from "!raw-loader!@fremtind/jkl-logo-react/build/LogoAnimated.d.ts";
import { PrimaryButton } from "@fremtind/jkl-button-react";

const example = `() => {
    const [showSymbol, toggleSymbol] = React.useState(false);

    return (
        <>
            <div style={{ width: "100%", display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
                <div style={{ width: "300px", marginBottom: "20px", padding: "20px" }}>
                    <LogoSymbol />
                </div>
                <div style={{ width: "300px", marginBottom: "20px", padding: "20px" ,backgroundColor: "#000", color: "#fafafa" }}>
                    <LogoSymbol />
                </div>
                <div style={{ width: "300px", marginBottom: "20px", padding: "20px" }}>
                    <LogoMain />
                </div>
                <div style={{ width: "300px", marginBottom: "20px", padding: "20px", backgroundColor: "#000", color: "#fafafa" }}>
                    <LogoMain />
                </div>
                <div style={{ width: "300px", marginBottom: "20px", padding: "20px" }}>
                    <LogoAnimated showSymbol={showSymbol} />
                </div>            
                <div style={{ width: "300px", marginBottom: "20px", padding: "20px", backgroundColor: "#000", color: "#fafafa" }}>
                    <LogoAnimated showSymbol={showSymbol} centered={false} />
                </div>
                <div style={{ width: "300px", marginBottom: "20px", padding: "20px" }}>
                    <LogoAnimated showSymbol={!showSymbol} />
                </div>
                <div style={{ width: "300px", marginBottom: "40px", padding: "20px", backgroundColor: "#000", color: "#fafafa" }}>
                    <LogoAnimated showSymbol={!showSymbol} centered={true} />
                </div>
            </div>
            <PrimaryButton onClick={() => toggleSymbol(!showSymbol)}>Animer</PrimaryButton>
        </>
    );
};`;

const exampleImport = `import { LogoMain, LogoSymbol, LogoAnimated } from "@fremtind/jkl-logo-react";
import "@fremtind/jkl-logo/logo.min.css";`;

const LogoExample = () => (
    <Example
        exampleComponents={{ LogoMain, LogoSymbol, LogoAnimated, PrimaryButton }}
        exampleCode={example}
        types={[
            { name: "Hovedlogo", type: logoMainType },
            { name: "Logo symbol", type: logoSymbolType },
            { name: "Logo animert", type: logoAnimatedType },
        ]}
        exampleImport={exampleImport}
    />
);

export default LogoExample;
