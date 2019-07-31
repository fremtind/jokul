// @ts-ignore
import CoreToggle from "@nrk/core-toggle/jsx";
import React, { useState } from "react";
import nanoid from "nanoid";
import { useListNavigation } from "./useListNavigation";

interface Props {
    label: string;
    items: string[];
    defaultPrompt?: string;
    className?: string;
    initialInputValue?: string;
    onChange?: (value: string) => void;
    initialShow?: boolean;
}

interface CoreToggleSelectEvent {
    detail: { textContent: string };
    target: { hidden: boolean; button: HTMLButtonElement; value: { textContent: string } };
}

function lower(str = "") {
    return str.toLowerCase().replace(/[\W_]+/g, ""); // strip all non-alphanumeric chars
}

function focusSelected(listEl: HTMLElement, listId: string, selected: string | undefined) {
    let focusedItem: HTMLElement | null;
    if (selected !== undefined) {
        // move focus to selected option
        focusedItem = listEl.querySelector(`#${listId}__${lower(selected)}`);
    } else {
        // move focus to first option
        focusedItem = listEl.querySelector('[role="option"]');
    }
    focusedItem && focusedItem.focus();
}

export const Dropdown = ({
    items,
    initialInputValue,
    label,
    onChange,
    className,
    defaultPrompt = "Velg",
    initialShow = false,
}: Props) => {
    const [selectedValue, setSelectedValue] = useState(initialInputValue);
    const [dropdownIsShown, setShown] = useState(initialShow);
    const [listId] = useState(`dropdown${nanoid(16)}`);
    const hasSelectedValue = typeof selectedValue !== "undefined";
    const listRef = useListNavigation();

    function onToggle() {
        const listElement = listRef.current;
        if (listElement && !dropdownIsShown) {
            focusSelected(listElement, listId, selectedValue);
        }
        setShown(!dropdownIsShown);
    }

    function onToggleSelect(e: CoreToggleSelectEvent) {
        e.target.hidden = true;
        e.target.button.focus();
        e.target.value = e.detail;
        setSelectedValue(e.detail.textContent);
        onChange && onChange(e.detail.textContent);
    }

    const classModifiers = `${dropdownIsShown ? " jkl-dropdown--open" : ""}${
        hasSelectedValue ? "" : " jkl-dropdown--no-value"
    }`;
    return (
        <div className={`jkl-dropdown${classModifiers} ${className ? className : ""}`}>
            <span className={`jkl-dropdown__label ${hasSelectedValue ? "jkl-dropdown__label--has-value" : ""}`}>
                {label}
            </span>
            <button className="jkl-dropdown__value" data-testid="jkl-dropdown__value" aria-haspopup="listbox">
                {hasSelectedValue ? selectedValue : defaultPrompt}
            </button>
            <CoreToggle
                id={listId}
                role="listbox"
                className="jkl-dropdown__core-toggle"
                popup={label}
                hidden={!dropdownIsShown}
                onToggle={onToggle}
                onToggleSelect={onToggleSelect}
                aria-activedescendant={hasSelectedValue && `${listId}__${lower(selectedValue)}`}
            >
                <ul
                    className="jkl-dropdown__option-wrapper"
                    data-testid="jkl-dropdown__option-wrapper"
                    tabIndex={-1}
                    ref={listRef}
                >
                    {items.map((item) => (
                        <li key={item}>
                            <button
                                id={`${listId}__${lower(item)}`}
                                className="jkl-dropdown__option"
                                data-testid="jkl-dropdown__option"
                                aria-selected={item === selectedValue}
                                role="option"
                            >
                                {item}
                            </button>
                        </li>
                    ))}
                </ul>
            </CoreToggle>

            <svg aria-hidden={"true"} className="jkl-dropdown__arrow" viewBox="0 0 20 32">
                <polyline points="0,11 10,21 20,11" fill="none" />
            </svg>
        </div>
    );
};
