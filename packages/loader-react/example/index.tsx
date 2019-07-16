import React from "react";
import ReactDOM from "react-dom";
import { Loader } from "../src";
import "@fremtind/jkl-loader/inline-loader.min.css";

const App = () => (
    <>
        <Loader />
        <div
            style={{
                marginTop: "20px",
                border: "1px solid black",
                borderRadius: "20px",
                height: "45px",
                width: "200px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Loader />
        </div>
        <div
            style={{
                marginTop: "20px",
                border: "1px solid black",
                borderRadius: "20px",
                height: "45px",
                width: "200px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "black",
            }}
        >
            <Loader negative />
        </div>
    </>
);

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
