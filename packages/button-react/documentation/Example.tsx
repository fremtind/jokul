import React from "react";
import { ExampleComponentProps } from "@fremtind/jkl-portal-components";
import { PrimaryButton, SecondaryButton, TertiaryButton } from "../src";

function onClick() {
    console.log("Hello!");
}

export const Example: React.FC<ExampleComponentProps> = ({ boolValues }) => {
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
