import React, { useState } from "react";
import { CodeExample, ExampleComponentProps, ExampleKnobsProps } from "../../../doc-utils";
import { PrimaryButton } from "../../button-react/src";
import { ToggleSlider, ToggleSwitch } from "../src";

export const toggleSwitchExampleKnobs: ExampleKnobsProps = {
    boolProps: ["Deaktivert", "Med hjelpetekst"],
};

export const ToggleSwitchExample: React.FC<ExampleComponentProps> = ({ boolValues }) => {
    const [isOn, setIsOn] = useState(false);
    const helpLabel = boolValues?.["Med hjelpetekst"] ? "Veksle mellom lys og mørk grensesnitt" : undefined;
    return (
        <ToggleSwitch
            pressed={isOn}
            onClick={() => setIsOn(!isOn)}
            disabled={boolValues?.["Deaktivert"]}
            helpLabel={helpLabel}
        >
            Mørk modus
        </ToggleSwitch>
    );
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
                compact={displayValues?.size === "compact"}
            >
                Pris per
            </ToggleSlider>
            <p className="jkl-spacing-l--top jkl-bold">100 kr/{value === "år" ? value : "mnd"}</p>
        </section>
    );
};

export const toggleSwitchCodeExample = ({ boolValues }: ExampleComponentProps): string => `
    <ToggleSwitch
        helpLabel={${boolValues?.["Med hjelpetekst"] ? `"Veksle mellom lys og mørk grensesnitt"` : `undefined`}}
        disabled={${boolValues?.["Deaktivert"]}}
    />
`;

export const toggleSliderCodeExample: CodeExample = (): string => `
    <ToggleSlider
        defaultValue="måned"
        labels={["måned", "år"]}
    />
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
