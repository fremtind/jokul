import { ValuePair } from "@fremtind/jkl-core";
import { IconButton } from "@fremtind/jkl-icon-button-react";
import { ArrowVerticalAnimated, CheckIcon, CloseIcon } from "@fremtind/jkl-icons-react";
import { InputGroup, InputGroupProps, type LabelProps } from "@fremtind/jkl-input-group-react";
import { useId, useAnimatedHeight } from "@fremtind/jkl-react-hooks";
import { Tag } from "@fremtind/jkl-tag-react";
import cn from "classnames";
import { useListNavigation } from "packages/select-react/src/useListNavigation";
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
} from "react";

export type ComboboxValuePair = ValuePair & {
    tagLabel?: string;
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
    label: string;
    name: string;
    value?: Array<ValuePair>;
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
    labelProps,
    helpLabel,
    errorLabel,
    width,
    name,
    className,
    invalid,
}) => {
    const listId = useId(id || "jkl-combobox", { generateSuffix: !id });
    const labelId = `${listId}_label`;
    const buttonId = `${listId}_button`;
    const inputId = `${listId}_search-input`;

    const [selectedValue, setSelectedValue] = useState<Array<ValuePair>>(value || []);
    const [isPoitingDown, setIsPointingDown] = useState<boolean>(true);
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const [searchValue, setSearchValue] = useState<string>("");

    const searchRef = useRef<HTMLInputElement>(null);
    const inputRef = useRef<HTMLDivElement>(null);
    const focusInsideRef = useRef(false);

    useEffect(() => {
        setSearchValue("");
        if (showMenu && searchRef.current) {
            searchRef.current.focus();
        }
    }, [showMenu]);

    // Åpne/lukke meny
    useEffect(() => {
        const handler = (e: globalThis.MouseEvent) => {
            if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
                setShowMenu(false);
            }
        };

        window.addEventListener("click", handler);
        return () => {
            window.removeEventListener("click", handler);
        };
    }, []);

    const handleInputClick = useCallback(() => {
        setShowMenu((prevState) => !prevState);
    }, []);

    // Funksjon for å rendre verdi i input-feltet
    const getDisplay = () => {
        return (
            <div className="jkl-combobox__tags">
                {selectedValue.map(getComboboxValuePair).map((option) => (
                    <Tag
                        key={option.value}
                        aria-hidden
                        density="compact"
                        className="jkl-tag"
                        dismissAction={{ onClick: (e) => onTagRemove(e, option.value), label: "Fjern tag" }}
                    >
                        {option.tagLabel ? option.tagLabel : option.label}
                    </Tag>
                ))}
                <input
                    id={inputId}
                    className="jkl-combobox__search-input"
                    onChange={onSearch}
                    data-testid="jkl-combobox__search-input"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    value={searchValue}
                    ref={searchRef}
                    aria-controls={listId}
                    role="combobox"
                    aria-autocomplete="list"
                    aria-expanded={showMenu}
                    placeholder={selectedValue.length > 0 ? "" : placeholder}
                />
            </div>
        );
    };

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
            target: { name, value: option, selectedOptions: selectedValue },
        });
        e.stopPropagation();
    };

    const onTagRemoveAll = () => {
        setSelectedValue([]);
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
                target: { name, value: option, selectedOptions: selectedValue },
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

    // Funkjson for å hente options
    const getOptions = () => {
        if (!searchValue) {
            return items;
        }

        return items.filter((option) => option.label.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0);
    };

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
                            value: selectedValue?.[0].value || "",
                            selectedOptions: selectedValue,
                        },
                    });
                    inputRef.current?.dispatchEvent(new Event("focusout", { bubbles: true }));
                }
                focusInsideRef.current = false;
                setShowMenu(true);
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
    const handleOnKeyDown = useCallback(
        (e: KeyboardEvent<HTMLDivElement>) => {
            if ((e.key === "ArrowDown" || e.key === " ") && !showMenu) {
                e.preventDefault();
                e.stopPropagation();
                setShowMenu(true);
            } else if (e.key === "Escape") {
                e.preventDefault();
                e.stopPropagation();
                setShowMenu(false);
            }
        },
        [setShowMenu, showMenu],
    );

    const handleOptionOnKeyDown = useCallback(
        (e: KeyboardEvent<HTMLButtonElement>) => {
            if (e.key === "Tab") {
                e.preventDefault();
                e.stopPropagation();

                if (e.shiftKey && searchRef.current) {
                    searchRef.current.focus();
                } else if (inputRef.current) {
                    // Mimic behaviour of Firefox and native select, where Tab selects the current item and closes the menu
                    onItemClick(e.currentTarget.value);
                    setShowMenu(false);
                    inputRef.current.focus();
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

    return (
        <InputGroup
            label={label}
            id={buttonId}
            ref={componentRootElementRef}
            data-testid="jkl-combobox"
            className={cn("jkl-combobox", className, {
                "jkl-combobox--invalid": !!errorLabel || invalid,
            })}
            labelProps={{
                id: labelId,
                ...labelProps,
                htmlFor: buttonId,
            }}
            helpLabel={helpLabel}
            errorLabel={errorLabel}
            render={(inputProps) => (
                <div className={`jkl-combobox__wrapper ${showMenu && "menu-open"}`} style={{ width }}>
                    <div
                        {...inputProps}
                        ref={inputRef}
                        onClick={handleInputClick}
                        onKeyDown={handleOnKeyDown}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        className={`jkl-combobox__button ${showMenu && "menu-open"}`}
                        aria-label={`${selectedValue || "Velg"},${label}`}
                        aria-expanded={showMenu}
                        role="button"
                        tabIndex={-1}
                    >
                        {getDisplay()}
                        <div
                            className="jkl-combobox__menu"
                            role="listbox"
                            ref={dropdownRef}
                            id={listId}
                            aria-labelledby={labelId}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            tabIndex={-1}
                        >
                            {getOptions().map((option, i) => (
                                <>
                                    <button
                                        key={`${listId}-${option.value}`}
                                        type="button"
                                        id={`${listId}__${option.value}`}
                                        aria-selected={option.value === selectedValue?.[0].value}
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
                                            e.stopPropagation();
                                            onItemClick(option.value);
                                            setSearchValue("");
                                        }}
                                        onMouseOver={handleMouseOver}
                                    >
                                        {option.label}
                                        {isSelected(option) ? <CheckIcon /> : null}
                                    </button>
                                </>
                            ))}
                        </div>
                        <div className="jkl-combobox__actions">
                            {selectedValue.length > 0 && (
                                <IconButton onClick={() => onTagRemoveAll()}>
                                    <CloseIcon />
                                </IconButton>
                            )}
                            <ArrowVerticalAnimated variant="medium" pointingDown={isPoitingDown} />
                        </div>
                    </div>
                </div>
            )}
        />
    );
};
Combobox.displayName = "Combobox";
