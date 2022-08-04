import classNames from "classnames";
import React, { useState } from "react";
import { CodeExample, ExampleComponentProps, ExampleKnobsProps } from "../../../doc-utils";
import { PrimaryButton } from "../../button-react/src";
import { ToggleSlider, ToggleSwitch } from "../src";

export const toggleSwitchExampleKnobs: ExampleKnobsProps = {
    boolProps: ["Compact", "Deaktivert", "Med hjelpetekst"],
};

export const ToggleSwitchExample: React.FC<ExampleComponentProps> = ({ boolValues }) => {
    const [isOn, setIsOn] = useState(false);
    const helpLabel = boolValues?.["Med hjelpetekst"] ? "Veksle mellom lys og mørk grensesnitt" : undefined;
    return (
        <ToggleSwitch
            compact={boolValues?.["Compact"]}
            pressed={isOn}
            onClick={() => setIsOn(!isOn)}
            disabled={boolValues?.["Deaktivert"]}
            helpLabel={helpLabel}
        >
            Mørk modus
        </ToggleSwitch>
    );
};

export const toggleSliderExampleKnobs: ExampleKnobsProps = {
    boolProps: ["Compact"],
};

export const ToggleSliderExample: React.FC<ExampleComponentProps> = ({ boolValues }) => {
    const [value, setValue] = useState("måned");
    const compact = boolValues?.["Compact"];
    return (
        <section style={{ width: "100%" }}>
            <ToggleSlider compact={compact} defaultValue="måned" labels={["måned", "år"]} onToggle={setValue}>
                Pris per
            </ToggleSlider>
            <p className={classNames("jkl-spacing-l--top", { "jkl-heading-5": compact, "jkl-bold": !compact })}>
                100 kr/{value === "år" ? value : "mnd"}
            </p>
        </section>
    );
};

export const toggleSwitchCodeExample = ({ boolValues }: ExampleComponentProps): string => `
    <ToggleSwitch
        compact={${boolValues?.["Compact"]}}
        helpLabel={${boolValues?.["Med hjelpetekst"] ? `"Veksle mellom lys og mørk grensesnitt"` : `undefined`}}
        disabled={${boolValues?.["Deaktivert"]}}
    />
`;

export const toggleSliderCodeExample: CodeExample = ({ boolValues }): string => `
    <ToggleSlider
        compact={${boolValues?.["Compact"]}}
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
