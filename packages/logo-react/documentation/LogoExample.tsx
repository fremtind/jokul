import React, { useState } from "react";
import { FieldGroup } from "@fremtind/jkl-field-group-react";
import { ToggleSwitch } from "@fremtind/jkl-toggle-switch-react";
import { Logo } from "../src";
import "@fremtind/jkl-logo/logo.css";

export const LogoExample = () => {
    const [symbol, setSymbol] = useState(false);
    const [animated, setAnimated] = useState(false);
    const [centered, setCentered] = useState(false);

    return (
        <div style={{ display: "flex", alignItems: "center" }} className="jkl-spacing--bottom-3">
            <FieldGroup legend="Innstillinger" className="jkl-spacing--right-4">
                <ToggleSwitch className="jkl-spacing--bottom-1" pressed={symbol} onClick={() => setSymbol(!symbol)}>
                    Logosymbol
                </ToggleSwitch>
                <ToggleSwitch
                    className="jkl-spacing--bottom-1"
                    pressed={animated}
                    onClick={() => setAnimated(!animated)}
                >
                    Animert
                </ToggleSwitch>
                <ToggleSwitch pressed={centered} onClick={() => setCentered(!centered)}>
                    Sentrert
                </ToggleSwitch>
            </FieldGroup>
            <div style={{ width: "300px" }}>
                <Logo animated={animated} isSymbol={symbol} centered={centered} />
            </div>
        </div>
    );
};
