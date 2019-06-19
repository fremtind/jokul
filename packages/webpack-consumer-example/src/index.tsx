import { PrimaryButton, SecondaryButton } from "@fremtind/jkl-button-react";
import React from "react";
import ReactDOM from "react-dom";
import "@fremtind/jkl-button/button.css";

function onClick() {
    console.log("Hello!");
}

const Index = () => (
    <>
        <PrimaryButton onClick={onClick}>Hello, Primary Button</PrimaryButton>
        <SecondaryButton onClick={onClick}>Hello</SecondaryButton>
    </>
);

var mountNode = document.getElementById("app");
ReactDOM.render(<Index />, mountNode);
