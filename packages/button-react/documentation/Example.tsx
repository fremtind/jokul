import React from "react";
import { ExampleComponentProps } from "@fremtind/jkl-portal-components";
import { PrimaryButton, SecondaryButton, TertiaryButton, ActionButton } from "../src";

function onClick() {
    console.log("Hello!");
}

export const Primary: React.FC<ExampleComponentProps> = ({ boolValues }) => (
    <PrimaryButton
        inverted={boolValues && boolValues["Invertert"]}
        forceCompact={boolValues && boolValues["Kompakt"]}
        onClick={onClick}
        className="jkl-spacing--right-1"
    >
        Send
    </PrimaryButton>
);

export const Secondary: React.FC<ExampleComponentProps> = ({ boolValues }) => (
    <SecondaryButton
        inverted={boolValues && boolValues["Invertert"]}
        forceCompact={boolValues && boolValues["Kompakt"]}
        onClick={onClick}
        className="jkl-spacing--right-1"
    >
        Gå videre
    </SecondaryButton>
);

export const Tertiary: React.FC<ExampleComponentProps> = ({ boolValues }) => (
    <TertiaryButton
        inverted={boolValues && boolValues["Invertert"]}
        forceCompact={boolValues && boolValues["Kompakt"]}
        onClick={onClick}
        className="jkl-spacing--right-1"
    >
        Avbryt
    </TertiaryButton>
);
export const Action: React.FC<ExampleComponentProps> = ({ boolValues }) => (
    <ActionButton
        inverted={boolValues && boolValues["Invertert"]}
        forceCompact={boolValues && boolValues["Kompakt"]}
        onClick={onClick}
        className="jkl-spacing--right-1"
    >
        Kjøp
    </ActionButton>
);
export const Example: React.FC<ExampleComponentProps> = ({ boolValues }) => {
    return (
        <>
            <Primary boolValues={boolValues} />
            <Secondary boolValues={boolValues} />
            <Tertiary boolValues={boolValues} />
            <Action boolValues={boolValues} />
        </>
    );
};

export default Example;
