import clsx from "clsx";
import React, {
    type CSSProperties,
    type FocusEvent,
    forwardRef,
    type KeyboardEvent,
    type MouseEvent,
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";
import { useId } from "../../hooks/useId/useId.js";
import { useListNavigation } from "../../hooks/useListNavigation/useListNavigation.js";
import { usePreviousValue } from "../../hooks/usePreviousValue/usePreviousValue.js";
import { type ValuePair, getValuePair } from "../../utilities/valuePair.js";
import { ArrowVerticalAnimated } from "../icon/icons/animated/ArrowVerticalAnimated.js";
import { InputGroup } from "../input-group/InputGroup.js";
import Popover from "../popover/Popover.js";
import type { PopupTipProps } from "../tooltip/types.js";
import { focusSelected, toLower } from "./select-utils.js";
import type { SelectProps } from "./types.js";

const noop = () => {
    return;
};

interface Option extends ValuePair {
    visible: boolean;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
    (props, forwardedSelectRef) => {
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
            width,
            maxShownOptions = 5,
            style,
            tooltip,
            ...rest
        } = props;

        const listId = useId(id || "jkl-select", { generateSuffix: !id });
        const labelId = `${listId}_label`;
        const buttonId = `${listId}_button`;
        const searchInputId = `${listId}_search-input`;
        // Unik anchor-name som CSS anchor positioning bruker for å la
        // dropdown-listen matche bredden til triggeren.
        const anchorName = `--${listId.replace(/[^a-zA-Z0-9-]/g, "-")}-anchor`;

        const [dropdownIsShown, setShown] = useState(false);
        const toggleListVisibility = useCallback(() => {
            setShown((previousValue) => !previousValue);
        }, []);

        // Lagrer faktisk placement etter at floating-ui har kjørt `flip`,
        // slik at vi kan bytte hvilken side av lista og knappen som er
        // flat når lista snus over triggeren.
        const [popoverPlacement, setPopoverPlacement] = useState<
            "top" | "bottom"
        >("bottom");
        const handlePlacementChange = useCallback((p: string) => {
            setPopoverPlacement(p.startsWith("top") ? "top" : "bottom");
        }, []);

        /// Søk

        const isSearchable = Boolean(searchable);
        const showSearchInputField = isSearchable && dropdownIsShown;
        const [searchValue, setSearchValue] = useState("");
        const searchFn = useCallback(
            (item: ValuePair) => {
                if (
                    item.label.toLowerCase().includes(searchValue.toLowerCase())
                ) {
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
                    const visible =
                        !isSearchable || searchValue === "" || searchFn(item);
                    return { ...item, visible };
                }),
            [items, isSearchable, searchValue, searchFn],
        );
        const valueIsInItems: boolean = useMemo(() => {
            if (typeof value === "undefined") {
                return false;
            }
            return items.some((item) =>
                typeof item === "string"
                    ? item === value
                    : item.value === value,
            );
        }, [value, items]);

        /// Valg av <option>

        const [selectedValue, setSelectedValue] = useState<string>(
            valueIsInItems && value !== undefined ? value : "",
        );
        const hasSelectedValue = selectedValue !== "";
        const selectedValueLabel = useMemo(
            () =>
                visibleItems.find((item) => item.value === selectedValue)
                    ?.label || defaultPrompt,
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
                if (instance) {
                    setSelectedValue(instance.value);
                }
            },
            [forwardedSelectRef],
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
        }, [value, previousValue, valueIsInItems]);

        const selectOption = useCallback(
            (item: Option) => {
                const nextValue = item.value;
                setSearchValue("");
                setSelectedValue(nextValue);
                toggleListVisibility();
                buttonRef.current?.focus();
            },
            [toggleListVisibility],
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
                onChange({
                    type: "change",
                    target: { name, value: selectedValue },
                });
            }
            if (selectRef.current) {
                selectRef.current.dispatchEvent(
                    new Event("change", { bubbles: true }),
                );
            }
        }, [onChange, name, value, selectedValue, previousSelectedValue]);

        /// Fokushåndtering

        const componentRootElementRef = useRef<HTMLDivElement>(null);
        const focusInsideRef = useRef(false);
        const searchFieldRef = useRef<HTMLInputElement>(null);
        const buttonRef = useRef<HTMLButtonElement>(null);

        const dropdownRef = useRef<HTMLDivElement | null>(null);
        // Lagrer listbox-elementet i state slik at downstream-hooks
        // (f.eks. `useListNavigation`) kan re-feste listeneren idet
        // `FloatingPortal` mounter listen.
        const [listboxEl, setListboxEl] = useState<HTMLDivElement | null>(null);

        // Listen rendres i en `FloatingPortal` som monteres via en
        // `useLayoutEffect` + `setState` i floating-ui. Refen er derfor
        // ikke tilgjengelig før i en senere render. Vi bruker en
        // callback-ref for å plassere fokus på valgt option idet listen
        // faktisk er i DOM-en. Refen holdes stabil (tom dependency-list)
        // slik at en endring i `selectedValue`/`isSearchable` ikke får
        // React til å avmontere/remontere refen og dermed flytte fokus
        // mens menyen er åpen — vi leser siste verdier via refs.
        const isSearchableRef = useRef(isSearchable);
        const selectedValueRef = useRef(selectedValue);
        useEffect(() => {
            isSearchableRef.current = isSearchable;
            selectedValueRef.current = selectedValue;
        });

        const setDropdownRef = useCallback((node: HTMLDivElement | null) => {
            dropdownRef.current = node;
            setListboxEl(node);
            if (node && !isSearchableRef.current) {
                // Popover skjules med `visibility: hidden` til
                // floating-ui har regnet ut første posisjon. Defer
                // fokus til etter neste paint, slik at vi ikke flytter
                // fokus til et usynlig element (kan gi manglende
                // fokusindikator i enkelte nettlesere).
                requestAnimationFrame(() => {
                    if (dropdownRef.current === node) {
                        focusSelected(node, selectedValueRef.current);
                    }
                });
            }
        }, []);

        // Søkbart felt og knappen som får fokus ved lukking lever i hoved-
        // DOM-en, så for de tilfellene holder en useEffect.
        const wasShown = usePreviousValue(dropdownIsShown);
        useEffect(() => {
            if (dropdownIsShown === wasShown) return;
            if (dropdownIsShown && isSearchable) {
                searchFieldRef.current?.focus();
            } else if (
                !dropdownIsShown &&
                focusInsideRef.current &&
                buttonRef.current
            ) {
                buttonRef.current.focus();
            }
        }, [dropdownIsShown, wasShown, isSearchable]);

        useListNavigation({ element: listboxEl });

        const close = useCallback(() => {
            if (isSearchable) {
                setSearchValue("");
            }
            if (onBlur) {
                onBlur({
                    type: "blur",
                    target: { name, value: selectedValue },
                });
                selectRef.current?.dispatchEvent(
                    new Event("focusout", { bubbles: true }),
                );
            }
            focusInsideRef.current = false;
            setShown(false);
        }, [onBlur, isSearchable, name, selectedValue]);

        const handleBlur = useCallback(
            (e: FocusEvent<HTMLButtonElement | HTMLInputElement>) => {
                const componentRootElement = componentRootElementRef.current;
                const dropdownElement = dropdownRef.current;
                // There are known issues in Firefox when using "relatedTarget" in onBlur events:
                // https://github.com/facebook/react/issues/2011
                // This might be fixed in react 17. Se issue above.
                // Dropdown rendres i en portal, så vi må sjekke begge trærne
                // for å avgjøre om fokus blir værende inne i komponenten.
                const nextFocusIsInsideComponent =
                    componentRootElement?.contains(e.relatedTarget as Node) ||
                    dropdownElement?.contains(e.relatedTarget as Node);
                if (!nextFocusIsInsideComponent) {
                    close();
                }
            },
            [close],
        );

        const handleFocus = useCallback(() => {
            if (!focusInsideRef.current) {
                if (onFocus) {
                    onFocus({
                        type: "change",
                        target: { name, value: selectedValue },
                    });
                }
                focusInsideRef.current = true;
            }
        }, [onFocus, selectedValue, name]);

        const handleMouseOver = useCallback(
            (e: MouseEvent<HTMLButtonElement>) => {
                // Ved mouseOver på options flytter vi fokus til dem for å unngå "dobbel fokus"
                // der det ser ut som to forskjellige elementer er fokusert/hovered samtidig
                (e.target as HTMLButtonElement).focus({ preventScroll: true });
            },
            [],
        );

        // Handle focus and blur of hidden select element
        useEffect(() => {
            const select = selectRef.current;
            if (!select) return;

            const onSelectFocus = () => {
                if (showSearchInputField) {
                    searchFieldRef.current?.focus();
                } else {
                    buttonRef.current?.focus();
                }
            };
            const onSelectBlur = (ev: globalThis.FocusEvent) => {
                // Les refs ved hvert kall slik at vi alltid sjekker mot
                // siste listbox-element — den portalerte listen kan ha
                // mountet etter at denne effekten ble satt opp.
                const target = ev.relatedTarget as Node | null;
                const insideComponent =
                    componentRootElementRef.current?.contains(target);
                const insideDropdown = dropdownRef.current?.contains(target);
                if (insideComponent || insideDropdown) {
                    ev.preventDefault();
                }
            };

            select.addEventListener("focus", onSelectFocus);
            select.addEventListener("blur", onSelectBlur);
            return () => {
                select.removeEventListener("focus", onSelectFocus);
                select.removeEventListener("blur", onSelectBlur);
            };
        }, [showSearchInputField]);

        /// Tastaturnavigasjon

        // Add support for opening dropdown with arrowkey down as expected from native select
        // onKeyDown to stop ArrowDown from scrolling the page
        const handleOnKeyDown = useCallback(
            (e: KeyboardEvent<HTMLButtonElement>) => {
                if (
                    (e.key === "ArrowDown" || e.key === " ") &&
                    !dropdownIsShown
                ) {
                    e.preventDefault();
                    e.stopPropagation();
                    setShown(true);
                } else if (e.key === "Escape") {
                    e.preventDefault();
                    e.stopPropagation();
                    setShown(false);
                }
            },
            [dropdownIsShown],
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
                } else if (e.key === "Enter" && dropdownIsShown) {
                    // Should not propagate Enter keyevent because form might submit
                    e.preventDefault();
                    e.stopPropagation();
                }
            },
            [selectedValue, isSearchable, dropdownIsShown],
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
                        const firstVisible = dropdownRef.current.querySelector(
                            '[role="option"]:not([hidden])',
                        );
                        if (
                            e.currentTarget.id === firstVisible?.id &&
                            searchFieldRef.current
                        ) {
                            searchFieldRef.current.focus();
                        }
                    }
                }
            },
            [],
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
        }, [dropdownIsShown]);

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
                    <option value="" />{" "}
                    {/* Tom option må være et valg, ellers vil <select> alltid ha en value */}
                    {visibleItems.map((item) => (
                        <option
                            key={`${listId}-opt-${item.value}`}
                            hidden={!item.visible}
                            value={item.value}
                        >
                            {item.label}
                        </option>
                    ))}
                </select>
                <InputGroup
                    ref={componentRootElementRef}
                    data-testid="jkl-select"
                    className={clsx("jkl-select", className, {
                        "jkl-select--inline": inline,
                        "jkl-select--open":
                            dropdownIsShown &&
                            visibleItems.some((item) => item.visible),
                        "jkl-select--no-value": !hasSelectedValue,
                        "jkl-select--invalid": !!errorLabel || invalid,
                    })}
                    tooltip={
                        tooltip && React.isValidElement<PopupTipProps>(tooltip)
                            ? React.cloneElement(tooltip, {
                                  triggerProps: {
                                      ...tooltip.props.triggerProps,
                                      onFocus: (
                                          e: FocusEvent<HTMLButtonElement>,
                                      ) => {
                                          tooltip.props.triggerProps?.onFocus?.(
                                              e,
                                          );
                                          close();
                                      },
                                  },
                              })
                            : null
                    }
                    {...rest}
                    id={isSearchable ? searchInputId : buttonId}
                    style={style}
                    label={label}
                    labelProps={{
                        id: labelId,
                        srOnly: inline,
                        ...labelProps,
                        htmlFor: isSearchable ? searchInputId : buttonId,
                    }}
                    helpLabel={helpLabel}
                    errorLabel={errorLabel}
                    render={({
                        "aria-invalid": ariaInvalid,
                        ...inputProps
                    }) => {
                        // Lista vises kun når dropdown er åpnet *og* det
                        // finnes minst ett synlig valg. `aria-expanded` på
                        // trigger og combobox må følge samme boolean for
                        // ikke å lyve om popoverens tilstand.
                        const isPopoverOpen =
                            dropdownIsShown &&
                            visibleItems.some((item) => item.visible);
                        return (
                            <Popover
                                open={isPopoverOpen}
                                placement="bottom-start"
                                offset={0}
                                modal={false}
                                onPlacementChange={handlePlacementChange}
                                clickOptions={{ enabled: false }}
                                dismissOptions={{ enabled: false }}
                                roleOptions={{ enabled: false }}
                            >
                                <Popover.Trigger asChild>
                                    <div
                                        className="jkl-select__outer-wrapper"
                                        data-popover-placement={
                                            popoverPlacement
                                        }
                                        style={
                                            {
                                                width,
                                                anchorName,
                                            } as CSSProperties
                                        }
                                    >
                                        {isSearchable && (
                                            <input
                                                {...inputProps}
                                                aria-invalid={ariaInvalid}
                                                id={searchInputId}
                                                hidden={!showSearchInputField}
                                                ref={searchFieldRef}
                                                placeholder="Søk"
                                                value={searchValue}
                                                onChange={(e) =>
                                                    setSearchValue(
                                                        e.target.value,
                                                    )
                                                }
                                                data-testid="jkl-select__search-input"
                                                className="jkl-select__search-input"
                                                aria-autocomplete="list"
                                                aria-activedescendant={
                                                    isPopoverOpen &&
                                                    hasSelectedValue
                                                        ? `${listId}__${toLower(
                                                              selectedValue,
                                                          )}`
                                                        : undefined
                                                }
                                                aria-controls={
                                                    isPopoverOpen
                                                        ? listId
                                                        : undefined
                                                }
                                                aria-expanded={isPopoverOpen}
                                                role="combobox"
                                                onKeyDown={
                                                    handleSearchOnKeyDown
                                                }
                                                onBlur={handleBlur}
                                                onFocus={handleFocus}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                }}
                                            />
                                        )}
                                        {/* eslint-disable-next-line jsx-a11y/role-supports-aria-props */}
                                        <button
                                            // Nei dette er ikke i henhold til speccen, men VoiceOver leser den likevel og det er oppførselen vi ønsker
                                            aria-invalid={ariaInvalid}
                                            {...inputProps}
                                            id={buttonId}
                                            ref={buttonRef}
                                            hidden={showSearchInputField}
                                            type="button"
                                            name={`${name}-btn`}
                                            className={clsx(
                                                "jkl-select__button",
                                                {
                                                    "jkl-select__button--active-value":
                                                        !!selectedValue,
                                                },
                                            )}
                                            data-testid="jkl-select__button"
                                            aria-label={`${
                                                selectedValueLabel || "Velg"
                                            },${label}`}
                                            aria-expanded={isPopoverOpen}
                                            aria-controls={
                                                isPopoverOpen
                                                    ? listId
                                                    : undefined
                                            }
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
                                        <ArrowVerticalAnimated
                                            variant="medium"
                                            pointingDown={!isPopoverOpen}
                                            className="jkl-select__arrow"
                                        />
                                    </div>
                                </Popover.Trigger>
                                <Popover.Content
                                    initialFocus={-1}
                                    returnFocus={false}
                                    className="jkl-select__popover"
                                    style={{
                                        width: `anchor-size(${anchorName} width)`,
                                    }}
                                >
                                    <div
                                        id={listId}
                                        ref={setDropdownRef}
                                        // biome-ignore lint/a11y/useSemanticElements: Vi reimplementerer select
                                        role="listbox"
                                        className="jkl-select__options-menu"
                                        data-popover-placement={
                                            popoverPlacement
                                        }
                                        aria-labelledby={labelId}
                                        tabIndex={-1}
                                        data-focus="controlled" // lar oss styre markering av valg vha focus
                                        style={
                                            {
                                                "--jkl-select-max-shown-options":
                                                    maxShownOptions,
                                            } as CSSProperties
                                        }
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
                                                    id={`${listId}__${toLower(
                                                        item.value,
                                                    )}`}
                                                    className="jkl-select__option"
                                                    data-testid="jkl-select__option"
                                                    aria-selected={
                                                        item.value ===
                                                        selectedValue
                                                    }
                                                    // biome-ignore lint/a11y/useSemanticElements: Vi reimplementerer select
                                                    role="option"
                                                    value={item.value}
                                                    data-testautoid={`jkl-select__option-${i}`}
                                                    onBlur={handleBlur}
                                                    onFocus={handleFocus}
                                                    onKeyDown={
                                                        handleOptionOnKeyDown
                                                    }
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        selectOption(item);
                                                    }}
                                                    onMouseOver={
                                                        handleMouseOver
                                                    }
                                                >
                                                    {item.label}
                                                    {item.description ? (
                                                        <span className="jkl-select__option-description">
                                                            {item.description}
                                                        </span>
                                                    ) : null}
                                                </button>
                                            ) : null,
                                        )}
                                    </div>
                                </Popover.Content>
                            </Popover>
                        );
                    }}
                />
            </>
        );
    },
);

Select.displayName = "Select";
