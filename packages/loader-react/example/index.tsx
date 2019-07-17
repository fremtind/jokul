import React from "react";
import ReactDOM from "react-dom";
import { Loader } from "../src";
import "@fremtind/jkl-loader/loader.min.css";

const App = () => (
    <>
        <Loader />
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
            <Loader inline />
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
            <Loader inline negative />
        </div>
    </>
);

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
