import React, { useState, useRef, VFC } from "react";
import { useFocusOutside } from "../src/useFocusOutside";

const FocusOutsideExample: VFC = () => {
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
            <p className="jkl-body jkl-spacing--bottom-1">
                Fokuser på et element utenfor kortet for å øke telleren. Når du flytter fokus tilbake vil ikke telleren
                øke.
            </p>
            <div ref={ref} className="jkl-card focus-outside-example__card jkl-spacing--top-1">
                Antall fokus utenfor: <strong>{focusCounter}</strong>
                <br />
                <button className="jkl-button jkl-button--secondary jkl-spacing--right-1" onClick={toggleEnabled}>
                    {isEnabled ? "Deaktiver" : "Aktiver"}
                </button>
                <button className="jkl-button jkl-button--tertiary" onClick={resetFocusCounter}>
                    Nullstill teller
                </button>
            </div>
            <button className="jkl-button jkl-button--secondary jkl-spacing--top-2">Utenfor kortet</button>
        </section>
    );
};

export default FocusOutsideExample;
