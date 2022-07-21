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
import cn from "classnames";
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
    RefObject,
} from "react";
import { ExpandArrow } from "./ExpandArrow";
import { toLower, focusSelected } from "./select-utils";
import { useListNavigation } from "./useListNavigation";

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
    /**
     * Merk som ugyldig uten å sende inn en errorLabel.
     * NB! Brukes kun i tilfeller der valideringsfeil dukker opp andre steder, for eksempel i en FieldGroup.
     */
    invalid?: boolean;
}

const noop = () => {
    return;
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>((props, forwardedSelectRef) => {
    const {
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
        invalid,
        searchable = false,
        inline = false,
        defaultPrompt = "Velg",
        variant,
        forceCompact,
        width,
        ...rest
    } = props;

    const listId = useId(id || "jkl-select", { generateSuffix: !id });
    const buttonId = `${listId}_button`;
    const searchInputId = `${listId}_search-input`;
    const supportId = `${listId}_support-label`;
    const hasSupportText = helpLabel || errorLabel;
    const describedBy = hasSupportText ? supportId : undefined;

    const [dropdownIsShown, setShown] = useState(false);
    const toggleListVisibility = useCallback(() => {
        setShown((previousValue) => !previousValue);
    }, []);

    /// Søk

    const isSearchable = Boolean(searchable);
    const showSearchInputField = isSearchable && dropdownIsShown;
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

    /// Valg av <option>

    const [selectedValue, setSelectedValue] = useState<string>(value || "");
    const hasSelectedValue = typeof selectedValue !== "undefined" && selectedValue !== "";
    const selectedValueLabel = useMemo(
        () => visibleItems.find((item) => item.value === selectedValue)?.label || defaultPrompt,
        [visibleItems, selectedValue, defaultPrompt],
    );

    const selectRef = useRef<HTMLSelectElement | null>(null);
    // Hjelpefunksjon som gjør det enklere å forwarde refen og å bruke den selv internt
    const unifiedSelectRef = useCallback(
        (instance: HTMLSelectElement | null) => {
            selectRef.current = instance;

            if (forwardedSelectRef) {
                if (typeof forwardedSelectRef === "function") {
                    forwardedSelectRef(instance);
                } else {
                    forwardedSelectRef.current = instance;
                }
            }
        },
        [selectRef, forwardedSelectRef],
    );

    useEffect(() => {
        setSelectedValue(value || "");
    }, [setSelectedValue, value]);

    // React Hook Form setter select-elementets value hvis skjemaet har `defaultValues`, men vi rendrer ikke det elementet synlig.
    // For at brukeren skal se at verdien faktisk er blitt satt må vi sette denne staten.
    useEffect(() => {
        setSelectedValue(selectRef.current?.value || "");
    }, [selectRef.current?.value]);

    const selectOption = useCallback(
        (item: Option) => {
            const nextValue = item.value;
            setSearchValue("");
            setSelectedValue(nextValue);
            if (onChange) {
                onChange({ type: "change", target: { name, value: nextValue } });
            }
            if (selectRef.current) {
                selectRef.current.dispatchEvent(new Event("change", { bubbles: true }));
            }
            toggleListVisibility();
        },
        [onChange, setSearchValue, setSelectedValue, toggleListVisibility, name],
    );

    /// Fokushåndtering

    const componentRootElementRef = useRef<HTMLDivElement>(null);
    const focusInsideRef = useRef(false);
    const searchFieldRef = useRef<HTMLInputElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const handleFocusPlacement = useCallback(
        (isOpen: boolean, ref: RefObject<HTMLElement>) => {
            if (isOpen && !isSearchable) {
                const listElement = ref.current;
                if (listElement) {
                    focusSelected(listElement, selectedValue);
                }
            } else if (isOpen) {
                if (searchFieldRef.current) {
                    searchFieldRef.current.focus();
                }
            } else {
                if (focusInsideRef.current && buttonRef.current) {
                    buttonRef.current.focus();
                }
            }
        },
        [isSearchable, selectedValue],
    );

    const [dropdownRef] = useAnimatedHeight<HTMLDivElement>(dropdownIsShown, {
        onFirstVisible: handleFocusPlacement,
        onTransitionEnd: handleFocusPlacement,
    });

    useListNavigation({ ref: dropdownRef });

    const handleBlur = useCallback(
        (e: FocusEvent<HTMLButtonElement | HTMLInputElement>) => {
            const componentRootElement = componentRootElementRef.current;
            // There are known issues in Firefox when using "relatedTarget" in onBlur events:
            // https://github.com/facebook/react/issues/2011
            // This might be fixed in react 17. Se issue above.
            const nextFocusIsInsideComponent =
                componentRootElement && componentRootElement.contains(e.relatedTarget as Node);
            if (!nextFocusIsInsideComponent) {
                if (onBlur) {
                    onBlur({ type: "blur", target: { name, value: selectedValue || "" } });
                    selectRef.current?.dispatchEvent(new Event("focusout", { bubbles: true }));
                }
                focusInsideRef.current = false;
                setShown(false);
            }
        },
        [onBlur, setShown, name, selectedValue],
    );

    const handleFocus = useCallback(() => {
        if (!focusInsideRef.current) {
            if (onFocus) {
                onFocus({ type: "change", target: { name, value: selectedValue || "" } });
            }
            focusInsideRef.current = true;
        }
    }, [onFocus, selectedValue, name]);

    // Handle focus and blur of hidden select element
    useEffect(() => {
        const select = selectRef.current;
        const searchField = searchFieldRef.current;
        const button = buttonRef.current;
        const componentRootElement = componentRootElementRef.current;

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
                componentRootElement && componentRootElement.contains(ev.relatedTarget as Node) && ev.preventDefault();
            });
        };
    }, [showSearchInputField]);

    /// Tastaturnavigasjon

    // Add support for opening dropdown with arrowkey down as expected from native select
    const handleOnKeyUp = useCallback(
        (e: KeyboardEvent<HTMLButtonElement>) => {
            e.preventDefault();
            if ((e.key === "ArrowDown" || e.key === " ") && !dropdownIsShown) {
                e.stopPropagation();
                setShown(true);
            }
            if (e.key === "Escape") {
                setShown(false);
            }
        },
        [setShown, dropdownIsShown],
    );

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
    }, [setShown, dropdownIsShown]);

    return (
        <div
            data-testid="jkl-select"
            className={cn("jkl-select", className, {
                "jkl-select--inline": inline,
                "jkl-select--compact": forceCompact,
                "jkl-select--open": dropdownIsShown,
                "jkl-select--no-value": !hasSelectedValue,
                "jkl-select--invalid": !!errorLabel || invalid,
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
                ref={unifiedSelectRef}
                value={selectedValue}
                onChange={noop} // React complains unless we give an onChange handler. This is technically a read-only field, but readOnly isn't an option here.
            >
                <option value=""></option> {/* Tom option må være et valg, ellers vil <select> alltid ha en value */}
                {visibleItems.map((item) => (
                    <option key={`${listId}-opt-${item.value}`} hidden={!item.visible} value={item.value}>
                        {item.label}
                    </option>
                ))}
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
                        aria-describedby={describedBy}
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                    />
                )}
                {/* eslint-disable jsx-a11y/role-supports-aria-props */}
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
                    aria-describedby={describedBy}
                    aria-invalid={Boolean(errorLabel)} // Nei dette er ikke i henhold til speccen, men VoiceOver leser den likevel og det er oppførselen vi ønsker
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    onKeyUp={handleOnKeyUp}
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
                {/* eslint-enable jsx-a11y/role-supports-aria-props */}
                <div
                    id={listId}
                    ref={dropdownRef}
                    role="listbox"
                    className="jkl-select__options-menu"
                    hidden={!dropdownIsShown}
                    aria-activedescendant={hasSelectedValue ? `${listId}__${toLower(selectedValue)}` : undefined}
                    aria-labelledby={buttonId}
                    aria-expanded={dropdownIsShown}
                    tabIndex={-1}
                >
                    {visibleItems.map((item, i) => (
                        <button
                            key={`${listId}-${item.value}`}
                            hidden={!item.visible}
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
                            {item.label}
                        </button>
                    ))}
                </div>
                <ExpandArrow className="jkl-select__arrow" expanded={dropdownIsShown} />
            </div>
            <SupportLabel id={supportId} helpLabel={helpLabel} errorLabel={errorLabel} forceCompact={forceCompact} />
        </div>
    );
});

Select.displayName = "Select";
