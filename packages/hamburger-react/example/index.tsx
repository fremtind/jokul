import React from "react";
import ReactDOM from "react-dom";
import { Hamburger } from "../src";
import "@fremtind/jkl-hamburger/hamburger.css";
import "@fremtind/jkl-core/core.min.css";

const App = () => (
    <>
        <div style={{ backgroundColor: "black", padding: "20px" }}>
            <Hamburger negative />
            <Hamburger
                initialIsActive
                negative
                onClick={(nextStatus) => alert(nextStatus ? "Is opening" : "Is closing")}
            />
        </div>
        <div style={{ padding: "20px" }}>
            <Hamburger />
        </div>
    </>
);

ReactDOM.render(<App />, document.getElementById("app"));
