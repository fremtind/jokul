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
            appendToClickOutsideList([...(clickOutsideListRef.current || []), "Clicked outside"]);
        }
    };

    useClickOutside(clickOutsideRef, onClickOutside);

    return (
        <section className="jkl-spacing--top-3 jkl-spacing--bottom-3 jkl-body">
            <button
                className="jkl-button jkl-button--primary jkl-spacing--right-2"
                ref={clickOutsideRef}
                onClick={() => setIsEnabled(!isEnabled)}
            >
                {isEnabled ? "Disable" : "Enable"}
            </button>
            <button
                className="jkl-button jkl-button--secondary"
                ref={clickOutsideRef}
                onClick={() => appendToClickOutsideList([])}
            >
                Reset list
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
