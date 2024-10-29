import React, { useState, useRef, FC } from "react";
import { useKeyListener } from "../src/useKeyListener";

const KeyListenerExample: FC = () => {
    const [pressedKeys, setPressedKeys] = useState<string[]>([]);
    const keys = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
    const ref = useRef(null);
    const [active, setActive] = useState(false);
    const toggleActive = () => setActive(!active);

    function onKeyPressInside(event: KeyboardEvent) {
        if (active) {
            setPressedKeys([...pressedKeys, event.key]);
        }
    }
    const resetList = () => setPressedKeys([]);
    useKeyListener(ref, keys, onKeyPressInside);

    return (
        <section>
            <p className="jkl-body jkl-spacing-l--bottom">
                Flytt fokus til aktiver-knappen under med Tab eller ved å trykke
                på den. Trykk på piltastene vil nå listes opp under. Klikk
                utenfor knappen, eller flytt fokus med Tab, for å se at
                tastetrykkene ikke lenger registreres.
            </p>
            <button
                ref={ref}
                className="jkl-button jkl-button--secondary jkl-spacing-l--right"
                onClick={toggleActive}
            >
                {active ? "Deaktiver" : "Aktiver"}
            </button>
            <button
                className="jkl-button jkl-button--tertiary"
                onClick={resetList}
            >
                Nullstill liste
            </button>
            {pressedKeys.length !== 0 && (
                <ul className="jkl-list jkl-list--unordered jkl-body">
                    {pressedKeys.map((key, i) => (
                        <li key={i} className="jkl-list__item">
                            {key}
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
};

export default KeyListenerExample;
