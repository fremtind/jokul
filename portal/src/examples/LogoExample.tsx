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
    const style = { 
        width: "300px",
        padding: "20px"
    };
    const negativeStyle = { 
        ...style,
        backgroundColor: "#000",
        color: "#fafafa"
    };
    const wrapperStyle = {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap"
    };

    return (
        <>
            <div style={wrapperStyle}>
                <div
                    className="jkl-spacing--bottom-2"
                    style={style}
                >
                    <LogoSymbol />
                </div>
                <div
                    className="jkl-spacing--bottom-2"
                    style={negativeStyle}
                >
                    <LogoSymbol />
                </div>
                <div
                    className="jkl-spacing--bottom-2"
                    style={style}
                >
                    <LogoMain />
                </div>
                <div
                    className="jkl-spacing--bottom-2"
                    style={negativeStyle}
                >
                    <LogoMain />
                </div>
                <div
                    className="jkl-spacing--bottom-2"
                    style={style}
                >
                    <LogoAnimated showSymbol={showSymbol} />
                </div>            
                <div
                    className="jkl-spacing--bottom-2"
                    style={negativeStyle}
                >
                    <LogoAnimated showSymbol={showSymbol} centered={false} />
                </div>
                <div
                    className="jkl-spacing--bottom-2"
                    style={style}
                >
                    <LogoAnimated showSymbol={!showSymbol} />
                </div>
                <div
                    className="jkl-spacing--bottom-3"
                    style={negativeStyle}
                >
                    <LogoAnimated showSymbol={!showSymbol} centered={true} />
                </div>
            </div>
            <PrimaryButton onClick={() => toggleSymbol(!showSymbol)}>
                Animer
            </PrimaryButton>
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
