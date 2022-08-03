import React, { useState } from "react";
import { ExampleComponentProps } from "../../../doc-utils";
import { SecondaryButton } from "../src";

export const Secondary: React.FC<ExampleComponentProps> = ({ boolValues, choiceValues }) => {
    const [showLoader, setShowLoader] = useState(false);
    const loader = { showLoader: showLoader || !!boolValues?.["isLoading"], textDescription: "Laster innhold" };
    const arrow = choiceValues?.["Pil"] === "uten" ? undefined : (choiceValues?.["Pil"] as "left" | "right");

    const simulateLoading = () => {
        console.log("Hello!");
        setShowLoader(true);
        setTimeout(() => {
            setShowLoader(false);
        }, 2200);
    };

    return (
        <SecondaryButton
            compact={boolValues && boolValues["Compact"]}
            loader={showLoader || !!boolValues?.["withLoader"] ? loader : undefined}
            className="jkl-spacing-l--right"
            onClick={simulateLoading}
            arrow={arrow}
        >
            Lagre
        </SecondaryButton>
    );
};

export const secondaryCode = ({ boolValues, choiceValues }: ExampleComponentProps): string => `
<SecondaryButton
    compact={${!!boolValues?.["Compact"]}}
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
    ${choiceValues?.["Pil"] === "uten" ? "" : `arrow="${choiceValues?.["Pil"]}"`}
>
    Lagre
</SecondaryButton>
`;
