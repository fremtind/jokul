import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Hamburger } from "../src";
import "@fremtind/jkl-hamburger/hamburger.css";
import "@fremtind/jkl-core/core.min.css";
import { initTabListener } from "@fremtind/jkl-core";

const App = () => {
    initTabListener();

    const [clickOutside, toggleClickOutside] = useState(false);
    const toggleState = (enable: boolean) => toggleClickOutside(enable);

    const divRef = React.useRef(null);
    return (
        <div style={{ border: "solid 1px grey" }}>
            <div
                style={{
                    backgroundColor: "black",
                    padding: "20px",
                }}
            >
                <Hamburger negative />
                <Hamburger
                    initialIsActive
                    negative
                    onClick={(nextStatus) => console.log(nextStatus ? "Is opening" : "Is closing")}
                />
            </div>
            <div style={{ padding: "20px", backgroundColor: "#fafafa" }} ref={divRef}>
                <Hamburger
                    insideRef={divRef}
                    onClick={toggleState}
                    enableClickOutside={clickOutside}
                    onClickOutside={toggleState}
                />
            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("app"));
