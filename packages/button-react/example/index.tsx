import React from "react";
import ReactDOM from "react-dom";
import { PrimaryButton, SecondaryButton, TertiaryButton } from "../src";

function onClick() {
    console.log("Hello!");
}

const Buttons = () => (
    <>
        <PrimaryButton onClick={onClick}>
            Hello, Primary Button
        </PrimaryButton>
        <SecondaryButton onClick={onClick}>Hello, Secondary Button</SecondaryButton>
        <TertiaryButton onClick={onClick}>Tertiary</TertiaryButton>
    </>
);

const mountNode = document.getElementById("app");
ReactDOM.render(<Buttons />, mountNode);
