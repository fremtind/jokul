// @ts-ignore
import CoreToggle from "@nrk/core-toggle/jsx";
import React, { useState } from "react";
import nanoid from "nanoid";
import { SupportLabel } from "@fremtind/jkl-typography-react";
import { useListNavigation } from "./useListNavigation";

interface Props {
    label: string;
    items: string[];
    inline?: boolean;
    defaultPrompt?: string;
    className?: string;
    initialInputValue?: string;
    onChange?: (value: string) => void;
    helpLabel?: string;
    errorLabel?: string;
    variant?: "secondary" | "small";
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

export function Dropdown({
    items,
    initialInputValue,
    label,
    onChange,
    className,
    helpLabel,
    errorLabel,
    inline = false,
    defaultPrompt = "Velg",
    variant,
}: Props) {
    const [selectedValue, setSelectedValue] = useState(initialInputValue);
    const [dropdownIsShown, setShown] = useState(false);
    const [listId] = useState(`dropdown${nanoid(16)}`);
    const hasSelectedValue = typeof selectedValue !== "undefined";
    const listRef = useListNavigation();
    const componentClassName = "jkl-dropdown"
        .concat(inline ? ` jkl-dropdown--inline` : "")
        .concat(dropdownIsShown ? ` jkl-dropdown--open` : "")
        .concat(!hasSelectedValue ? ` jkl-dropdown--no-value` : "")
        .concat(!!errorLabel ? ` jkl-dropdown--invalid` : "")
        .concat(className ? ` ${className}` : "");
    const labelClassName = "jkl-label".concat(variant ? ` jkl-label--${variant}` : "");

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

    return (
        <div data-testid="jkl-dropdown" className={componentClassName}>
            <span className={labelClassName}>{label}</span>
            <div className="jkl-dropdown__outer-wrapper">
                <button
                    type="button"
                    className="jkl-dropdown__value"
                    data-testid="jkl-dropdown__value"
                    aria-haspopup="listbox"
                >
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
                                    type="button"
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
                <span className="jkl-dropdown__chevron" />
            </div>
            <SupportLabel helpLabel={helpLabel} errorLabel={errorLabel} />
        </div>
    );
}
