import React, { useState, useRef } from "react";
import { useClickOutside } from "../src";

const ClickOutsideExample = () => {
    const [listOfClicksOutside, appendToClickOutsideList] = useState<string[]>([]);
    const [isEnabled, setIsEnabled] = useState(false);

    const clickOutsideRef = useRef(null);
    const clickOutsideListRef = useRef<string[]>();

    clickOutsideListRef.current = listOfClicksOutside;
    const onClickOutside = () => {
        if (isEnabled) {
            appendToClickOutsideList([...(clickOutsideListRef.current || []), "Klikk utenfor"]);
        }
    };

    useClickOutside(clickOutsideRef, onClickOutside);

    return (
        <section ref={clickOutsideRef} className="hooks-example jkl-spacing--bottom-3 jkl-body jkl-click-outside">
            <p className="hooks-example__header">Lytter på klikk utenfor dette området</p>
            <p className="hooks-example__text">
                Klikk utenfor eksempelet for å se klikket listet opp under. Klikk inne i eksempelet vil ikke listes opp
            </p>
            <button
                className="jkl-button jkl-button--secondary jkl-spacing--right-1"
                onClick={() => setIsEnabled(!isEnabled)}
            >
                {isEnabled ? "Skru av" : "Skru på"}
            </button>
            <button className="jkl-button jkl-button--tertiary" onClick={() => appendToClickOutsideList([])}>
                Nullstill liste
            </button>
            {listOfClicksOutside.length !== 0 && (
                <ul className="jkl-list hooks-example__list">
                    {listOfClicksOutside.map((item, idx) => (
                        <li className="jkl-list--item" key={idx}>
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
};

export default ClickOutsideExample;
