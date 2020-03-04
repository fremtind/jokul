import React, { useState } from "react";
import { ExampleComponentProps } from "@fremtind/jkl-portal-components";
import { ToggleSwitch } from "../src";

const Example: React.FC<ExampleComponentProps> = ({ boolValues }) => {
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

export default Example;
