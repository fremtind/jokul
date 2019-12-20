import React from "react";
import { PrimaryButton, SecondaryButton, TertiaryButton } from "../src";
import "@fremtind/jkl-button/button.css";
import "@fremtind/jkl-core/core.css";
import "./index.scss";

function onClick() {
    console.log("Hello!");
}

const Example = () => (
    <section className="jkl-spacing--all-3 jkl-button-example">
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
    </section>
);

export default Example;
