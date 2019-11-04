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
    value?: string;
    initialInputValue?: string; // Deprecated!
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

function toLower(str = "") {
    return str.toLowerCase().replace(/[\W_]+/g, ""); // strip all non-alphanumeric chars
}

function focusSelected(listEl: HTMLElement, listId: string, selected: string | undefined) {
    let focusedItem: HTMLElement | null;
    if (selected !== undefined) {
        // move focus to selected option
        focusedItem = listEl.querySelector(`#${listId}__${toLower(selected)}`);
    } else {
        // move focus to first option
        focusedItem = listEl.querySelector('[role="option"]');
    }
    focusedItem && focusedItem.focus();
}

export function Select({
    items,
    value,
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
    const [selectedValue, setSelectedValue] = useState(value || initialInputValue);
    const [displayedValue, setDisplayedValue] = useState(value || initialInputValue);
    const [dropdownIsShown, setShown] = useState(false);
    const [listId] = useState(`dropdown${nanoid(16)}`);
    const hasSelectedValue = typeof selectedValue !== "undefined";
    const listRef = useListNavigation();
    const componentClassName = "jkl-select".concat(
        inline ? ` jkl-select--inline` : "",
        forceCompact ? ` jkl-select--compact` : "",
        dropdownIsShown ? ` jkl-select--open` : "",
        !hasSelectedValue ? ` jkl-select--no-value` : "",
        !!errorLabel ? ` jkl-select--invalid` : "",
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
        if (value && onChange) {
            e.target.value = e.detail;
            const nextValue = e.detail.value;
            setDisplayedValue(e.detail.textContent);
            setSelectedValue(nextValue);
            onChange(nextValue || "");
        }
    }

    return (
        <div data-testid="jkl-select" className={componentClassName}>
            <Label variant={variant} forceCompact={forceCompact}>
                {label}
            </Label>
            <div className="jkl-select__outer-wrapper">
                <button
                    type="button"
                    className="jkl-select__value"
                    data-testid="jkl-select__value"
                    aria-haspopup="listbox"
                >
                    {hasSelectedValue ? displayedValue : defaultPrompt}
                </button>
                <CoreToggle
                    id={listId}
                    role="listbox"
                    className="jkl-select__core-toggle"
                    popup={label}
                    hidden={!dropdownIsShown}
                    onToggle={onToggle}
                    onToggleSelect={onToggleSelect}
                    aria-activedescendant={hasSelectedValue && `${listId}__${toLower(selectedValue)}`}
                >
                    <ul
                        className="jkl-select__option-wrapper"
                        data-testid="jkl-select__option-wrapper"
                        tabIndex={-1}
                        ref={listRef}
                    >
                        {items.map(getValuePair).map((item) => (
                            <li key={item.value}>
                                <button
                                    type="button"
                                    id={`${listId}__${toLower(item.value)}`}
                                    className="jkl-select__option"
                                    data-testid="jkl-select__option"
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
                <span className="jkl-select__chevron" />
            </div>
            <SupportLabel helpLabel={helpLabel} errorLabel={errorLabel} forceCompact={forceCompact} />
        </div>
    );
}
