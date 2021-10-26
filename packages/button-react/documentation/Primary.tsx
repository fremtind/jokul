import React, { useState } from "react";
import { ExampleComponentProps } from "../../../doc-utils";
import { PrimaryButton } from "../src";

export const Primary: React.FC<ExampleComponentProps> = ({ boolValues }) => {
    const [showLoader, setShowLoader] = useState(false);
    const loader = { showLoader: showLoader || !!boolValues?.["isLoading"], textDescription: "Laster innhold" };

    const onClick = () => {
        console.log("Hello!");
        setShowLoader(true);
        setTimeout(() => {
            setShowLoader(false);
        }, 2200);
    };

    return (
        <PrimaryButton
            inverted={boolValues && boolValues["Invertert"]}
            forceCompact={boolValues && boolValues["Kompakt"]}
            loader={showLoader || !!boolValues?.["withLoader"] ? loader : undefined}
            onClick={onClick}
            className="jkl-spacing-l--right"
        >
            Lagre og send inn
        </PrimaryButton>
    );
};

export const PrimaryCode = `
<PrimaryButton
    inverted={boolValues && boolValues["Invertert"]}
    forceCompact={boolValues && boolValues["Kompakt"]}
    loader={showLoader || !!boolValues?.["withLoader"] ? loader : undefined}
    onClick={onClick}
    className="jkl-spacing-l--right"
>
    Lagre og send inn
</PrimaryButton>
`;
