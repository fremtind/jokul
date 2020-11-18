import React from "react";
import { ExampleComponentProps } from "@fremtind/jkl-portal-components";
import { ActionButton, PrimaryButton, SecondaryButton, TertiaryButton } from "../src";
import "./style.scss";

function onClick() {
    console.log("Hello!");
}

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

export const Primary: React.FC<ExampleComponentProps> = ({ boolValues }) => (
    <PrimaryButton
        inverted={boolValues && boolValues["Invertert"]}
        forceCompact={boolValues && boolValues["Kompakt"]}
        loader={
            !!boolValues?.["withLoader"]
                ? { showLoader: !!boolValues?.["isLoading"], textDescription: "Laster innhold" }
                : undefined
        }
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
        loader={
            !!boolValues?.["withLoader"]
                ? { showLoader: !!boolValues?.["isLoading"], textDescription: "Laster innhold" }
                : undefined
        }
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
        loader={
            !!boolValues?.["withLoader"]
                ? { showLoader: !!boolValues?.["isLoading"], textDescription: "Laster innhold" }
                : undefined
        }
        onClick={onClick}
        className="jkl-spacing--right-1"
    >
        Avbryt
    </TertiaryButton>
);

export const Example: React.FC<ExampleComponentProps> = ({ boolValues }) => {
    return (
        <>
            <Action boolValues={boolValues} />
            <Primary boolValues={boolValues} />
            <Secondary boolValues={boolValues} />
            <Tertiary boolValues={boolValues} />
        </>
    );
};

export default Example;
