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
        <section ref={clickOutsideRef} className="jkl-spacing--top-3 jkl-spacing--bottom-3 jkl-body jkl-click-outside">
            <p>Klikk utenfor dette området</p>
            <button
                className="jkl-button jkl-button--primary jkl-spacing--right-2"
                onClick={() => setIsEnabled(!isEnabled)}
            >
                {isEnabled ? "Skru av" : "Skru på"}
            </button>
            <button className="jkl-button jkl-button--secondary" onClick={() => appendToClickOutsideList([])}>
                Reset liste
            </button>
            <ul className="jkl-list">
                {listOfClicksOutside.map((item, idx) => (
                    <li className="jkl-list--item" key={idx}>
                        {item}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default ClickOutsideExample;
