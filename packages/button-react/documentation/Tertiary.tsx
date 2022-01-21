import React, { useState } from "react";
import { ExampleComponentProps } from "../../../doc-utils";
import { TertiaryButton } from "../src";

export const Tertiary: React.FC<ExampleComponentProps> = ({ boolValues }) => {
    const [showLoader, setShowLoader] = useState(false);
    const loader = { showLoader: showLoader || !!boolValues?.["isLoading"], textDescription: "Laster innhold" };

    const simulateLoading = () => {
        console.log("Hello!");
        setShowLoader(true);
        setTimeout(() => {
            setShowLoader(false);
        }, 2200);
    };

    return (
        <TertiaryButton
            forceCompact={boolValues && boolValues["Compact"]}
            inverted={boolValues && boolValues["Invertert"]}
            loader={showLoader || !!boolValues?.["withLoader"] ? loader : undefined}
            className="jkl-spacing-l--right"
            onClick={simulateLoading}
        >
            Avbryt
        </TertiaryButton>
    );
};

export const tertiaryCode = ({ boolValues }: ExampleComponentProps): string => `
<TertiaryButton
    forceCompact={${!!boolValues?.["Compact"]}}
    inverted={${!!boolValues?.["Invertert"]}}
    loader={${
        !!boolValues?.["withLoader"]
            ? `{
        showLoader: ${!!boolValues?.["isLoading"]},
        textDescription: "Laster innhold"
    }`
            : `false`
    }}
    onClick={simulateLoading}
    className="jkl-spacing-l--right"
>
    Avbryt
</TertiaryButton>
`;
