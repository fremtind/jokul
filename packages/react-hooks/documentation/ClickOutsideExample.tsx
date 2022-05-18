import React, { useState, useRef, FC } from "react";
import { useClickOutside } from "../src";

const ClickOutsideExample: FC = () => {
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
        <section ref={clickOutsideRef}>
            <p className="jkl-body jkl-spacing-l--bottom">
                Klikk utenfor eksempelet for å se klikket listet opp under. Klikk inne i eksempelet vil ikke listes opp
            </p>
            <button
                className="jkl-button jkl-button--secondary jkl-spacing-l--left"
                onClick={() => setIsEnabled(!isEnabled)}
            >
                {isEnabled ? "Skru av" : "Skru på"}
            </button>
            <button className="jkl-button jkl-button--tertiary" onClick={() => appendToClickOutsideList([])}>
                Nullstill liste
            </button>
            {listOfClicksOutside.length !== 0 && (
                <ul className="jkl-list jkl-list--unordered jkl-body">
                    {listOfClicksOutside.map((item, idx) => (
                        <li className="jkl-list__item" key={idx}>
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
};

export default ClickOutsideExample;
