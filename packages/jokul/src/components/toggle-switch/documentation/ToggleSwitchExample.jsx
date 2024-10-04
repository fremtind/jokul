import React from "react";
import { ToggleSwitch } from "..";
import { PrimaryButton } from "../../button";

export const knobs = [
    {
        type: "bool",
        label: "Deaktivert",
        boolOptions: {
            trueValue: true,
            falseValue: false,
        },
    },
];

export const ToggleSwitchExample = () => {
    /* -- EXAMPLE CODE START -- */
    const isDisabled = boolKnob("Deaktivert");

    const handleToggle = (event, pressed) => console.log("Mørk modus satt til: ", pressed, event);

    return (
        <ToggleSwitch disabled={isDisabled} onChange={handleToggle}>
            Mørk modus
        </ToggleSwitch>
    );
    /* -- EXAMPLE CODE END -- */
};
