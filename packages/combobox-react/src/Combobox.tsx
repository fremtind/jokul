import { ValuePair, Density } from "@fremtind/jkl-core";
import { IconButton } from "@fremtind/jkl-icon-button-react";
import { ArrowVerticalAnimated, CheckIcon } from "@fremtind/jkl-icons-react";
import { InputGroup, InputGroupProps, type LabelProps } from "@fremtind/jkl-input-group-react";
import { useId, useAnimatedHeight, useListNavigation } from "@fremtind/jkl-react-hooks";
import { Tag } from "@fremtind/jkl-tag-react";
import cn from "classnames";
import React, {
    FC,
    useEffect,
    useRef,
    useState,
    useCallback,
    KeyboardEvent,
    ChangeEvent,
    FocusEvent,
    MouseEvent,
    useMemo,
} from "react";

export type ComboboxValuePair = ValuePair & {
    tagLabel?: string;
    isMarked?: boolean;
};

export function getComboboxValuePair(item: string | ComboboxValuePair): ComboboxValuePair {
    return typeof item === "string" ? { value: item, label: item } : item;
}

interface PartialChangeEvent extends Partial<Omit<ChangeEvent<HTMLElement>, "target">> {
    type: "change" | "blur";
    target: {
        name: string;
        value: string;
        selectedOptions: Array<ValuePair>;
    };
}

type ChangeEventHandler = (event: PartialChangeEvent) => void;

interface ComboboxProps extends InputGroupProps {
    id?: string;
    placeholder?: string;
    labelProps?: Omit<LabelProps, "children" | "density" | "htmlFor" | "standAlone">;
    items: Array<ValuePair>;
    noMatchingOption?: string;
    label: string;
    name: string;
    value?: Array<ValuePair>;
    density?: Density;
    width?: string;
    helpLabel?: string;
    errorLabel?: string;
    className?: string;
    invalid?: boolean;
    onChange: ChangeEventHandler;
    onBlur?: ChangeEventHandler;
    onFocus?: ChangeEventHandler;
}

export const Combobox: FC<ComboboxProps> = ({
    id,
    placeholder,
    items,
    onChange,
    onFocus,
    onBlur,
    value,
    label,
    noMatchingOption,
    labelProps,
    helpLabel,
    errorLabel,
    width,
    density,
    name,
    className,
    invalid,
}) => {
    const listId = useId(id || "jkl-combobox", { generateSuffix: !id });
    const labelId = `${listId}_label`;
    const buttonId = `${listId}_button`;
    const inputId = `${listId}_search-input`;

    const [selectedValue, setSelectedValue] = useState<Array<ComboboxValuePair>>(value || []);
    const [isPoitingDown, setIsPointingDown] = useState<boolean>(true);
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const [searchValue, setSearchValue] = useState<string>("");
    const [noResults, setNoResults] = useState(false);

    const searchRef = useRef<HTMLInputElement>(null);
    const inputRef = useRef<HTMLDivElement>(null);
    const focusInsideRef = useRef(false);

    useEffect(() => {
        setSearchValue("");
        if (showMenu && searchRef.current) {
            searchRef.current.focus();
        }
    }, [showMenu]);

    // Funksjon for å stile valgt element
    const isSelected = (option: ValuePair) => {
        if (!selectedValue) {
            return false;
        } else {
            return selectedValue.some((value) => value.value === option.value);
        }
    };

    // Fjerne ett eller flere valg
    const removeOption = useCallback(
        (option: string) => {
            return selectedValue.filter((value) => value.value !== option);
        },
        [selectedValue],
    );

    const onTagRemove = (e: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, option: string) => {
        let newValue = removeOption(option);
        setSelectedValue(newValue);
        onChange({
            type: "change",
            target: { name, value: option, selectedOptions: newValue },
        });
        e.stopPropagation();
    };

    // Håndtere valgt verdi i listen
    const onItemClick = useCallback(
        (option: string) => {
            let newValue: Array<ValuePair>;

            if (selectedValue.some((value) => value.value === option)) {
                newValue = removeOption(option);
            } else {
                const item = items.find((i) => i.value === option);
                newValue = [...selectedValue, item as ValuePair];
            }
            searchRef.current?.focus();
            setSelectedValue(newValue);
            onChange({
                type: "change",
                target: { name, value: option, selectedOptions: newValue },
            });
        },
        [selectedValue, setSelectedValue, onChange, name, removeOption, items],
    );

    // Funksjon for søk
    const onSearch = (e: { target: { value: React.SetStateAction<string> } }) => {
        searchRef.current?.focus();
        setShowMenu(true);
        setSearchValue(e.target.value);
    };

    const options = useMemo(() => {
        if (!searchValue) {
            return items;
        }

        const filteredOptions = items.filter(
            (option) => option.label.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0,
        );

        setNoResults(filteredOptions.length === 0);

        return filteredOptions;
    }, [searchValue, items]);

    // Det første elementet i listen skal være aktivt fram til brukeren klikker på noe annet
    const [activeDescendant, setActiveDescendant] = useState<string | undefined>(
        options[0]?.value ? `${listId}-${options[0]?.value}` : undefined,
    );

    // Håndtere arrow-state
    useEffect(() => {
        if (showMenu) {
            setIsPointingDown(false);
        } else {
            setIsPointingDown(true);
        }
    }, [showMenu]);

    // Lukk meny med ESC
    useEffect(() => {
        const handleEscape = (e: globalThis.KeyboardEvent) => {
            if (e.key === "Escape" && showMenu) {
                setShowMenu(false);
            }
        };
        if (typeof window !== "undefined") {
            window.addEventListener("keydown", handleEscape);
        }
        return () => {
            if (typeof window !== "undefined" && showMenu) {
                window.removeEventListener("keydown", handleEscape);
            }
        };
    }, [setShowMenu, showMenu]);

    // Fokushåndtering
    const handleFocusPlacement = useCallback((isOpen: boolean) => {
        if (isOpen) {
            if (searchRef.current) {
                searchRef.current.focus();
            }
        } else {
            if (focusInsideRef.current && inputRef.current) {
                inputRef.current.focus();
            }
        }
    }, []);

    const handleFocus = useCallback(() => {
        if (!focusInsideRef.current) {
            if (onFocus) {
                onFocus({
                    type: "change",
                    target: {
                        name,
                        value: selectedValue?.[0].value || "",
                        selectedOptions: selectedValue,
                    },
                });
            }
            focusInsideRef.current = true;
            setShowMenu(true);
        }
    }, [onFocus, selectedValue, name]);

    const [dropdownRef] = useAnimatedHeight<HTMLDivElement>(showMenu, {
        onFirstVisible: handleFocusPlacement,
        onTransitionEnd: handleFocusPlacement,
    });

    useListNavigation({ ref: dropdownRef });

    const componentRootElementRef = useRef<HTMLDivElement>(null);

    const handleBlur = useCallback(
        (e: FocusEvent<HTMLDivElement | HTMLInputElement | HTMLButtonElement>) => {
            const componentRootElement = componentRootElementRef.current;
            const nextFocusIsInsideComponent =
                componentRootElement && componentRootElement.contains(e.relatedTarget as Node);
            if (!nextFocusIsInsideComponent) {
                setSearchValue("");

                if (onBlur) {
                    onBlur({
                        type: "blur",
                        target: {
                            name,
                            value: selectedValue?.[0]?.value || "",
                            selectedOptions: selectedValue,
                        },
                    });
                    inputRef.current?.dispatchEvent(new Event("focusout", { bubbles: true }));
                }
                focusInsideRef.current = false;
                setShowMenu(false);
            }
        },
        [onBlur, name, selectedValue],
    );

    const handleMouseOver = useCallback((e: MouseEvent<HTMLButtonElement>) => {
        // Ved mouseOver på options flytter vi fokus til dem for å unngå "dobbel fokus"
        // der det ser ut som to forskjellige elementer er fokusert/hovered samtidig
        (e.target as HTMLButtonElement).focus({ preventScroll: true });
    }, []);

    // Tastaturnavigasjon
    const handleSearchOnKeyDown = useCallback(
        (e: KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "ArrowDown") {
                e.preventDefault();
                e.stopPropagation();
                const listElement = dropdownRef.current;
                if (listElement) {
                    listElement.querySelector<HTMLButtonElement>('[role="option"]')?.focus();
                }
            } else if (e.key === "Escape") {
                e.preventDefault();
                e.stopPropagation();
                setShowMenu(false);
            }

            if (e.ctrlKey && e.key === "a") {
                e.preventDefault();
                e.stopPropagation();
                const updatedSelectedValue = selectedValue.map((item) => ({
                    ...item,
                    isMarked: true,
                }));
                setSelectedValue(updatedSelectedValue);
            } else if (e.key === "Backspace") {
                e.stopPropagation();

                // Sjekk om selectedValue er markert
                const selectedValueIsMarked = selectedValue.some((item) => item.isMarked);

                if (selectedValueIsMarked) {
                    // Fjern items hvis de er markert
                    const updatedSelectedValue = selectedValue.filter((item) => !item.isMarked);
                    setSelectedValue(updatedSelectedValue);
                } else if (selectedValue.length > 0 && searchValue === "") {
                    // Hvis ingen items er markert, fjern siste valgte item
                    setSelectedValue(selectedValue.slice(0, selectedValue.length - 1));
                }
            }
        },
        [dropdownRef, selectedValue, searchValue],
    );

    const handleOptionOnKeyDown = useCallback(
        (e: KeyboardEvent<HTMLButtonElement>) => {
            if (e.key === "Tab") {
                if (searchRef.current) {
                    e.preventDefault();
                    e.stopPropagation();

                    if (e.shiftKey) {
                        searchRef.current.focus();
                    } else {
                        // Mimic behaviour of Firefox and native select, where Tab selects the current item and closes the menu
                        onItemClick(e.currentTarget.value);
                        setShowMenu(false);
                        searchRef.current.focus();
                    }
                }
            } else if (e.key === "ArrowUp") {
                if (dropdownRef.current && searchRef.current) {
                    // Can't be based on index since the first item might be filtered out
                    const firstVisible = dropdownRef.current.querySelector('[role="option"]:not([hidden])');
                    if (e.currentTarget.id === firstVisible?.id && searchRef.current) {
                        searchRef.current.focus();
                    }
                }
            }
        },
        [setShowMenu, onItemClick, dropdownRef],
    );

    const hasSelection = selectedValue.length >= 1;

    return (
        <InputGroup
            label={label}
            id={inputId}
            ref={componentRootElementRef}
            data-testid="jkl-combobox"
            className={cn("jkl-combobox", className, {
                "jkl-combobox--invalid": !!errorLabel || invalid,
                "jkl-combobox--menu-open": showMenu,
                "jkl-combobox--menu-closed": !showMenu && hasSelection,
            })}
            labelProps={{
                id: labelId,
                ...labelProps,
            }}
            helpLabel={helpLabel}
            errorLabel={errorLabel}
            density={density}
            render={(inputProps) => (
                <div
                    className={cn("jkl-combobox__wrapper", { "jkl-combobox__wrapper--active-value": hasSelection })}
                    style={{ width }}
                >
                    <div className="jkl-combobox__tags" data-testid="jkl-combobox__tags">
                        {selectedValue.map(getComboboxValuePair).map((option) => (
                            <Tag
                                key={option.value}
                                className="jkl-tag"
                                data-testid="jkl-tag"
                                dismissAction={{
                                    onClick: (e) => {
                                        if (searchRef.current) {
                                            searchRef.current.focus();
                                        }
                                        onTagRemove(e, option.value);
                                    },
                                    onBlur: handleBlur,
                                    label: `Fjern ${option.value}`,
                                }}
                            >
                                <span aria-hidden="true" data-testid="jkl-tag__content">
                                    {option.tagLabel ? option.tagLabel : option.label}
                                </span>
                            </Tag>
                        ))}
                        <input
                            {...inputProps}
                            className="jkl-combobox__search-input"
                            onChange={onSearch}
                            data-testid="jkl-combobox__search-input"
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            onKeyDown={handleSearchOnKeyDown}
                            value={searchValue}
                            ref={searchRef}
                            aria-controls={listId}
                            role="combobox"
                            aria-autocomplete="list"
                            aria-expanded={showMenu}
                            placeholder={selectedValue.length > 0 ? "" : placeholder}
                            autoComplete="off"
                        />
                    </div>

                    <div
                        className="jkl-combobox__menu"
                        role="listbox"
                        ref={dropdownRef}
                        id={listId}
                        aria-labelledby={labelId}
                        aria-multiselectable="true"
                        aria-activedescendant={activeDescendant}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        tabIndex={-1}
                    >
                        {options.map((option, i) => (
                            <button
                                key={`${listId}-${option.value}`}
                                type="button"
                                id={`${listId}__${option.value}`}
                                aria-selected={isSelected(option)}
                                role="option"
                                value={option.value}
                                onBlur={handleBlur}
                                className={`jkl-combobox__option ${
                                    isSelected(option) && "jkl-combobox__option--selected"
                                }`}
                                data-testid="jkl-combobox__option"
                                data-testautoid={`jkl-combobox__option-${i}`}
                                onFocus={handleFocus}
                                onKeyDown={handleOptionOnKeyDown}
                                onClick={(e) => {
                                    setActiveDescendant(`${listId}__${option.value}`); // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/listbox_role#required_javascript_features
                                    e.stopPropagation();
                                    onItemClick(option.value);
                                    setSearchValue("");
                                }}
                                onMouseOver={handleMouseOver}
                            >
                                {option.description ? (
                                    <span>
                                        {option.label}
                                        <span className="jkl-combobox__option-description">{option.description}</span>
                                    </span>
                                ) : (
                                    option.label
                                )}
                                {isSelected(option) ? (
                                    <span>
                                        <CheckIcon />{" "}
                                    </span>
                                ) : null}
                            </button>
                        ))}
                        {noResults && <div className="jkl-combobox__no-option">{noMatchingOption}</div>}
                    </div>
                    <div className="jkl-combobox__actions">
                        <IconButton
                            id={buttonId}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            className="jkl-combobox__button"
                            data-testid="jkl-combobox__button"
                            aria-label={`${selectedValue.map((value) => value.label) || "Velg"},${label}`}
                            aria-expanded={showMenu}
                            aria-controls={listId}
                            role="button"
                            onClick={() => setShowMenu(true)}
                            onMouseDown={(e) => {
                                e.preventDefault();
                                inputRef.current?.focus();
                            }}
                        >
                            <ArrowVerticalAnimated pointingDown={isPoitingDown} />
                        </IconButton>
                    </div>
                </div>
            )}
        />
    );
};
Combobox.displayName = "Combobox";
