import React, {
    FocusEvent,
    forwardRef,
    useEffect,
    useRef,
    useState,
    KeyboardEvent,
    ChangeEvent,
    useCallback,
    useMemo,
} from "react";
import {
    Label,
    LabelVariant,
    SupportLabel,
    ValuePair,
    getValuePair,
    DataTestAutoId,
    LabelProps,
} from "@fremtind/jkl-core";
import { useId, useAnimatedHeight } from "@fremtind/jkl-react-hooks";
import { useListNavigation } from "./useListNavigation";
import cn from "classnames";
import { ExpandArrow } from "./ExpandArrow";
import { toLower, toItemLabel, focusSelected } from "./select-utils";

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

interface Option {
    visible: boolean;
    value: string;
    label: string;
}

export interface SelectProps extends DataTestAutoId {
    id?: string;
    name: string;
    label: string;
    labelProps?: Omit<LabelProps, "children" | "forceCompact" | "standAlone">;
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
    /** @deprecated Bruk `labelProps.variant`  */
    variant?: LabelVariant;
    /**
     * @default false
     */
    searchable?: boolean | ((searchValue: string, searchItem: string | ValuePair) => boolean);
    forceCompact?: boolean;
    width?: string;
    onChange?: ChangeEventHandler;
    onBlur?: ChangeEventHandler;
    onFocus?: ChangeEventHandler;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
    (
        {
            id,
            name,
            items,
            value,
            label,
            labelProps,
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
        const listId = useId(id || "jkl-select", { generateSuffix: !id });
        const buttonId = `${listId}_button`;
        const searchInputId = `${listId}_search-input`;

        const isSearchable = !!searchable;
        const [searchValue, setSearchValue] = useState("");
        const searchFn = useCallback(
            (item: ValuePair) => {
                if (item.label.toLowerCase().includes(searchValue.toLowerCase())) {
                    return true;
                }

                if (typeof searchable === "function") {
                    return searchable(searchValue, item);
                }

                return false;
            },
            [searchable, searchValue],
        );
        const visibleItems: Option[] = useMemo(
            () =>
                items.map(getValuePair).map((item) => {
                    const visible = !isSearchable || searchValue === "" || searchFn(item);
                    return { ...item, visible };
                }),
            [items, isSearchable, searchValue, searchFn],
        );

        const [selectedValue, setSelectedValue] = useState(value);
        const hasSelectedValue = typeof selectedValue !== "undefined" && selectedValue !== "";
        const selectedValueLabel = useMemo(
            () => visibleItems.find((item) => item.value === selectedValue)?.label || defaultPrompt,
            [visibleItems, selectedValue, defaultPrompt],
        );

        // Update internal state if value is changed
        useEffect(() => {
            setSelectedValue(value);
        }, [value, setSelectedValue]);

        const [dropdownIsShown, setShown] = useState(false);
        const showSearchInputField = isSearchable && dropdownIsShown;

        // Element references:
        const componentRootElementRef = useRef<HTMLDivElement>(null);
        const internalSelectRef = useRef<HTMLSelectElement>(null);
        const selectRef = ref && typeof ref !== "function" ? ref : internalSelectRef;
        const buttonRef = useRef<HTMLButtonElement>(null);
        const searchFieldRef = useRef<HTMLInputElement>(null);
        const listRef = useListNavigation();

        function toggleListVisibility() {
            setShown(!dropdownIsShown);
        }

        function selectOption(item: Option) {
            const nextValue = item.value;
            setSearchValue("");
            setSelectedValue(nextValue);
            if (onChange) {
                onChange({ type: "change", target: { name: name, value: nextValue } });
            }
            if (selectRef.current) {
                selectRef.current.dispatchEvent(new Event("change", { bubbles: true }));
            }
            toggleListVisibility();
        }

        const focusInsideRef = useRef(false);

        const handleFocusPlacement = useCallback(() => {
            if (dropdownIsShown && !isSearchable) {
                const listElement = listRef.current;
                if (listElement) {
                    focusSelected(listElement, selectedValue);
                }
            } else if (dropdownIsShown) {
                if (searchFieldRef.current) {
                    searchFieldRef.current.focus();
                }
            } else {
                if (focusInsideRef.current && buttonRef.current) {
                    buttonRef.current.focus();
                }
            }
        }, [dropdownIsShown, isSearchable, selectedValue, listRef]);

        const [dropdownRef] = useAnimatedHeight<HTMLDivElement>(dropdownIsShown, {
            onFirstVisible: handleFocusPlacement,
            onTransitionEnd: handleFocusPlacement,
        });

        function handleBlur(e: FocusEvent<HTMLButtonElement | HTMLInputElement>) {
            const componentRootElement = componentRootElementRef.current;
            // There are known issues in Firefox when using "relatedTarget" in onBlur events:
            // https://github.com/facebook/react/issues/2011
            // This might be fixed in react 17. Se issue above.
            const nextFocusIsInsideComponent =
                componentRootElement && componentRootElement.contains(e.relatedTarget as Node);
            if (!nextFocusIsInsideComponent) {
                if (onBlur) {
                    onBlur({ type: "blur", target: { name: name, value: selectedValue || "" } });
                    selectRef.current?.dispatchEvent(new Event("focusout", { bubbles: true }));
                }
                focusInsideRef.current = false;
                setShown(false);
            }
        }

        function handleFocus() {
            if (onFocus && !focusInsideRef.current) {
                onFocus({ type: "change", target: { name: name, value: selectedValue || "" } });
                focusInsideRef.current = true;
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

        // add support for opening dropdown with arrowkey down as expected from native select
        function handleOnKeyDown(e: KeyboardEvent<HTMLButtonElement>) {
            e.preventDefault();
            if ((e.key === "ArrowDown" || e.key === " ") && !dropdownIsShown) {
                e.stopPropagation();
                setShown(true);
            }
            if (e.key === "Escape") {
                setShown(false);
            }
        }

        // Add support for closing the dropdown with Escape like native select. Unfortunately, Escape does not trigger the button onKeyDown.
        useEffect(() => {
            const handleEscape = (e: globalThis.KeyboardEvent) => {
                if (e.key === "Escape" && dropdownIsShown) {
                    setShown(false);
                }
            };
            if (typeof window !== "undefined" && dropdownIsShown) {
                window.addEventListener("keydown", handleEscape);
            }
            return () => {
                if (typeof window !== "undefined") {
                    window.removeEventListener("keydown", handleEscape);
                }
            };
        }, [dropdownIsShown]);

        return (
            <div
                data-testid="jkl-select"
                className={cn("jkl-select", className, {
                    "jkl-select--inline": inline,
                    "jkl-select--compact": forceCompact,
                    "jkl-select--open": dropdownIsShown,
                    "jkl-select--no-value": !hasSelectedValue,
                    "jkl-select--invalid": !!errorLabel,
                })}
                ref={componentRootElementRef}
                {...rest}
            >
                <Label
                    variant={variant}
                    {...labelProps}
                    standAlone={isSearchable} // Use <label> as the element when isSearchable=true for accessibility
                    htmlFor={isSearchable ? searchInputId : labelProps?.htmlFor}
                    srOnly={inline || labelProps?.srOnly}
                    forceCompact={forceCompact}
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
                    {isSearchable && (
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
                            onClick={(e) => {
                                e.stopPropagation();
                            }}
                        />
                    )}
                    <button
                        id={buttonId}
                        ref={buttonRef}
                        hidden={showSearchInputField}
                        type="button"
                        name={`${name}-btn`}
                        className="jkl-select__button"
                        data-testid="jkl-select__button"
                        aria-label={`${selectedValueLabel || "Velg"},${label}`}
                        aria-expanded={dropdownIsShown}
                        aria-controls={listId}
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                        onKeyUp={handleOnKeyDown}
                        onClick={toggleListVisibility}
                        onMouseDown={(e) => {
                            // Workaround for en Safari-bug hvor e.relatedTarget er null i onBlur
                            // https://twitter.com/MilesSorce/status/1278762360669265925
                            e.preventDefault();
                            buttonRef.current?.focus();
                        }}
                    >
                        {selectedValueLabel}
                    </button>
                    <div
                        id={listId}
                        ref={dropdownRef}
                        role="group"
                        className="jkl-select__options-menu"
                        hidden={!dropdownIsShown}
                        aria-activedescendant={hasSelectedValue ? `${listId}__${toLower(selectedValue)}` : undefined}
                        aria-labelledby={buttonId}
                        tabIndex={-1}
                    >
                        <ul
                            className="jkl-select__option-wrapper"
                            data-testid="jkl-select__option-wrapper"
                            ref={listRef}
                        >
                            {visibleItems.map((item, i) => (
                                <li key={`${listId}-${item.value}`} hidden={!item.visible}>
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
                                        onClick={(e) => {
                                            e.preventDefault();
                                            selectOption(item);
                                        }}
                                    >
                                        <span className="jkl-select__option-label">{item.label}</span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <ExpandArrow className="jkl-select__arrow" expanded={dropdownIsShown} />
                </div>
                <SupportLabel helpLabel={helpLabel} errorLabel={errorLabel} forceCompact={forceCompact} />
            </div>
        );
    },
);
Select.displayName = "Select";
