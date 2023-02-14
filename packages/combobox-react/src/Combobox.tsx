import { IconButton } from "@fremtind/jkl-icon-button-react";
import { ArrowVerticalAnimated, CloseIcon } from "@fremtind/jkl-icons-react";
import { InputGroup } from "@fremtind/jkl-input-group-react";
import { InputGroupProps } from "@fremtind/jkl-input-group-react/src";
import { useAnimatedHeight } from "@fremtind/jkl-react-hooks";
import { focusSelected } from "@fremtind/jkl-select-react/src/select-utils";
import { useListNavigation } from "@fremtind/jkl-select-react/src/useListNavigation";
import { Tag } from "@fremtind/jkl-tag-react";
import React, {
    FC,
    useEffect,
    useRef,
    useState,
    useCallback,
    KeyboardEvent,
    ChangeEvent,
    RefObject,
    FocusEvent,
} from "react";
import { ComboboxOptionItem } from "./ComboboxOptionItem";

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

interface ComboboxProps extends InputGroupProps {
    placeholder?: string;
    items: Array<{ value: string; label: string }>;
    label: string;
    name: string;
    value?: string;
    width?: string;
    onChange: ChangeEventHandler;
    onBlur?: ChangeEventHandler;
    onFocus?: ChangeEventHandler;
}

export const Combobox: FC<ComboboxProps> = ({
    placeholder,
    items,
    onChange,
    onFocus,
    onBlur,
    value,
    label,
    width,
    name,
}) => {
    const [selectedValue, setSelectedValue] = useState<any>(value || "");
    const [isPoitingDown, setIsPointingDown] = useState(true);
    const [showMenu, setShowMenu] = useState(false);
    const [searchValue, setSearchValue] = useState<string>("");
    const searchRef = useRef<any>();
    const inputRef = useRef<any>();
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
                {selectedValue.map((option: { value: string; label: string }) => (
                    <Tag
                        aria-hidden
                        key={option.value}
                        className="jkl-combobox__tag"
                        dismissAction={{ onClick: (e) => onTagRemove(e, option), label: "Fjern tag" }}
                    >
                        {option.label}
                    </Tag>
                ))}
                <input
                    className="jkl-combobox__search-input"
                    onChange={onSearch}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    value={searchValue}
                    ref={searchRef}
                    placeholder={selectedValue.length > 0 ? "" : placeholder}
                />
            </div>
        );
    };

    // Fjerne ett eller flere valg
    const removeOption = (option: { value: string }) => {
        return selectedValue.filter((o: { value: string }) => o.value !== option.value);
    };

    const onTagRemove = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>, option: any) => {
        const newValue = removeOption(option);
        setSelectedValue(newValue);
        onChange(newValue);
        e.stopPropagation();
    };

    const onTagRemoveAll = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        setSelectedValue([]);
    };

    // Håndtere valgt verdi i listen
    const onItemClick = (option: { value: string }) => {
        let newValue;

        if (selectedValue.findIndex((o: { value: string }) => o.value === option.value) >= 0) {
            newValue = removeOption(option);
        } else {
            newValue = [...selectedValue, option];
        }
        searchRef.current.focus();
        setSelectedValue(newValue);
        onChange(newValue);
    };

    // Funksjon for å stile valgt element
    const isSelected = (option: { value: string }) => {
        if (!selectedValue) {
            return false;
        } else {
            return selectedValue.filter((o: { value: string }) => o.value === option.value).length > 0;
        }
    };

    // Funksjon for søk
    const onSearch = (e: { target: { value: React.SetStateAction<string> } }) => {
        setShowMenu(true);
        setSearchValue(e.target.value);
    };

    // Funkjson for å hente options
    const getOptions = () => {
        if (!searchValue) {
            return items;
        }

        return items.filter(
            (option: { label: string }) => option.label.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0,
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
    const handleFocusPlacement = useCallback(
        (isOpen: boolean, ref: RefObject<HTMLElement>) => {
            if (isOpen) {
                const listElement = ref.current;
                if (listElement) {
                    focusSelected(listElement, selectedValue);
                }
            } else if (isOpen) {
                if (searchRef.current) {
                    searchRef.current.focus();
                }
            } else {
                if (focusInsideRef.current && inputRef.current) {
                    inputRef.current.focus();
                }
            }
        },
        [selectedValue],
    );

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

    const componentRootElementRef = useRef<HTMLDivElement>(null);

    useListNavigation({ ref: inputRef });

    const handleBlur = useCallback(
        (e: FocusEvent<HTMLDivElement | HTMLInputElement | HTMLButtonElement>) => {
            const componentRootElement = componentRootElementRef.current;
            // There are known issues in Firefox when using "relatedTarget" in onBlur events:
            // https://github.com/facebook/react/issues/2011
            // This might be fixed in react 17. Se issue above.
            const nextFocusIsInsideComponent =
                componentRootElement && componentRootElement.contains(e.relatedTarget as Node);
            if (!nextFocusIsInsideComponent) {
                setSearchValue("");

                if (onBlur) {
                    onBlur({ type: "blur", target: { name, value: selectedValue || "" } });
                    inputRef.current?.dispatchEvent(new Event("focusout", { bubbles: true }));
                }
                focusInsideRef.current = false;
                setShowMenu(false);
            }
        },
        [onBlur, name, selectedValue],
    );

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

    return (
        <InputGroup label={label} ref={componentRootElementRef}>
            <div className={`jkl-combobox__wrapper ${showMenu && "menu-open"}`} style={{ width }}>
                <div
                    ref={inputRef}
                    onClick={handleInputClick}
                    onKeyDown={handleOnKeyDown}
                    onBlur={handleBlur}
                    className={`jkl-combobox__button ${showMenu && "menu-open"}`}
                    aria-label={`${selectedValue || "Velg"},${label}`}
                    role="button"
                    tabIndex={-1}
                >
                    {getDisplay()}
                    <div className="jkl-combobox__actions">
                        {selectedValue.length > 0 && (
                            <IconButton onClick={(e) => onTagRemoveAll(e)}>
                                <CloseIcon />
                            </IconButton>
                        )}
                        <ArrowVerticalAnimated variant="medium" pointingDown={isPoitingDown} />
                    </div>
                </div>
                {showMenu && (
                    <div className="jkl-combobox__menu" role="listbox" tabIndex={-1}>
                        {getOptions().map((option: { value: string; label: string }) => (
                            <ComboboxOptionItem
                                key={option.value}
                                option={option}
                                value={option.value}
                                label={option.label}
                                isSelected={isSelected}
                                selectedValue={selectedValue}
                                setSearchValue={setSearchValue}
                                onItemClick={onItemClick}
                                onFocus={handleFocus}
                            />
                        ))}
                    </div>
                )}
            </div>
        </InputGroup>
    );
};
