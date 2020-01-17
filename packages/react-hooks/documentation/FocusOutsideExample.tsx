import React, { useState, useRef } from "react";
import { useFocusOutside } from "../src/useFocusOutside";

export default function FocusOutsideExample() {
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
        <section className="hooks-example focus-outside-example jkl-spacing--bottom-3">
            <p className="hooks-example__header">Lytter på fokus utenfor kortet under</p>
            <p className="hooks-example__text">
                Fokuser på et element utenfor kortet for å øke telleren. Når du flytter fokus tilbake, vil telleren ikke
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
            <button className="jkl-button jkl-button--secondary hooks-example__spaced-item">Utenfor kortet</button>
        </section>
    );
}
