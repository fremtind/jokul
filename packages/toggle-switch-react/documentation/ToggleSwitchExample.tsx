import React, { useState } from "react";
import { CodeExample, ExampleComponentProps, ExampleKnobsProps } from "../../../doc-utils";
import { PrimaryButton } from "../../button-react/src";
import { ToggleSwitch, ToggleSlider } from "../src";

export const toggleSwitchExampleKnobs: ExampleKnobsProps = {
    boolProps: ["Deaktivert", "Med hjelpetekst"],
};

export const toggleSliderExampleKnobs: ExampleKnobsProps = {};

export const ToggleSliderExample: React.FC<ExampleComponentProps> = ({ displayValues }) => {
    const [value, setValue] = useState("måned");
    return (
        <section style={{ width: "100%" }}>
            <ToggleSlider
                defaultValue="måned"
                labels={["måned", "år"]}
                onToggle={setValue}
                density={displayValues?.density}
            >
                Pris per
            </ToggleSlider>
            <p className="jkl-spacing-l--top jkl-bold">100 kr/{value === "år" ? value : "mnd"}</p>
        </section>
    );
};

export const toggleSliderCodeExample: CodeExample = (): string => `
    <ToggleSlider
        defaultValue="måned"
        labels={["måned", "år"]}
    />
`;

export const ToggleSwitchExample: React.FC<ExampleComponentProps> = ({ boolValues }) => {
    const [isOn, setIsOn] = useState(false);
    const toggle = () => setIsOn((prev) => !prev);

    return (
        <ToggleSwitch
            aria-pressed={isOn}
            disabled={boolValues?.["Deaktivert"]}
            onClick={toggle}
            onSwipeLeft={() => setIsOn(false)}
            onSwipeRight={() => setIsOn(true)}
        >
            Mørk modus
        </ToggleSwitch>
    );
};

export const toggleSwitchCodeExample: CodeExample = ({ boolValues }) => `
const [isOn, setIsOn] = useState(false);
const toggle = () => setIsOn((prev) => !prev);

<ToggleSwitch
    aria-pressed={isOn}${
        boolValues?.["Deaktivert"]
            ? `
    disabled`
            : ""
    }
    onClick={toggle}
    onSwipeLeft={() => setIsOn(false)}
    onSwipeRight={() => setIsOn(true)}${
        boolValues?.["Med hjelpetekst"]
            ? `
    helpLabel="Veksle mellom lyst og mørkt grensesnitt"`
            : ""
    }
>
    Mørk modus
</ToggleSwitch>
`;

export const ToggleSwitchWrongExamples: React.FC<ExampleComponentProps> = () => {
    const [isOn, setIsOn] = useState(false);

    return (
        <form>
            <ToggleSwitch pressed={isOn} onClick={() => setIsOn(!isOn)}>
                Jeg samtykker
            </ToggleSwitch>

            <PrimaryButton type="submit" className="jkl-spacing-l--top">
                Send
            </PrimaryButton>
        </form>
    );
};

export const ToggleSliderWrongExamples: React.FC<ExampleComponentProps> = () => (
    <ToggleSlider defaultValue="Pris per måned" labels={["Pris per måned", "Pris per år"]} onToggle={console.log}>
        Vis pris per
    </ToggleSlider>
);

export const ToggleSwitchExamples: React.FC<ExampleComponentProps> = (props) => (
    <section>
        <ToggleSwitchExample {...props} />
        <div className="jkl-spacing-2xl--top">
            <ToggleSliderExample {...props} />
        </div>
    </section>
);
