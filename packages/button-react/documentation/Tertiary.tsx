import React from "react";
import { ExampleComponentProps } from "../../../doc-utils";
import { TertiaryButton } from "../src";

function onClick() {
    console.log("Hello!");
}

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

export const TertiaryCode = `
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
`;
