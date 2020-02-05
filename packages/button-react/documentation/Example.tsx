import React, { useState } from "react";
import { PrimaryButton, SecondaryButton, TertiaryButton } from "../src";
import { ToggleSwitch } from "@fremtind/jkl-toggle-switch-react";
import "@fremtind/jkl-toggle-switch/toggle-switch.css";
import "@fremtind/jkl-button/button.css";
import "@fremtind/jkl-core/core.css";
import "./index.scss";
import classNames from "classnames";

function onClick() {
    console.log("Hello!");
}

const Example = () => {
    const [isCompact, setCompact] = useState(false);
    const toggleCompact = () => setCompact(!isCompact);
    const [isInverted, setIsInverted] = useState(false);
    const toggleInverted = () => setIsInverted(!isInverted);

    const exampleClassName = classNames("buttons-example jkl-spacing--top-3 jkl-spacing--bottom-3", {
        "buttons-example--inverted": isInverted,
    });

    return (
        <section className={exampleClassName}>
            <aside className="buttons-example__controls">
                <ToggleSwitch pressed={isCompact} onClick={toggleCompact} className="jkl-spacing--bottom-1">
                    Kompakt variant
                </ToggleSwitch>
                <ToggleSwitch pressed={isInverted} onClick={toggleInverted}>
                    Inverterte farger
                </ToggleSwitch>
            </aside>
            <PrimaryButton
                forceCompact={isCompact}
                inverted={isInverted}
                onClick={onClick}
                className="portal-example-button"
            >
                PrimaryButton
            </PrimaryButton>
            <SecondaryButton
                forceCompact={isCompact}
                inverted={isInverted}
                onClick={onClick}
                className="portal-example-button"
            >
                SecondaryButton
            </SecondaryButton>
            <TertiaryButton
                forceCompact={isCompact}
                inverted={isInverted}
                onClick={onClick}
                className="portal-example-button"
            >
                TertiaryButton
            </TertiaryButton>
        </section>
    );
};

export default Example;
