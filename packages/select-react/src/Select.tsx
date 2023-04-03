import { ValuePair, getValuePair, DataTestAutoId, Density } from "@fremtind/jkl-core";
import { ArrowVerticalAnimated } from "@fremtind/jkl-icons-react";
import { InputGroup, type LabelProps } from "@fremtind/jkl-input-group-react";
import { InputGroupProps } from "@fremtind/jkl-input-group-react/src";
import { useId, useAnimatedHeight, usePreviousValue } from "@fremtind/jkl-react-hooks";
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
    MouseEvent,
    CSSProperties,
} from "react";
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

export interface SelectProps extends InputGroupProps, DataTestAutoId {
    id?: string;
    name: string;
    label: string;
    labelProps?: Omit<LabelProps, "children" | "density" | "htmlFor" | "standAlone">;
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
    /**
     * @default false
     */
    searchable?: boolean | ((searchValue: string, searchItem: string | ValuePair) => boolean);
    density?: Density;
    width?: string;
    onChange?: ChangeEventHandler;
    onBlur?: ChangeEventHandler;
    onFocus?: ChangeEventHandler;
    /**
     * Merk som ugyldig uten å sende inn en errorLabel.
     * NB! Brukes kun i tilfeller der valideringsfeil dukker opp andre steder, for eksempel i en FieldGroup.
     */
    invalid?: boolean;
    /**
     * Hvor mange valg skal vises i listen før den begynner å scrolle.
     * @default 5
     */
    maxShownOptions?: number;
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
        density,
        width,
        maxShownOptions = 5,
        style,
        ...rest
    } = props;

    const listId = useId(id || "jkl-select", { generateSuffix: !id });
    const labelId = `${listId}_label`;
    const buttonId = `${listId}_button`;
    const searchInputId = `${listId}_search-input`;

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
    const valueIsInItems: boolean = useMemo(() => {
        if (typeof value === "undefined") {
            return false;
        }
        return items.some((item) => (typeof item === "string" ? item === value : item.value === value));
    }, [value, items]);

    /// Valg av <option>

    const [selectedValue, setSelectedValue] = useState<string>(valueIsInItems && value !== undefined ? value : "");
    const hasSelectedValue = selectedValue !== "";
    const selectedValueLabel = useMemo(
        () => visibleItems.find((item) => item.value === selectedValue)?.label || defaultPrompt,
        [visibleItems, selectedValue, defaultPrompt],
    );

    const selectRef = useRef<HTMLSelectElement | null>(null);
    // Hjelpefunksjon som gjør det enklere å forwarde refen og å bruke den selv internt
    const unifiedSelectRef = useCallback(
        (instance: HTMLSelectElement | null) => {
            selectRef.current = instance;
            if (instance) {
                setSelectedValue(instance.value);
            }

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

    const previousValue = usePreviousValue(value);
    useEffect(() => {
        if (value === previousValue) {
            return;
        }
        if (typeof value === "undefined" || !valueIsInItems) {
            setSelectedValue("");
        } else {
            setSelectedValue(value);
        }
    }, [setSelectedValue, value, previousValue, valueIsInItems]);

    const selectOption = useCallback(
        (item: Option) => {
            const nextValue = item.value;
            setSearchValue("");
            setSelectedValue(nextValue);
            toggleListVisibility();
        },
        [setSearchValue, setSelectedValue, toggleListVisibility],
    );

    // La komponenten rendre <select> med den valgte verdien før onChange trigges, slik at
    // react-hook-form@>7.41.1 behandler feltet som at det har en verdi.
    const previousSelectedValue = usePreviousValue(selectedValue);
    useEffect(() => {
        // previousSelectedValue er undefined på første render, men da vil vi ikke ha en onChange uansett
        if (
            typeof previousSelectedValue === "undefined" ||
            previousSelectedValue === selectedValue ||
            selectedValue === value
        ) {
            return;
        }
        if (onChange) {
            onChange({ type: "change", target: { name, value: selectedValue } });
        }
        if (selectRef.current) {
            selectRef.current.dispatchEvent(new Event("change", { bubbles: true }));
        }
    }, [onChange, name, value, selectedValue, previousSelectedValue]);

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
                if (isSearchable) {
                    setSearchValue("");
                }
                if (onBlur) {
                    onBlur({ type: "blur", target: { name, value: selectedValue } });
                    selectRef.current?.dispatchEvent(new Event("focusout", { bubbles: true }));
                }
                focusInsideRef.current = false;
                setShown(false);
            }
        },
        [onBlur, isSearchable, name, selectedValue],
    );

    const handleFocus = useCallback(() => {
        if (!focusInsideRef.current) {
            if (onFocus) {
                onFocus({ type: "change", target: { name, value: selectedValue } });
            }
            focusInsideRef.current = true;
        }
    }, [onFocus, selectedValue, name]);

    const handleMouseOver = useCallback((e: MouseEvent<HTMLButtonElement>) => {
        // Ved mouseOver på options flytter vi fokus til dem for å unngå "dobbel fokus"
        // der det ser ut som to forskjellige elementer er fokusert/hovered samtidig
        (e.target as HTMLButtonElement).focus({ preventScroll: true });
    }, []);

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
    // onKeyDown to stop ArrowDown from scrolling the page
    const handleOnKeyDown = useCallback(
        (e: KeyboardEvent<HTMLButtonElement>) => {
            if ((e.key === "ArrowDown" || e.key === " ") && !dropdownIsShown) {
                e.preventDefault();
                e.stopPropagation();
                setShown(true);
            } else if (e.key === "Escape") {
                e.preventDefault();
                e.stopPropagation();
                setShown(false);
            }
        },
        [setShown, dropdownIsShown],
    );

    // onKeyDown to stop ArrowDown from scrolling the page
    const handleSearchOnKeyDown = useCallback(
        (e: KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "ArrowDown") {
                e.preventDefault();
                e.stopPropagation();

                const listElement = dropdownRef.current;
                if (listElement) {
                    if (isSearchable) {
                        // Flytt fokus til det første elementet i listen, ikke det forrige valgte.
                        // Ved endring i filter er det ikke gitt at vi ønsker å ta utgangspunkt i
                        // den valgte verdien.
                        focusSelected(listElement, undefined);
                    } else {
                        focusSelected(listElement, selectedValue);
                    }
                }
            } else if (e.key === "Escape") {
                e.preventDefault();
                e.stopPropagation();
                setShown(false);
            } else if (e.key === "Tab" && !e.shiftKey) {
                const listElement = dropdownRef.current;
                if (listElement) {
                    e.preventDefault();
                    e.stopPropagation();
                    focusSelected(listElement, selectedValue);
                }
            }
        },
        [setShown, dropdownRef, selectedValue, isSearchable],
    );

    // onKeyDown so this Tab listener isn't triggered by tabbing from search field to option
    const handleOptionOnKeyDown = useCallback(
        (e: KeyboardEvent<HTMLButtonElement>) => {
            if (e.key === "Tab") {
                e.preventDefault();
                e.stopPropagation();

                if (e.shiftKey && searchFieldRef.current) {
                    searchFieldRef.current.focus();
                } else if (buttonRef.current) {
                    // Mimic behaviour of Firefox and native select, where Tab selects the current item and closes the menu
                    setSelectedValue(e.currentTarget.value);
                    setShown(false);
                    buttonRef.current.focus();
                }
            } else if (e.key === "ArrowUp") {
                if (dropdownRef.current && searchFieldRef.current) {
                    // Can't be based on index since the first item might be filtered out
                    const firstVisible = dropdownRef.current.querySelector('[role="option"]:not([hidden])');
                    if (e.currentTarget.id === firstVisible?.id && searchFieldRef.current) {
                        searchFieldRef.current.focus();
                    }
                }
            }
        },
        [setShown, dropdownRef],
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
        <>
            <select
                name={name}
                tabIndex={-1}
                data-testid="jkl-native-select"
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
            <InputGroup
                ref={componentRootElementRef}
                data-testid="jkl-select"
                className={cn("jkl-select", className, {
                    "jkl-select--inline": inline,
                    "jkl-select--open": dropdownIsShown && visibleItems.some((item) => item.visible),
                    "jkl-select--no-value": !hasSelectedValue,
                    "jkl-select--invalid": !!errorLabel || invalid,
                })}
                {...rest}
                id={isSearchable ? searchInputId : buttonId}
                style={{ ["--jkl-select-max-shown-options"]: maxShownOptions, ...style } as CSSProperties}
                density={density}
                label={label}
                labelProps={{
                    id: labelId,
                    srOnly: inline,
                    ...labelProps,
                    htmlFor: isSearchable ? searchInputId : buttonId,
                }}
                helpLabel={helpLabel}
                errorLabel={errorLabel}
                render={(inputProps) => (
                    <div className="jkl-select__outer-wrapper" style={{ width }}>
                        {isSearchable && (
                            <input
                                {...inputProps}
                                id={searchInputId}
                                hidden={!showSearchInputField}
                                ref={searchFieldRef}
                                placeholder="Søk"
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}
                                data-testid="jkl-select__search-input"
                                className="jkl-select__search-input"
                                aria-autocomplete="list"
                                aria-activedescendant={
                                    hasSelectedValue ? `${listId}__${toLower(selectedValue)}` : undefined
                                }
                                aria-controls={listId}
                                aria-expanded={dropdownIsShown}
                                role="combobox"
                                onKeyDown={handleSearchOnKeyDown}
                                onBlur={handleBlur}
                                onFocus={handleFocus}
                                onClick={(e) => {
                                    e.stopPropagation();
                                }}
                            />
                        )}
                        <button
                            {...inputProps}
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
                            onKeyDown={handleOnKeyDown}
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
                            role="listbox"
                            className="jkl-select__options-menu"
                            hidden={!dropdownIsShown || visibleItems.every((item) => !item.visible)}
                            aria-labelledby={labelId}
                            tabIndex={-1}
                            data-focus="controlled" // lar oss styre markering av valg vha focus
                        >
                            {visibleItems.map((item, i) =>
                                // Det er viktig at vi _fjerner_ elementer som ikke er synlige fra DOMen for at tastaturnavigasjon skal fungere.
                                // For eksempel, hvis vi har elementene Apple, Samsung og LG i den rekkefølgen og søker etter "l"
                                // vil Samsung ikke synes. Om vi bare setter hidden-attributtet på Samsung vil ArrowDown fra Apple ikke fungere.
                                // Dette lar seg ikke gjenskape i en enhetstest med JSDOM + user-events, og Cypress lukker Select
                                // ved første {downArrow} ¯\_(ツ)_/¯. Så please test scenariet over manuelt om dette skaper trøbbel for deg.
                                item.visible ? (
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
                                        onKeyDown={handleOptionOnKeyDown}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            selectOption(item);
                                        }}
                                        onMouseOver={handleMouseOver}
                                    >
                                        {item.label}
                                    </button>
                                ) : null,
                            )}
                        </div>
                        <ArrowVerticalAnimated
                            variant="medium"
                            pointingDown={!dropdownIsShown}
                            className="jkl-select__arrow"
                        />
                    </div>
                )}
            />
        </>
    );
});

Select.displayName = "Select";
