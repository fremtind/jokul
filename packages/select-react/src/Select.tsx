// @ts-ignore: wait for core-components to expose types
import CoreToggle from "@nrk/core-toggle/jsx";
import React, { FocusEvent, useRef, useState } from "react";
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
    searchable?: boolean;
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
    searchable = false,
    inline = false,
    defaultPrompt = "Velg",
    variant,
    forceCompact,
    inverted,
    width,
    ...selectProps
}: Props) {
    const [searchValue, setSearchValue] = useState("");
    const hasSelectedValue = typeof value !== "undefined" && value !== "";

    const visibleItems = items.map(getValuePair).map((item) => {
        const visible =
            !searchable || searchValue === "" || item.label.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
        return { ...item, visible };
    });
    const selectedValueLabel = visibleItems.find((item) => item.value === value)?.label || defaultPrompt;

    const searchRef = useRef<HTMLInputElement>(null);
    const componentRootElementRef = useRef<HTMLDivElement>(null);
    const focusInsideRef = useRef(false);
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
        if (opening && !searchable) {
            const listElement = listRef.current;
            listElement && focusSelected(listElement, listId, value);
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
        onChange && onChange(nextValue);
        e.target.hidden = true;
        e.target.button.focus();
    }

    function handleBlur(e: FocusEvent<HTMLButtonElement | HTMLInputElement>) {
        const componentRootElement = componentRootElementRef.current;
        // There are known issues in Firefox when using "relatedTarget" in onBlur events:
        // https://github.com/facebook/react/issues/2011
        // This might be fixed in react 17. Se issue above.
        const nextFocusIsInsideComponent =
            componentRootElement && componentRootElement.contains(e.relatedTarget as Node);
        if (!nextFocusIsInsideComponent && onBlur) {
            onBlur(value);
            focusInsideRef.current = false;
        }
    }

    function handleFocus() {
        if (onFocus && !focusInsideRef.current) {
            onFocus(value);
            focusInsideRef.current = true;
        }
    }

    const [elementRef] = useAnimatedHeight(dropdownIsShown);
    const showSearchInputField = searchable && dropdownIsShown;
    const searchInputId = `${listId}_search-input`;
    return (
        <div data-testid="jkl-select" className={componentClassName} ref={componentRootElementRef} {...selectProps}>
            <Label
                standAlone={searchable} // Use <label> as the element when searchAble=true for accessibility
                htmlFor={searchable ? searchInputId : undefined}
                variant={variant}
                forceCompact={forceCompact}
                srOnly={inline}
            >
                {label}
            </Label>
            <div className="jkl-select__outer-wrapper" style={{ width }}>
                {searchable && (
                    <input
                        id={searchInputId}
                        hidden={!showSearchInputField}
                        ref={searchRef}
                        placeholder="Søk"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        className="jkl-select__search-input"
                        onBlur={handleBlur}
                        onFocus={handleFocus}
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
                    {selectedValueLabel}
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
                    aria-activedescendant={hasSelectedValue && `${listId}__${toLower(value)}`}
                >
                    <ul
                        className="jkl-select__option-wrapper"
                        data-testid="jkl-select__option-wrapper"
                        tabIndex={-1}
                        ref={listRef}
                    >
                        {visibleItems.map((item, i) => (
                            <li key={item.value} hidden={!item.visible}>
                                <button
                                    type="button"
                                    id={`${listId}__${toLower(item.value)}`}
                                    className="jkl-select__option"
                                    data-testid="jkl-select__option"
                                    aria-selected={item.value === value}
                                    role="option"
                                    value={item.value}
                                    data-testautoid={`jkl-select__option-${i}`}
                                    onBlur={handleBlur}
                                    onFocus={handleFocus}
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
