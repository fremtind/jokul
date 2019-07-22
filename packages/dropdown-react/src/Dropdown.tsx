// @ts-ignore
import CoreToggle from "@nrk/core-toggle/jsx";
import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { useListNavigation } from "./useListNavigation";

interface Props {
    label: string;
    items: string[];
    className?: string;
    initialInputValue?: string;
    onChange?: (value: string) => void;
}

interface CoreToggleSelectEvent {
    detail: { textContent: string };
    target: { hidden: boolean; button: HTMLButtonElement; value: { textContent: string } };
}

function lower(value: string | undefined) {
    return value === undefined
        ? ""
        : value
              .toString()
              .toLowerCase()
              .replace(/\s/g, "");
}

function focusSelected(listEl: HTMLElement, listId: string, selected: string | undefined) {
    let focusedItem: HTMLElement | null;
    if (selected !== undefined) {
        focusedItem = listEl.querySelector(`#${listId}__${lower(selected)}`);
    } else {
        focusedItem = listEl.querySelector('[role="option"]');
    }
    focusedItem && focusedItem.focus();
}

export const Dropdown = ({ items, initialInputValue, label, onChange }: Props) => {
    const [selectedValue, setSelectedValue] = useState(initialInputValue);

    useEffect(() => {
        setSelectedValue(initialInputValue);
    }, [initialInputValue]);

    const [listId] = useState("dropdown".concat(uuid().slice(-8)));
    const [hidden, setHidden] = useState(true);
    const hasSelectedValue = typeof selectedValue !== "undefined";
    const listRef = useListNavigation();

    function onToggle() {
        const listElement = listRef.current;
        if (listElement && hidden) {
            focusSelected(listElement, listId, selectedValue);
        }
        setHidden(!hidden);
    }

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
            <button className="jkl-dropdown__value" aria-haspopup="listbox">
                {hasSelectedValue ? selectedValue : "Velg"}
            </button>
            <CoreToggle
                id={listId}
                role="listbox"
                className="jkl-dropdown__core-toggle"
                popup={label}
                hidden={hidden}
                onToggle={onToggle}
                onToggleSelect={(e: CoreToggleSelectEvent) => {
                    e.target.hidden = true;
                    e.target.button.focus();
                    e.target.value = e.detail;
                    setSelectedValue(e.detail.textContent);
                    onChange && onChange(e.detail.textContent);
                }}
                aria-activedescendant={hasSelectedValue && `${listId}__${lower(selectedValue)}`}
            >
                <ul className="jkl-dropdown__option-wrapper" tabIndex={-1} ref={listRef}>
                    {items.map((item) => {
                        return (
                            <li key={item}>
                                <button
                                    id={`${listId}__${lower(item)}`}
                                    className="jkl-dropdown__option"
                                    aria-selected={item === selectedValue}
                                    role="option"
                                >
                                    {item}
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </CoreToggle>

            <svg aria-hidden={"true"} className="jkl-dropdown__arrow" viewBox="0 0 20 32">
                <polyline points="0,11 10,21 20,11" fill="none" />
            </svg>
        </div>
    );
};
