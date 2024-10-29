import { ExampleComponentProps, ExampleKnobsProps } from "doc-utils/index.js";
import React, { FC, useCallback, useState } from "react";
import { CheckIcon, ChevronDownIcon, CloseIcon } from "../../icon/index.js";
import { Button } from "../Button.js";
import { IconPosition } from "../types.js";

export const knobs: ExampleKnobsProps = {
    boolProps: [{ prop: "label", defaultValue: true }, "icon"],
    choiceProps: [
        { name: "iconPosition", values: ["left", "right"], defaultValue: 0 },
    ],
};

export const ButtonExample: FC<ExampleComponentProps> = ({
    boolValues,
    choiceValues,
}) => {
    /* -- EXAMPLE CODE START -- */
    const [showLoader, setShowLoader] = useState(false);

    const simulateLoading = useCallback(() => {
        setShowLoader(true);
        setTimeout(() => {
            setShowLoader(false);
        }, 2200);
    }, []);

    const iconProps = (icon: React.ReactElement) =>
        boolValues?.["icon"]
            ? {
                  icon,
                  iconPosition: choiceValues?.["iconPosition"] as IconPosition,
              }
            : {};

    return (
        <div className="flex flex-column gap-32 justify-between items-center">
            <Button
                variant="primary"
                loader={{
                    showLoader,
                    textDescription: "Laster innhold",
                }}
                onClick={simulateLoading}
                {...iconProps(<CheckIcon />)}
            >
                {boolValues?.["label"] ? "Lagre og send inn" : null}
            </Button>
            <Button
                variant="secondary"
                loader={{
                    showLoader,
                    textDescription: "Laster innhold",
                }}
                onClick={simulateLoading}
                {...iconProps(<CheckIcon />)}
            >
                {boolValues?.["label"] ? "Lagre" : null}
            </Button>
            <Button
                variant="tertiary"
                loader={{
                    showLoader,
                    textDescription: "Laster innhold",
                }}
                onClick={simulateLoading}
                {...iconProps(<CloseIcon />)}
            >
                {boolValues?.["label"] ? "Avbryt" : null}
            </Button>
            <Button variant="ghost" {...iconProps(<ChevronDownIcon />)}>
                {boolValues?.["label"] ? "Ola Nordmann" : null}
            </Button>
        </div>
    );
    /* -- EXAMPLE CODE END -- */
};
