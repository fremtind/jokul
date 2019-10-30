// @ts-ignore
import CoreToggle from "@nrk/core-toggle/jsx";
import React, { useState } from "react";
import nanoid from "nanoid";
import { Label, SupportLabel } from "@fremtind/jkl-typography-react";
import { LabelVariant, ValuePair, getValuePair } from "@fremtind/jkl-core";
import { useListNavigation } from "./useListNavigation";

interface Props {
    label: string;
    items: Array<string | ValuePair>;
    inline?: boolean;
    defaultPrompt?: string;
    className?: string;
    initialInputValue?: string;
    onChange?: (value: string) => void;
    helpLabel?: string;
    errorLabel?: string;
    variant?: LabelVariant;
    forceCompact?: boolean;
}

interface CoreToggleSelectEvent {
    detail: { textContent: string; value: string };
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
    forceCompact,
}: Props) {
    const [selectedValue, setSelectedValue] = useState(initialInputValue);
    const [displayedValue, setDisplayedValue] = useState(initialInputValue);
    const [dropdownIsShown, setShown] = useState(false);
    const [listId] = useState(`dropdown${nanoid(16)}`);
    const hasSelectedValue = typeof selectedValue !== "undefined";
    const listRef = useListNavigation();
    const componentClassName = "jkl-dropdown".concat(
        inline ? ` jkl-dropdown--inline` : "",
        forceCompact ? ` jkl-dropdown--compact` : "",
        dropdownIsShown ? ` jkl-dropdown--open` : "",
        !hasSelectedValue ? ` jkl-dropdown--no-value` : "",
        !!errorLabel ? ` jkl-dropdown--invalid` : "",
        className ? ` ${className}` : "",
    );

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
        const nextValue = e.detail.value;
        setDisplayedValue(e.detail.textContent);
        setSelectedValue(nextValue);
        onChange && onChange(nextValue || "");
    }

    if (process.env.NODE_ENV !== "production") {
        console.warn(
            "WARNING: The Dropdown component in @fremtind/jkl-dropdown-react has been deprecated. Please use the Select component from @fremtind/jkl-select-react instead.",
        );
    }

    return (
        <div data-testid="jkl-dropdown" className={componentClassName}>
            <Label variant={variant} forceCompact={forceCompact}>
                {label}
            </Label>
            <div className="jkl-dropdown__outer-wrapper">
                <button
                    type="button"
                    className="jkl-dropdown__value"
                    data-testid="jkl-dropdown__value"
                    aria-haspopup="listbox"
                >
                    {hasSelectedValue ? displayedValue : defaultPrompt}
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
                        {items.map(getValuePair).map((item) => (
                            <li key={item.value}>
                                <button
                                    type="button"
                                    id={`${listId}__${lower(item.value)}`}
                                    className="jkl-dropdown__option"
                                    data-testid="jkl-dropdown__option"
                                    aria-selected={item.value === selectedValue}
                                    role="option"
                                    value={item.value}
                                >
                                    {item.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </CoreToggle>
                <span className="jkl-dropdown__chevron" />
            </div>
            <SupportLabel helpLabel={helpLabel} errorLabel={errorLabel} forceCompact={forceCompact} />
        </div>
    );
}
