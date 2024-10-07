import React, { useCallback, useState } from "react";
import { CheckIcon, ChevronDownIcon, CloseIcon } from "../../icon";
import { Button } from "../Button";

export const knobs = [
    {
        type: "bool",
        label: "label",
        boolOptions: {
            trueValue: true,
            falseValue: false,
        },
        defaultValue: true,
    },
    {
        type: "bool",
        label: "icon",
        boolOptions: {
            trueValue: true,
            falseValue: false,
        },
    },
    {
        type: "choice",
        label: "iconPlacement",
        choiceOptions: [
            { label: "left", value: "left" },
            { label: "right", value: "right" },
        ],
        defaultValue: 0,
    },
];

export const ButtonExample = () => {
    /* -- EXAMPLE CODE START -- */
    const [showLoader, setShowLoader] = useState(false);

    const simulateLoading = useCallback(() => {
        setShowLoader(true);
        setTimeout(() => {
            setShowLoader(false);
        }, 2200);
    }, []);

    return (
        <div className="flex flex-column gap-32 justify-between items-center">
            <Button
                variant="primary"
                loader={{
                    showLoader,
                    textDescription: "Laster innhold",
                }}
                onClick={simulateLoading}
                icon={boolKnob("icon") && <CheckIcon />}
                iconPosition={choiceKnob("iconPlacement")}
            >
                {boolKnob("label") ? "Lagre og send inn" : null}
            </Button>
            <Button
                variant="secondary"
                loader={{
                    showLoader,
                    textDescription: "Laster innhold",
                }}
                onClick={simulateLoading}
                icon={boolKnob("icon") && <CheckIcon />}
                iconPosition={choiceKnob("iconPlacement")}
            >
                {boolKnob("label") ? "Lagre" : null}
            </Button>
            <Button
                variant="tertiary"
                loader={{
                    showLoader,
                    textDescription: "Laster innhold",
                }}
                onClick={simulateLoading}
                icon={boolKnob("icon") && <CloseIcon />}
                iconPosition={choiceKnob("iconPlacement")}
            >
                {boolKnob("label") ? "Avbryt" : null}
            </Button>
            <Button
                variant="ghost"
                icon={boolKnob("icon") && <ChevronDownIcon />}
                iconPosition={choiceKnob("iconPlacement")}
            >
                {boolKnob("label") ? "Ola Nordmann" : null}
            </Button>
        </div>
    );
    /* -- EXAMPLE CODE END -- */
};
