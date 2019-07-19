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

const example = `() => {
    const [showSymbol, toggleSymbol] = React.useState(false);

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
            <button onClick={() => toggleSymbol(!showSymbol)}>Animer</button>
        </div>
    );
};`;

const exampleImport = `import { LogoMain, LogoSymbol, LogoAnimated } from "@fremtind/jkl-logo-react";
import "@fremtind/jkl-logo/logo.min.css";`;

const LogoExample = () => (
    <Example
        exampleComponents={{ LogoMain, LogoSymbol, LogoAnimated }}
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
