import { ChevronDownIcon } from "@fremtind/jkl-icons-react";
import React, { useState } from "react";
import { ExampleComponentProps } from "../../../doc-utils";
import { Button } from "../src";
import { IconPosition } from "../src/types";

export const Ghost: React.FC<ExampleComponentProps> = ({
    boolValues,
    choiceValues,
}) => {
    const [showLoader] = useState(false);
    const loader = {
        showLoader: showLoader || !!boolValues?.["isLoading"],
        textDescription: "Laster innhold",
    };
    const iconPosition =
        choiceValues?.["iconPosition"] === "none"
            ? undefined
            : (choiceValues?.["iconPosition"] as IconPosition);

    const hasLabel = boolValues?.["label"];

    return (
        <Button
            variant="ghost"
            loader={
                showLoader || !!boolValues?.["withLoader"] ? loader : undefined
            }
            className="jkl-spacing-l--right"
            aria-label={!hasLabel ? "Ola Nordmann" : undefined}
            iconPosition={iconPosition as IconPosition}
            icon={<ChevronDownIcon />}
        >
            {hasLabel ? "Ola Nordmann" : null}
        </Button>
    );
};

export const ghostCode = ({ choiceValues }: ExampleComponentProps): string => {
    const iconPosition = choiceValues?.["iconPosition"] || "noIcon";
    return `
<Button
    variant="ghost"
    className="jkl-spacing-l--right"
    icon={<ChevronDownIcon />}${
        ["left", "right"].includes(iconPosition)
            ? `
    iconPosition="${iconPosition}"`
            : ""
    }
>
    Ola Nordmann
</Button>
`;
};
