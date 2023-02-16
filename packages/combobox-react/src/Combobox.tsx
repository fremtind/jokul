import { ValuePair, getValuePair } from "@fremtind/jkl-core";
import { IconButton } from "@fremtind/jkl-icon-button-react";
import { ArrowVerticalAnimated, CheckIcon, CloseIcon } from "@fremtind/jkl-icons-react";
import { InputGroup, type LabelProps } from "@fremtind/jkl-input-group-react";
import { InputGroupProps } from "@fremtind/jkl-input-group-react/src";
import { useId, useAnimatedHeight } from "@fremtind/jkl-react-hooks";
import { useListNavigation } from "@fremtind/jkl-select-react/src/useListNavigation";
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
} from "react";

interface PartialChangeEvent extends Partial<Omit<ChangeEvent<HTMLSelectElement>, "target">> {
    type: "change" | "blur";
    target: {
        name: string;
        value: string;
    };
}

type ChangeEventHandler = (event: PartialChangeEvent) => void;

interface ComboboxProps extends InputGroupProps {
    id?: string;
    placeholder?: string;
    labelProps?: Omit<LabelProps, "children" | "density" | "htmlFor" | "standAlone">;
    items: Array<string | ValuePair>;
    label: string;
    name: string;
    value?: Array<string> | string;
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
    const listId = useId(id || "jkl-select", { generateSuffix: !id });
    const labelId = `${listId}_label`;
    const buttonId = `${listId}_button`;
    const inputId = `${listId}_search-input`;

    const [selectedValue, setSelectedValue] = useState(typeof value === "string" ? [value] : value || []);
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
        const handler = (e: any) => {
            if (inputRef.current && !inputRef.current.contains(e.target)) {
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
                {selectedValue.map((option) => (
                    <Tag
                        aria-hidden
                        key={option.value}
                        density="compact"
                        className="jkl-tag"
                        dismissAction={{ onClick: (e) => onTagRemove(e, option), label: "Fjern tag" }}
                    >
                        {option.label}
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
                    placeholder={selectedValue.length > 0 ? "" : placeholder}
                />
            </div>
        );
    };

    // Funksjon for å stile valgt element
    const isSelected = (option: { value: string }) => {
        if (!selectedValue) {
            return false;
        } else {
            return selectedValue.some((value) => value === option.value);
        }
    };

    // Fjerne ett eller flere valg
    const removeOption = (option: ValuePair) => {
        return selectedValue.filter((value) => value !== option.value);
    };

    const onTagRemove = (e: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, option: any) => {
        const newValue = removeOption(option);
        setSelectedValue(newValue);
        onChange({ type: "change", target: { name, value: option.value } });
        e.stopPropagation();
    };

    const onTagRemoveAll = (e: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
        setSelectedValue([]);
    };

    // Håndtere valgt verdi i listen
    const onItemClick = (option: ValuePair) => {
        let newValue: Array<string>;

        if (selectedValue.some((value) => value === option.value)) {
            newValue = removeOption(option);
        } else {
            newValue = [...selectedValue, option.value];
        }
        searchRef.current?.focus();
        setSelectedValue(newValue);
        onChange({ type: "change", target: { name, value: option.value } });
    };

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

        return items.filter(
            (option) => getValuePair(option).label.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0,
        );
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
            if (e.key === "Escape") {
                setShowMenu(false);
            }
        };
        if (typeof window !== "undefined") {
            window.addEventListener("keydown", handleEscape);
        }
        return () => {
            if (typeof window !== "undefined") {
                window.removeEventListener("keydown", handleEscape);
            }
        };
    }, [setShowMenu]);

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
                onFocus({ type: "change", target: { name, value: selectedValue || "" } });
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
                    onBlur({ type: "blur", target: { name, value: selectedValue || "" } });
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
            if (e.key === "ArrowDown" || e.key === " ") {
                e.preventDefault();
                e.stopPropagation();
                setShowMenu(true);
            } else if (e.key === "Escape") {
                e.preventDefault();
                e.stopPropagation();
                setShowMenu(false);
            }
        },
        [setShowMenu],
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
                    setSelectedValue(e.currentTarget.value);
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
        [setShowMenu, dropdownRef],
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
                            {getOptions().map((option: { value: string; label: string }, i) => (
                                <>
                                    <button
                                        key={`${listId}-${option.value}`}
                                        type="button"
                                        id={`${listId}__${option.value}`}
                                        aria-selected={option.value === selectedValue}
                                        role="option"
                                        value={option.value}
                                        onBlur={handleBlur}
                                        className={`jkl-combobox__option ${isSelected(option) && "selected"}`}
                                        data-testid="jkl-combobox__option"
                                        data-testautoid={`jkl-combobox__option-${i}`}
                                        onFocus={handleFocus}
                                        onKeyDown={handleOptionOnKeyDown}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            onItemClick(option);
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
                                <IconButton onClick={(e) => onTagRemoveAll(e)}>
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
