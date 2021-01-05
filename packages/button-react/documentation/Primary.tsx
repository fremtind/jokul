import React from "react";
import { ExampleComponentProps } from "@fremtind/jkl-portal-components";
import { PrimaryButton } from "../src";

function onClick() {
    console.log("Hello!");
}

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
        Avbryt
    </PrimaryButton>
);

export const PrimaryCode = `
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
    Avbryt
</PrimaryButton>
`;
