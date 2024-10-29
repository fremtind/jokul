import React from "react";
import {
    CodeExample,
    ExampleComponentProps,
    ExampleKnobsProps,
} from "../../../doc-utils";
import { PrimaryButton } from "../../button-react/src";
import { type ToggleChangeHandler, ToggleSwitch } from "../src";

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

export const toggleSwitchCodeExample: CodeExample = () => `
const handleToggle: ToggleHandler<HTMLButtonElement> = (event, pressed) =>
    console.log("Mørk modus satt til: ", pressed, event);

<ToggleSwitch onToggle={handleToggle}>Mørk modus</ToggleSwitch>`;

export const ToggleSwitchWrongExamples: React.FC<
    ExampleComponentProps
> = () => {
    return (
        <form>
            <ToggleSwitch>Jeg samtykker</ToggleSwitch>

            <PrimaryButton type="submit" className="jkl-spacing-l--top">
                Send
            </PrimaryButton>
        </form>
    );
};

export const ToggleSwitchExamples: React.FC<ExampleComponentProps> = (
    props,
) => (
    <section>
        <ToggleSwitchExample {...props} />
    </section>
);
