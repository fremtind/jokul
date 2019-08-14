import { PrimaryButton, SecondaryButton } from "@fremtind/jkl-button-react";
import "@fremtind/jkl-button/button.css";
import React from "react";
import ReactDOM from "react-dom";

function onClick() {
    console.log("Hello!");
}

const Index = () => (
    <>
        <PrimaryButton onClick={onClick}>Hello, Primary Button</PrimaryButton>
        <SecondaryButton onClick={onClick}>Hello</SecondaryButton>
    </>
);

ReactDOM.render(<Index />, document.getElementById("app"));
