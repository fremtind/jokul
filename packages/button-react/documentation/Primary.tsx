import { CheckIcon } from "@fremtind/jkl-icons-react";
import React, { useState } from "react";
import { ExampleComponentProps } from "../../../doc-utils";
import { Button } from "../src";
import { IconPosition } from "../src/types";

export const Primary: React.FC<ExampleComponentProps> = ({
    boolValues,
    choiceValues,
}) => {
    const [showLoader, setShowLoader] = useState(false);
    const icon = boolValues?.["icon"] || false;
    const loader = {
        showLoader: showLoader || !!boolValues?.["isLoading"],
        textDescription: "Laster innhold",
    };
    const iconPosition = (choiceValues?.["iconPosition"] ||
        "left") as IconPosition;

    const iconProps =
        icon || !boolValues?.["label"]
            ? {
                  icon: <CheckIcon />,
                  iconPosition,
              }
            : {};

    const simulateLoading = () => {
        console.log("Hello!");
        setShowLoader(true);
        setTimeout(() => {
            setShowLoader(false);
        }, 2200);
    };

    const hasLabel = boolValues?.["label"];

    return (
        <Button
            variant="primary"
            loader={
                showLoader || !!boolValues?.["withLoader"] ? loader : undefined
            }
            onClick={simulateLoading}
            aria-label={!hasLabel ? "Lagre og send inn" : undefined}
            {...iconProps}
        >
            {hasLabel ? "Lagre og send inn" : null}
        </Button>
    );
};

export const primaryCode = ({
    boolValues,
    choiceValues,
}: ExampleComponentProps): string => {
    const label = boolValues?.["label"]
        ? `
    Lagre og send inn
`
        : "";
    const icon = boolValues?.["icon"] || false;
    const iconPosition = (choiceValues?.["iconPosition"] ||
        "left") as IconPosition;
    const iconProps =
        icon || !boolValues?.["label"]
            ? `
    icon={<CheckIcon />}
    iconPosition="${iconPosition}"`
            : "";

    return `
<Button
    variant="primary"
    loader={${
        !!boolValues?.["withLoader"]
            ? `{
        showLoader: ${!!boolValues?.["isLoading"]},
        textDescription: "Laster innhold"
    }`
            : `false`
    }}
    onClick={simulateLoading}${iconProps}
>${label}</Button>
`;
};
