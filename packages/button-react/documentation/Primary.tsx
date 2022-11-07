import React, { useState } from "react";
import { ExampleComponentProps } from "../../../doc-utils";
import { PrimaryButton } from "../src";

export const Primary: React.FC<ExampleComponentProps> = ({ boolValues, choiceValues }) => {
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
        <PrimaryButton
            loader={showLoader || !!boolValues?.["withLoader"] ? loader : undefined}
            className="jkl-spacing-l--right"
            onClick={simulateLoading}
            arrow={arrow}
        >
            Lagre og send inn
        </PrimaryButton>
    );
};

export const primaryCode = ({ boolValues, choiceValues }: ExampleComponentProps): string => `
<PrimaryButton
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
    Lagre og send inn
</PrimaryButton>
`;
