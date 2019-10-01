import React from "react";
import ReactDOM from "react-dom";
import { Hamburger } from "../src";
import "@fremtind/jkl-hamburger/hamburger.css";
import "@fremtind/jkl-core/core.min.css";
import { initTabListener } from "@fremtind/jkl-core";

const App = () => {
    initTabListener();

    const divRef = React.useRef(null);
    return (
        <>
            <div style={{ backgroundColor: "black", padding: "20px" }}>
                <Hamburger negative />
                <Hamburger
                    initialIsActive
                    negative
                    onClick={(nextStatus) => console.log(nextStatus ? "Is opening" : "Is closing")}
                />
            </div>
            <div style={{ padding: "100px", backgroundColor: "deeppink" }} ref={divRef}>
                <Hamburger
                    insideRef={divRef}
                    enableClickOutside
                    onClickOutside={(next) => console.log("Click outside the pink box, next value is: ", next)}
                />
            </div>
        </>
    );
};

ReactDOM.render(<App />, document.getElementById("app"));
