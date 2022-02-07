import React, { useState } from "react";
import { ExampleComponentProps } from "../../../doc-utils";
import { PrimaryButton } from "../src";

export const Primary: React.FC<ExampleComponentProps> = ({ boolValues }) => {
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
        <PrimaryButton
            forceCompact={!!boolValues?.["Compact"]}
            loader={showLoader || !!boolValues?.["withLoader"] ? loader : undefined}
            className="jkl-spacing-l--right"
            onClick={simulateLoading}
        >
            Lagre og send inn
        </PrimaryButton>
    );
};

export const primaryCode = ({ boolValues }: ExampleComponentProps): string => `
<PrimaryButton
    forceCompact={${!!boolValues?.["Compact"]}}
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
    Lagre og send inn
</PrimaryButton>
`;
