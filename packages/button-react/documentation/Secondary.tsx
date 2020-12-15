import React from "react";
import { ExampleComponentProps } from "@fremtind/jkl-portal-components";
import { SecondaryButton } from "../src";

function onClick() {
    console.log("Hello!");
}

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
        Avbryt
    </SecondaryButton>
);

export const SecondaryCode = `
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
    Avbryt
</SecondaryButton>
`;
