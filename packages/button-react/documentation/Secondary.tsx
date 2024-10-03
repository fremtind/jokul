import { CheckIcon } from "@fremtind/jkl-icons-react";
import React, { useState } from "react";
import { ExampleComponentProps } from "../../../doc-utils";
import { Button } from "../src";
import { IconPosition } from "../src/types";

export const Secondary: React.FC<ExampleComponentProps> = ({ boolValues, choiceValues }) => {
    const [showLoader, setShowLoader] = useState(false);
    const loader = { showLoader: showLoader || !!boolValues?.["isLoading"], textDescription: "Laster innhold" };
    const iconPosition =
        choiceValues?.["iconPosition"] === "none" ? undefined : (choiceValues?.["iconPosition"] as IconPosition);

    const simulateLoading = () => {
        console.log("Hello!");
        setShowLoader(true);
        setTimeout(() => {
            setShowLoader(false);
        }, 2200);
    };

    return (
        <Button
            loader={showLoader || !!boolValues?.["withLoader"] ? loader : undefined}
            className="jkl-spacing-l--right"
            onClick={simulateLoading}
            iconPosition={iconPosition as IconPosition}
            icon={<CheckIcon />}
        >
            Lagre
        </Button>
    );
};

export const secondaryCode = ({ boolValues, choiceValues }: ExampleComponentProps): string => {
    const iconPosition = choiceValues?.["iconPosition"] || "noIcon";
    return `
<Button
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
    icon={<CheckIcon />}${
        ["left", "right"].includes(iconPosition)
            ? `
    iconPosition="${iconPosition}"`
            : ""
    }
>
    Lagre
</Button>
`;
};
