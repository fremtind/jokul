import React from "react";
import ReactDOM from "react-dom";
import { PrimaryButton, SecondaryButton, TertiaryButton } from "../src";
import "@fremtind/jkl-button/button.css";

function onClick() {
    console.log("Hello!");
}

const Buttons = () => (
    <>
        <div style={{ margin: "20px" }}>
            <PrimaryButton onClick={onClick}>Hello, Primary Button</PrimaryButton>
        </div>
        <div style={{ margin: "20px" }}>
            <SecondaryButton onClick={onClick}>Hello, Secondary Button</SecondaryButton>
        </div>
        <div style={{ margin: "20px" }}>
            <TertiaryButton onClick={onClick}>Tertiary</TertiaryButton>
        </div>
    </>
);

const mountNode = document.getElementById("app");
ReactDOM.render(<Buttons />, mountNode);
