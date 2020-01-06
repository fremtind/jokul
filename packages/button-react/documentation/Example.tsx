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
            <PrimaryButton onClick={onClick}>PrimaryButton</PrimaryButton>
            <PrimaryButton forceCompact onClick={onClick}>
                PrimaryButton
            </PrimaryButton>
        </div>
        <div className="side-by-side">
            <SecondaryButton onClick={onClick}>SecondaryButton</SecondaryButton>
            <SecondaryButton forceCompact onClick={onClick}>
                SecondaryButton
            </SecondaryButton>
        </div>
        <div className="side-by-side">
            <TertiaryButton onClick={onClick}>TertiaryButton</TertiaryButton>
            <TertiaryButton forceCompact onClick={onClick}>
                TertiaryButton
            </TertiaryButton>
        </div>
    </section>
);

export default Example;
