import React, { useState } from "react";
import { ExampleComponentProps } from "../../../doc-utils";
import { SecondaryButton } from "../src";

export const Secondary: React.FC<ExampleComponentProps> = ({ boolValues }) => {
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
        <SecondaryButton
            forceCompact={boolValues && boolValues["Kompakt"]}
            inverted={boolValues && boolValues["Invertert"]}
            loader={showLoader || !!boolValues?.["withLoader"] ? loader : undefined}
            className="jkl-spacing-l--right"
            onClick={simulateLoading}
        >
            Lagre
        </SecondaryButton>
    );
};

export const secondaryCode = ({ boolValues }: ExampleComponentProps): string => `
<SecondaryButton
    forceCompact={${!!boolValues?.["Kompakt"]}}
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
    Lagre
</SecondaryButton>
`;
