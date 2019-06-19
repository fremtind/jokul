import React from "react";
import ReactDOM from "react-dom";
import { Header } from "../src";
import "@fremtind/jkl-header/header.css";

const Head = () => (
    <div>
        <Header
            start={<p>Fremtind</p>}
            center={<p>Jøkul</p>}
            end={
                <span role="img" aria-label="burger" style={{ fontSize: "32px" }}>
                    🍔
                </span>
            }
        />
        <div style={{ height: "200vh", backgroundColor: "white" }} />
    </div>
);

var mountNode = document.getElementById("app");
ReactDOM.render(<Head />, mountNode);
