import React from "react";
import { Example } from "../components";
import { Loader } from "@fremtind/jkl-loader-react";
import "@fremtind/jkl-loader/loader.min.css";
// @ts-ignore
import logoType from "!raw-loader!@fremtind/jkl-loader-react/build/Loader.d.ts";

const example = `<>
    <Loader />
    <div style={{
        marginTop: "20px",
        border: "1px solid black",
        borderRadius: "20px",
        height: "40px",
        width: "200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }}>
        <Loader inline />
    </div>
    <div style={{
        marginTop: "20px",
        border: "1px solid black",
        borderRadius: "20px",
        height: "40px",
        width: "200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
    }}>
        <Loader inline negative />
    </div>
</>`;

const exampleImport = `import { Loader } from "@fremtind/jkl-loader-react";
import "@fremtind/jkl-loader/loader.min.css";`;

const LoaderExample = () => (
    <Example exampleComponents={{ Loader }} exampleCode={example} type={logoType} exampleImport={exampleImport} />
);

export default LoaderExample;
