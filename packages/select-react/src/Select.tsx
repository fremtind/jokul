// @ts-ignore: wait for core-components to expose types
import CoreToggle from "@nrk/core-toggle/jsx";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { nanoid } from "nanoid";
import { Label, LabelVariant, SupportLabel, ValuePair, getValuePair, DataTestAutoId } from "@fremtind/jkl-core";
import { useAnimatedHeight } from "@fremtind/jkl-react-hooks";
import { useListNavigation } from "./useListNavigation";
import classNames from "classnames";

import { ExpandArrow } from "./ExpandArrow";

type SelectEventHandler = (value?: string) => void;

interface Props extends DataTestAutoId {
    id?: string;
    label: string;
    items: Array<string | ValuePair>;
    inline?: boolean;
    defaultPrompt?: string;
    className?: string;
    value?: string;
    helpLabel?: string;
    errorLabel?: string;
    variant?: LabelVariant;
    searchAble?: boolean;
    forceCompact?: boolean;
    inverted?: boolean;
    width?: string;
    onChange?: SelectEventHandler;
    onBlur?: SelectEventHandler;
    onFocus?: SelectEventHandler;
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
    id,
    items,
    value,
    label,
    onChange,
    onBlur,
    onFocus,
    className,
    helpLabel,
    errorLabel,
    searchAble = false,
    inline = false,
    defaultPrompt = "Velg",
    variant,
    forceCompact,
    inverted,
    width,
    ...selectProps
}: Props) {
    const [selectedValue, setSelectedValue] = useState(value);
    const [internalFocus, setInternalFocus] = useState(false);
    const [searchValue, setSearchValue] = useState(selectedValue || "");
    const hasSelectedValue = typeof selectedValue !== "undefined" && selectedValue !== "";

    const itemsWithVisibility = items.map(getValuePair).map((item) => {
        const visible =
            !searchAble || searchValue === "" || item.label.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
        return { ...item, visible: visible };
    });

    const getLabelFromValue = useCallback(
        (value: string | undefined) => {
            const matchingItem = itemsWithVisibility.filter((item) => item.value === value)[0];
            return matchingItem && matchingItem.label;
        },
        [itemsWithVisibility],
    );
    const [displayedValue, setDisplayedValue] = useState(getLabelFromValue(value));
    const searchRef = useRef<HTMLInputElement>(null);
    const [dropdownIsShown, setShown] = useState(false);
    const [listId] = useState(id || `jkl-select-${nanoid(8)}`);
    const listRef = useListNavigation();
    const componentClassName = classNames("jkl-select", className, {
        "jkl-select--inline": inline,
        "jkl-select--compact": forceCompact,
        "jkl-select--inverted": inverted,
        "jkl-select--open": dropdownIsShown,
        "jkl-select--no-value": !hasSelectedValue,
        "jkl-select--invalid": !!errorLabel,
    });

    function onToggle() {
        const opening = !dropdownIsShown;
        setShown(!dropdownIsShown);
        if (opening && !searchAble) {
            const listElement = listRef.current;
            listElement && focusSelected(listElement, listId, selectedValue);
        } else if (opening) {
            if (searchRef.current) {
                searchRef.current.focus();
            }
        }
    }

    function onToggleSelect(e: CoreToggleSelectEvent) {
        e.target.value = e.detail;
        const nextValue = e.detail.value;
        setSearchValue("");
        setDisplayedValue(e.detail.textContent);
        setSelectedValue(nextValue);
        onChange && onChange(nextValue);
        e.target.hidden = true;
        setInternalFocus(true);
        e.target.button.focus();
    }

    function handleBlur() {
        if (!dropdownIsShown && onBlur) {
            onBlur(value);
        }
    }

    function handleFocus() {
        if (onFocus && !internalFocus) {
            onFocus(value);
        }
        setInternalFocus(false);
    }

    useEffect(() => {
        setSelectedValue(value);
        setDisplayedValue(getLabelFromValue(value));
    }, [value, itemsWithVisibility, getLabelFromValue]);

    const [elementRef] = useAnimatedHeight(dropdownIsShown);
    const showSearchInputField = searchAble && dropdownIsShown;
    const searchInputId = `${listId}_search-input`;
    return (
        <div data-testid="jkl-select" className={componentClassName} style={{ width }} {...selectProps}>
            <Label
                standAlone={searchAble} // Use <label> as the element when searchAble=true for accessibility
                htmlFor={searchAble ? searchInputId : undefined}
                variant={variant}
                forceCompact={forceCompact}
                srOnly={inline}
            >
                {label}
            </Label>
            <div className="jkl-select__outer-wrapper">
                {searchAble && (
                    <input
                        id={searchInputId}
                        hidden={!showSearchInputField}
                        aria-autocomplete="list"
                        ref={searchRef}
                        placeholder={"Søk"}
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        className="jkl-select__search-input"
                    />
                )}
                <button
                    hidden={showSearchInputField}
                    type="button"
                    className="jkl-select__button"
                    data-testid="jkl-select__button"
                    aria-haspopup="listbox"
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                >
                    {hasSelectedValue ? displayedValue : defaultPrompt}
                </button>
                <CoreToggle
                    id={listId}
                    ref={elementRef}
                    role="listbox"
                    className="jkl-select__options-menu"
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
                        {itemsWithVisibility.map((item, i) => (
                            <li key={item.value} hidden={!item.visible}>
                                <button
                                    type="button"
                                    id={`${listId}__${toLower(item.value)}`}
                                    className="jkl-select__option"
                                    data-testid="jkl-select__option"
                                    aria-selected={item.value === selectedValue}
                                    role="option"
                                    value={item.value}
                                    data-testautoid={`jkl-select__option-${i}`}
                                >
                                    {item.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </CoreToggle>
                <ExpandArrow className="jkl-select__arrow" expanded={dropdownIsShown} />
            </div>
            <SupportLabel
                inverted={inverted}
                helpLabel={helpLabel}
                errorLabel={errorLabel}
                forceCompact={forceCompact}
            />
        </div>
    );
}
