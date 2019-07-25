import "@fremtind/jkl-checkbox/checkbox.css";
import "@fremtind/jkl-core/core.css";
import React from "react";
import ReactDOM from "react-dom";
import { Hamburger } from "../src";
import "@fremtind/jkl-hamburger/hamburger.css";

const App = () => {
    return (
        <>
            <div style={{ backgroundColor: "black", padding: "20px" }}>
                <Hamburger negative />
                <Hamburger
                    initialIsActive
                    negative
                    onClick={(activeStatus) => alert(activeStatus ? "Is opening" : "Is closing")}
                />
            </div>
            <div style={{ padding: "20px" }}>
                <Hamburger />
            </div>
        </>
    );
};

ReactDOM.render(<App />, document.getElementById("app"));
