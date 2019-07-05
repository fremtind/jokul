// @ts-ignore
import CoreToggle from "@nrk/core-toggle/jsx";
import React, { useEffect, useState } from "react";

interface Props {
    label: string;
    items: string[];
    className?: string;
    initialInputValue?: string;
}

interface CoreToggleSelectEvent {
    detail: { textContent: string };
    target: { hidden: boolean; button: HTMLButtonElement; value: { textContent: string } };
}

export const Dropdown = ({ items, initialInputValue, label }: Props) => {
    const [selectedValue, setSelectedValue] = useState(initialInputValue);

    useEffect(() => {
        setSelectedValue(initialInputValue);
    }, [initialInputValue]);
    const [hidden, setHidden] = useState(true);
    const hasSelectedValue = typeof selectedValue !== "undefined";

    let className = `jkl-dropdown`;

    if (!hidden) {
        className = `${className} jkl-dropdown--open`;
    }

    if (!hasSelectedValue) {
        className = `${className} jkl-dropdown--no-value`;
    }
    return (
        <div className={className}>
            <span className={`jkl-dropdown__label ${hasSelectedValue ? "jkl-dropdown__label--hover" : ""}`}>
                {label}
            </span>
            <button className="jkl-dropdown__value">{hasSelectedValue ? selectedValue : "Velg"} </button>
            <CoreToggle
                className="jkl-dropdown__core-toggle"
                popup={label}
                hidden={hidden}
                onToggle={() => setHidden(!hidden)}
                onToggleSelect={(e: CoreToggleSelectEvent) => {
                    e.target.hidden = true;
                    e.target.button.focus();
                    e.target.value = e.detail;
                    setSelectedValue(e.detail.textContent);
                }}
            >
                <ul className="jkl-dropdown__option-wrapper">
                    {items.map((item) => {
                        return (
                            <li key={item}>
                                <button className="jkl-dropdown__option">{item}</button>
                            </li>
                        );
                    })}
                </ul>
            </CoreToggle>

            <svg aria-hidden={"true"} className="jkl-dropdown__arrow" viewBox="0 0 100 100">
                <polyline points="20,33 50,66 80,33" stroke="black" strokeWidth="3" fill="none" />
            </svg>
        </div>
    );
};
