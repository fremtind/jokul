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
    test: string;
    boolValues: { [key: string]: boolean };
}

const Example: React.FC<Props> = ({ test, boolValues }) => {
    console.log(boolValues);
    return (
        <>
            <PrimaryButton forceCompact={boolValues["Kompakt"]} onClick={onClick} className="portal-example-button">
                {test}
            </PrimaryButton>
            <SecondaryButton onClick={onClick} className="portal-example-button">
                SecondaryButton
            </SecondaryButton>
            <TertiaryButton onClick={onClick} className="portal-example-button">
                TertiaryButton
            </TertiaryButton>
        </>
    );
};

export default Example;
