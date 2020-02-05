// @ts-ignore
import CoreToggle from "@nrk/core-toggle/jsx";
import React, { useState, useEffect } from "react";
import nanoid from "nanoid";
import { Label, SupportLabel } from "@fremtind/jkl-typography-react";
import { LabelVariant, ValuePair, getValuePair } from "@fremtind/jkl-core";
import { useAnimatedHeight } from "@fremtind/jkl-react-hooks";
import { useListNavigation } from "./useListNavigation";
import classNames from "classnames";

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
    label,
    onChange,
    className,
    helpLabel,
    errorLabel,
    inline = false,
    defaultPrompt = "Velg",
    variant,
    forceCompact,
    initialInputValue,
}: Props) {
    const [selectedValue, setSelectedValue] = useState(value);
    const hasSelectedValue = typeof selectedValue !== "undefined" && selectedValue !== "";

    function getLabelFromValue(value: string | undefined) {
        const matchingItem = items.map(getValuePair).filter((item) => item.value === value)[0];
        return matchingItem && matchingItem.label;
    }
    const [displayedValue, setDisplayedValue] = useState(getLabelFromValue(value));

    const [dropdownIsShown, setShown] = useState(false);
    const [listId] = useState(`dropdown${nanoid(16)}`);
    const listRef = useListNavigation();
    const componentClassName = classNames("jkl-select", className, {
        "jkl-select--inline": inline,
        "jkl-select--compact": forceCompact,
        "jkl-select--open": dropdownIsShown,
        "jkl-select--no-value": !hasSelectedValue,
        "jkl-select--invalid": !!errorLabel,
    });

    if (initialInputValue && process.env.NODE_ENV !== "production") {
        console.warn(
            "Warning!: The 'initialInputValue' prop on the Select component is deprecated and does nothing. Use the 'value' prop instead.",
        );
    }

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
        onChange && onChange(nextValue);
    }

    useEffect(() => {
        setSelectedValue(value);
        setDisplayedValue(getLabelFromValue(value));
    }, [value, items]);

    const [elementRef] = useAnimatedHeight(dropdownIsShown);

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
                    ref={elementRef}
                    role="listbox"
                    className="jkl-select__toggler"
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
