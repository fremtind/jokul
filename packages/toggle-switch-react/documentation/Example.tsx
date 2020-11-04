import React, { useState } from "react";
import { ExampleComponentProps } from "@fremtind/jkl-portal-components";
import { ToggleSlider, ToggleSwitch } from "../src";

export const Switch: React.FC<ExampleComponentProps> = ({ boolValues }) => {
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

export const Slider: React.FC<ExampleComponentProps> = ({ boolValues }) => {
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

const Example: React.FC<ExampleComponentProps> = (props) => (
    <section>
        <Switch {...props} />
        <div className="jkl-layout-spacing--large-top">
            <Slider {...props} />
        </div>
    </section>
);

export default Example;
