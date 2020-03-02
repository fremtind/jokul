import React, { useState } from "react";
import { ToggleSwitch } from "../src";
import "@fremtind/jkl-core/core.min.css";
import "@fremtind/jkl-toggle-switch/toggle-switch.min.css";

interface Props {
    boolValues: { [key: string]: boolean };
}

const Example: React.FC<Props> = ({ boolValues }) => {
    const [isOn, setIsOn] = useState(false);
    const helpLabel = boolValues["Med hjelpetekst"] ? "Du må være koblet til wifi for å velge dette" : undefined;
    return (
        <ToggleSwitch
            pressed={isOn}
            onClick={() => setIsOn(!isOn)}
            inverted={boolValues["Invertert"]}
            disabled={boolValues["Deaktivert"]}
            helpLabel={helpLabel}
        >
            Send inn data om min kjørestil
        </ToggleSwitch>
    );
};

export default Example;
