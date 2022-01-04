// @ts-ignore: wait for core-components to expose types
import CoreToggle from "@nrk/core-toggle/jsx";
import React, { FocusEvent, forwardRef, useEffect, useRef, useState, KeyboardEvent, ChangeEvent } from "react";
import { nanoid } from "nanoid";
import { Label, LabelVariant, SupportLabel, ValuePair, getValuePair, DataTestAutoId } from "@fremtind/jkl-core";
import { useAnimatedHeight } from "@fremtind/jkl-react-hooks";
import { useListNavigation } from "./useListNavigation";
import classNames from "classnames";
import { ExpandArrow } from "./ExpandArrow";

interface PartialChangeEvent extends Partial<Omit<ChangeEvent<HTMLSelectElement>, "target">> {
    /** Kreves av react-hook-form, det skjer ulike ting avhengig av om det er blur eller change */
    type: "change" | "blur";
    target: {
        /** Kreves av react-hook-form for å vite hvilket skjemafelt som ble endret */
        name: string;
        value: string;
    };
}

type ChangeEventHandler = (event: PartialChangeEvent) => void;

export interface SelectProps extends DataTestAutoId {
    id?: string;
    name: string;
    label: string;
    items: Array<string | ValuePair>;
    /**
     * @default false
     */
    inline?: boolean;
    /**
     * @default "Velg"
     */
    defaultPrompt?: string;
    className?: string;
    value?: string;
    helpLabel?: string;
    errorLabel?: string;
    variant?: LabelVariant;
    /**
     * @default false
     */
    searchable?: boolean;
    forceCompact?: boolean;
    width?: string;
    onChange?: ChangeEventHandler;
    onBlur?: ChangeEventHandler;
    onFocus?: ChangeEventHandler;
}

interface CoreToggleSelectTarget extends EventTarget {
    hidden: boolean;
    button: HTMLButtonElement;
    value: { textContent: string };
}

interface CoreToggleSelectEvent extends Event {
    detail: { textContent: string; value: string };
    target: CoreToggleSelectTarget;
}

function toLower(str = "") {
    return str.toLowerCase().replace(/[\W_]+/g, ""); // strip all non-alphanumeric chars
}

function toItemLabel(value: string | undefined, items: Array<string | ValuePair>): string {
    if (!value) {
        return "";
    }
    const item = items.find((i) => (typeof i === "string" ? i === value : i.value === value));
    if (!item) {
        return value;
    }
    return typeof item === "string" ? item : item.label;
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

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
    (
        {
            id,
            name,
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
            width,
            ...rest
        },
        ref,
    ) => {
        const [searchValue, setSearchValue] = useState("");
        const [selectedValue, setSelectedValue] = useState(value);
        const hasSelectedValue = typeof selectedValue !== "undefined" && selectedValue !== "";

        const visibleItems = items.map(getValuePair).map((item) => {
            const visible =
                !searchable || searchValue === "" || item.label.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
            return { ...item, visible };
        });
        const selectedValueLabel = visibleItems.find((item) => item.value === selectedValue)?.label || defaultPrompt;

        const focusInsideRef = useRef(false);
        const [dropdownIsShown, setShown] = useState(false);
        const [listId] = useState(id || `jkl-select-${nanoid(8)}`);
        const searchInputId = `${listId}_search-input`;
        const showSearchInputField = searchable && dropdownIsShown;

        // Element references:
        const componentRootElementRef = useRef<HTMLDivElement>(null);
        const internalSelectRef = useRef<HTMLSelectElement>(null);
        const selectRef = ref && typeof ref !== "function" ? ref : internalSelectRef;
        const buttonRef = useRef<HTMLButtonElement>(null);
        const searchFieldRef = useRef<HTMLInputElement>(null);
        const [dropdownRef] = useAnimatedHeight(dropdownIsShown);
        const listRef = useListNavigation();

        const componentClassName = classNames("jkl-select", className, {
            "jkl-select--inline": inline,
            "jkl-select--compact": forceCompact,
            "jkl-select--open": dropdownIsShown,
            "jkl-select--no-value": !hasSelectedValue,
            "jkl-select--invalid": !!errorLabel,
        });

        function onToggle(e: CoreToggleSelectEvent) {
            e.preventDefault();
            const opening = !dropdownIsShown;
            setShown(!dropdownIsShown);
            if (opening && !searchable) {
                const listElement = listRef.current;
                listElement && focusSelected(listElement, listId, selectedValue);
            } else if (opening) {
                if (searchFieldRef.current) {
                    searchFieldRef.current.focus();
                }
            }
        }

        function onToggleSelect(e: CoreToggleSelectEvent) {
            e.preventDefault();
            const nextValue = e.detail.value;
            setSearchValue("");
            setSelectedValue(nextValue);
            onChange && onChange({ type: "change", target: { name: name, value: nextValue } });
            e.target.value = e.detail;
            selectRef.current && selectRef.current.dispatchEvent(new Event("change", { bubbles: true }));
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
                onBlur({ type: "blur", target: { name: name, value: selectedValue || "" } });
                selectRef.current && selectRef.current.dispatchEvent(new Event("focusout", { bubbles: true }));
                focusInsideRef.current = false;
            }
        }

        function handleFocus() {
            if (onFocus && !focusInsideRef.current) {
                onFocus({ type: "change", target: { name: name, value: selectedValue || "" } });
                focusInsideRef.current = true;
            }
        }

        // add support for opening dropdown with arrowkey down as expected from native select
        function handleArrowDown(e: KeyboardEvent<HTMLButtonElement>) {
            e.preventDefault();
            if (e.key === "ArrowDown" && !dropdownIsShown) {
                e.stopPropagation();
                buttonRef.current?.click();
            }
        }

        // Handle focus and blur of hidden select element
        useEffect(() => {
            const select = selectRef.current;
            const searchField = searchFieldRef.current;
            const button = buttonRef.current;
            const componentRootElement = componentRootElementRef.current;

            select && typeof ref === "function" && ref(select);
            select?.addEventListener("focus", () => {
                showSearchInputField ? searchField?.focus() : button?.focus();
            });
            select?.addEventListener("blur", function (this, ev) {
                componentRootElement && componentRootElement.contains(ev.relatedTarget as Node) && ev.preventDefault();
            });

            return () => {
                select?.removeEventListener("focus", () => {
                    showSearchInputField ? searchField?.focus() : button?.focus();
                });
                select?.removeEventListener("blur", function (this, ev) {
                    componentRootElement &&
                        componentRootElement.contains(ev.relatedTarget as Node) &&
                        ev.preventDefault();
                });
            };
        }, [ref, selectRef, showSearchInputField]);

        return (
            <div data-testid="jkl-select" className={componentClassName} ref={componentRootElementRef} {...rest}>
                <Label
                    standAlone={searchable} // Use <label> as the element when searchAble=true for accessibility
                    htmlFor={searchable ? searchInputId : undefined}
                    variant={variant}
                    forceCompact={forceCompact}
                    srOnly={inline}
                >
                    {label}
                </Label>
                <select
                    name={name}
                    tabIndex={-1}
                    className="jkl-sr-only"
                    aria-hidden
                    ref={selectRef}
                    defaultValue={selectedValue}
                >
                    <option value={selectedValue}>{toItemLabel(selectedValue, items)}</option>
                </select>
                <div className="jkl-select__outer-wrapper" style={{ width }}>
                    {searchable && (
                        <input
                            id={searchInputId}
                            hidden={!showSearchInputField}
                            ref={searchFieldRef}
                            placeholder="Søk"
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            data-testid="jkl-select__search-input"
                            className="jkl-select__search-input"
                            onBlur={handleBlur}
                            onFocus={handleFocus}
                        />
                    )}
                    <button
                        ref={buttonRef}
                        hidden={showSearchInputField}
                        type="button"
                        name={`${name}-btn`}
                        className="jkl-select__button"
                        data-testid="jkl-select__button"
                        aria-haspopup="listbox"
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                        onKeyUp={handleArrowDown}
                    >
                        {selectedValueLabel}
                    </button>
                    <CoreToggle
                        id={listId}
                        ref={dropdownRef}
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
                            {visibleItems.map((item, i) => (
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
                                        onBlur={handleBlur}
                                        onFocus={handleFocus}
                                    >
                                        <span className="jkl-select__option-label">{item.label}</span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </CoreToggle>
                    <ExpandArrow className="jkl-select__arrow" expanded={dropdownIsShown} />
                </div>
                <SupportLabel helpLabel={helpLabel} errorLabel={errorLabel} forceCompact={forceCompact} />
            </div>
        );
    },
);
Select.displayName = "Select";
