import React, { type FC, useCallback, useState } from "react";
import type {
    ExampleComponentProps,
    ExampleKnobsProps,
} from "utils/dev-example/index.js";
import { CheckIcon, ChevronDownIcon, CloseIcon } from "../../icon/index.js";
import { Button } from "../Button.js";
import type { IconPosition } from "../types.js";

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

    const hasLabel = Boolean(boolValues?.["label"]);

    return (
        <div className="flex flex-column gap-32 justify-between items-center">
            <Button
                variant="primary"
                loader={{
                    showLoader,
                    textDescription: "Laster innhold",
                }}
                aria-label={!hasLabel ? "Lagre og send inn" : undefined}
                onClick={simulateLoading}
                {...iconProps(<CheckIcon />)}
            >
                {hasLabel ? "Lagre og send inn" : null}
            </Button>
            <Button
                variant="secondary"
                loader={{
                    showLoader,
                    textDescription: "Laster innhold",
                }}
                aria-label={!hasLabel ? "Lagre" : undefined}
                onClick={simulateLoading}
                {...iconProps(<CheckIcon />)}
            >
                {hasLabel ? "Lagre" : null}
            </Button>
            <Button
                variant="tertiary"
                loader={{
                    showLoader,
                    textDescription: "Laster innhold",
                }}
                aria-label={!hasLabel ? "Avbryt" : undefined}
                onClick={simulateLoading}
                {...iconProps(<CloseIcon />)}
            >
                {hasLabel ? "Avbryt" : null}
            </Button>

            <Button
                variant="ghost"
                {...iconProps(<ChevronDownIcon />)}
                aria-label={!hasLabel ? "Ola Nordmann" : undefined}
            >
                {hasLabel ? "Ola Nordmann" : null}
            </Button>
        </div>
    );
    /* -- EXAMPLE CODE END -- */
};
