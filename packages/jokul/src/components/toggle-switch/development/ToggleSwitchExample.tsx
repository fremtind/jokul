import type {
    ExampleComponentProps,
    ExampleKnobsProps,
} from "utils/dev-example/index.js";
import React from "react";
import { ToggleSwitch } from "../ToggleSwitch.js";
import type { ToggleChangeHandler } from "../types.js";

export const toggleSwitchExampleKnobs: ExampleKnobsProps = {
    boolProps: ["Deaktivert"],
};

export const ToggleSwitchExample: React.FC<ExampleComponentProps> = ({
    boolValues,
}) => {
    const isDisabled = boolValues?.["Deaktivert"];

    const handleToggle: ToggleChangeHandler<HTMLButtonElement> = (
        event,
        pressed,
    ) => console.log("Mørk modus satt til: ", pressed, event);

    return (
        <ToggleSwitch disabled={isDisabled} onChange={handleToggle}>
            Mørk modus
        </ToggleSwitch>
    );
};

export const ToggleSwitchExamples: React.FC<ExampleComponentProps> = (
    props,
) => (
    <section>
        <ToggleSwitchExample {...props} />
    </section>
);
