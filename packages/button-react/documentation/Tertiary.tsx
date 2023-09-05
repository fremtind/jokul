import { ArrowLeftIcon, ArrowRightIcon } from "@fremtind/jkl-icons-react";
import React, { useState } from "react";
import { ExampleComponentProps } from "../../../doc-utils";
import { TertiaryButton } from "../src";

export const Tertiary: React.FC<ExampleComponentProps> = ({ boolValues, choiceValues }) => {
    const [showLoader, setShowLoader] = useState(false);
    const loader = { showLoader: showLoader || !!boolValues?.["isLoading"], textDescription: "Laster innhold" };
    const icon =
        choiceValues?.["Ikon"] === "uten" ? undefined : (choiceValues?.["Ikon"] as "arrow-left" | "arrow-right");

    const simulateLoading = () => {
        console.log("Hello!");
        setShowLoader(true);
        setTimeout(() => {
            setShowLoader(false);
        }, 2200);
    };

    return (
        <TertiaryButton
            loader={showLoader || !!boolValues?.["withLoader"] ? loader : undefined}
            className="jkl-spacing-l--right"
            onClick={simulateLoading}
            iconLeft={icon === "arrow-left" ? <ArrowLeftIcon /> : null}
            iconRight={icon === "arrow-right" ? <ArrowRightIcon /> : null}
        >
            Avbryt
        </TertiaryButton>
    );
};

export const tertiaryCode = ({ boolValues, choiceValues }: ExampleComponentProps): string => `
<TertiaryButton
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
    ${choiceValues?.["Ikon"] === "uten" ? "" : `arrow="${choiceValues?.["Pil"]}"`}
>
    Avbryt
</TertiaryButton>
`;
