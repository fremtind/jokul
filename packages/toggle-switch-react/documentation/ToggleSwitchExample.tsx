import React, { useState } from "react";
import { ExampleComponentProps } from "../../../doc-utils";
import { ToggleSlider, ToggleSwitch } from "../src";

export const ToggleSwitchExample: React.FC<ExampleComponentProps> = ({ boolValues }) => {
    const [isOn, setIsOn] = useState(false);
    const helpLabel =
        boolValues && boolValues["Med hjelpetekst"] ? "Du må være koblet til wifi for å velge dette" : undefined;
    return (
        <ToggleSwitch
            pressed={isOn}
            onClick={() => setIsOn(!isOn)}
            inverted={boolValues && boolValues["Invertert"]}
            disabled={boolValues && boolValues["Deaktivert"]}
            helpLabel={helpLabel}
        >
            Send inn data om min kjørestil
        </ToggleSwitch>
    );
};

export const ToggleSliderExample: React.FC<ExampleComponentProps> = ({ boolValues }) => {
    return (
        <ToggleSlider
            defaultValue="måned"
            labels={["måned", "år"]}
            onToggle={console.log}
            inverted={boolValues && boolValues["Invertert"]}
        >
            Pris per
        </ToggleSlider>
    );
};

export const ToggleSwitchExamples: React.FC<ExampleComponentProps> = (props) => (
    <section>
        <ToggleSwitchExample {...props} />
        <div className="jkl-spacing-2xl--top">
            <ToggleSliderExample {...props} />
        </div>
    </section>
);
