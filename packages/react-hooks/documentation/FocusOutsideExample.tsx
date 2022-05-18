import React, { useState, useRef, FC } from "react";
import { useFocusOutside } from "../src/useFocusOutside";

const FocusOutsideExample: FC = () => {
    const [focusCounter, setFocusCounter] = useState(0);
    const [isEnabled, setIsEnabled] = useState(false);
    const ref = useRef(null);
    const resetFocusCounter = () => setFocusCounter(0);
    const toggleEnabled = () => setIsEnabled(!isEnabled);

    useFocusOutside(ref, () => {
        if (isEnabled) {
            setFocusCounter(focusCounter + 1);
        }
    });

    return (
        <section>
            <p className="jkl-body jkl-spacing-l--bottom">
                Fokuser på et element utenfor kortet for å øke telleren. Når du flytter fokus tilbake vil ikke telleren
                øke.
            </p>
            <div ref={ref} className="jkl-card focus-outside-example__card jkl-spacing-l--top">
                Antall fokus utenfor: <strong>{focusCounter}</strong>
                <br />
                <button className="jkl-button jkl-button--secondary jkl-spacing-l--left" onClick={toggleEnabled}>
                    {isEnabled ? "Deaktiver" : "Aktiver"}
                </button>
                <button className="jkl-button jkl-button--tertiary" onClick={resetFocusCounter}>
                    Nullstill teller
                </button>
            </div>
            <button className="jkl-button jkl-button--secondary jkl-spacing-xl--top">Utenfor kortet</button>
        </section>
    );
};

export default FocusOutsideExample;
