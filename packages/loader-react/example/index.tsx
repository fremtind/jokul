import "@fremtind/jkl-loader/loader.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { Loader } from "../src";

const App = () => (
    <>
        <Loader textDescription="Den som venter på noe godt…" />
        <div
            style={{
                marginTop: "20px",
                border: "1px solid black",
                borderRadius: "20px",
                height: "40px",
                width: "200px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Loader textDescription="Laster…" inline />
        </div>
        <div
            style={{
                marginTop: "20px",
                border: "1px solid black",
                borderRadius: "20px",
                height: "40px",
                width: "200px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "black",
            }}
        >
            <Loader textDescription="Laster…" inline negative />
        </div>
    </>
);

ReactDOM.render(<App />, document.getElementById("app"));
