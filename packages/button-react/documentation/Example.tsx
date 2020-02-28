import React from "react";
import { PrimaryButton, SecondaryButton, TertiaryButton } from "../src";
import "@fremtind/jkl-toggle-switch/toggle-switch.css";
import "@fremtind/jkl-button/button.css";
import "@fremtind/jkl-core/core.css";
import "./index.scss";

function onClick() {
    console.log("Hello!");
}

interface Props {
    boolValues: { [key: string]: boolean };
}

const Example: React.FC<Props> = ({ boolValues }) => {
    return (
        <>
            <PrimaryButton
                inverted={boolValues && boolValues["Invertert"]}
                forceCompact={boolValues && boolValues["Kompakt"]}
                onClick={onClick}
                className="jkl-spacing--right-1"
            >
                Send
            </PrimaryButton>
            <SecondaryButton
                inverted={boolValues && boolValues["Invertert"]}
                forceCompact={boolValues && boolValues["Kompakt"]}
                onClick={onClick}
                className="jkl-spacing--right-1"
            >
                Gå videre
            </SecondaryButton>
            <TertiaryButton
                inverted={boolValues && boolValues["Invertert"]}
                forceCompact={boolValues && boolValues["Kompakt"]}
                onClick={onClick}
            >
                Avbryt
            </TertiaryButton>
        </>
    );
};

export default Example;
