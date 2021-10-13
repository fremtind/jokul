import React, { useState } from "react";
import { ExampleComponentProps } from "../../../doc-utils";
import { TertiaryButton } from "../src";

export const Tertiary: React.FC<ExampleComponentProps> = ({ boolValues }) => {
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
        <TertiaryButton
            inverted={boolValues && boolValues["Invertert"]}
            forceCompact={boolValues && boolValues["Kompakt"]}
            loader={showLoader || !!boolValues?.["withLoader"] ? loader : undefined}
            onClick={onClick}
            className="jkl-spacing--right-1"
        >
            Avbryt
        </TertiaryButton>
    );
};

export const TertiaryCode = `
<TertiaryButton
    inverted={boolValues && boolValues["Invertert"]}
    forceCompact={boolValues && boolValues["Kompakt"]}
    loader={showLoader || !!boolValues?.["withLoader"] ? loader : undefined}
    onClick={onClick}
    className="jkl-spacing--right-1"
>
    Avbryt
</TertiaryButton>
`;
