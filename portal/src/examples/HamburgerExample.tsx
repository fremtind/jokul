import React from "react";
import { Example } from "../components";
import { Hamburger } from "@fremtind/jkl-hamburger-react";
import "@fremtind/jkl-hamburger/hamburger.min.css";
// @ts-ignore
import hamburgerType from "!raw-loader!@fremtind/jkl-hamburger-react/build/Hamburger.d.ts";

const example = `<div style={{backgroundColor: "#696666", padding: "32px"}}>
    <Hamburger />
    <Hamburger negative initialIsActive description="Burger" onClick={ (next) => alert(next ? "Is opening" : "Is closing")} />
</div>`;

const exampleImport = `import { Hamburger } from "@fremtind/jkl-hamburger-react";
import "@fremtind/jkl-hamburger/hamburger.min.css";`;

const HamburgerExample = () => (
    <Example
        exampleComponents={{ Hamburger }}
        exampleCode={example}
        type={hamburgerType}
        exampleImport={exampleImport}
    />
);

export default HamburgerExample;
