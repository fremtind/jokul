import React from "react";
import ReactDOM from "react-dom";
import { PrimaryButton, SecondaryButton, TertiaryButton } from "../src";
import { initTabListener } from "@fremtind/jkl-core";
import "@fremtind/jkl-button/button.css";
import "@fremtind/jkl-core/core.css";

initTabListener();

function onClick() {
    console.log("Hello!");
}

const Buttons = () => (
    <>
        <div className="side-by-side">
            <pre>
                <code>{`forceCompact={false}`}</code>
            </pre>
            <pre>
                <code>{`forceCompact={true}`}</code>
            </pre>
        </div>
        <div className="side-by-side">
            <PrimaryButton onClick={onClick}>Send inn</PrimaryButton>
            <PrimaryButton forceCompact onClick={onClick}>
                Send inn
            </PrimaryButton>
        </div>
        <div className="side-by-side">
            <SecondaryButton onClick={onClick}>Svar senere</SecondaryButton>
            <SecondaryButton forceCompact onClick={onClick}>
                Svar senere
            </SecondaryButton>
        </div>
        <div className="side-by-side">
            <TertiaryButton onClick={onClick}>Avbryt</TertiaryButton>
            <TertiaryButton forceCompact onClick={onClick}>
                Avbryt
            </TertiaryButton>
        </div>
    </>
);

const mountNode = document.getElementById("app");
ReactDOM.render(<Buttons />, mountNode);
