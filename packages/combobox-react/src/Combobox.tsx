import { IconButton } from "@fremtind/jkl-icon-button-react";
import { ArrowVerticalAnimated, CloseIcon, CheckIcon } from "@fremtind/jkl-icons-react";
import { Tag } from "@fremtind/jkl-tag-react";
import React, { FC, HTMLAttributes, useEffect, useRef, useState, useCallback, KeyboardEvent } from "react";

interface ComboboxProps extends HTMLAttributes<HTMLDivElement> {
    placeholder?: string;
    label?: string;
    items: any;
    value: string;
    // setSelectedValue: any;
    // selectedValue: any;
    onChange: any;
}

export const Combobox: FC<ComboboxProps> = ({ placeholder, items, onChange, value, label }) => {
    const [selectedValue, setSelectedValue] = useState<any>(value || "");
    const [isPoitingDown, setIsPointingDown] = useState(true);
    const [isHovered, setIsHovered] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [searchValue, setSearchValue] = useState<string>("");
    const searchRef = useRef<any>();
    const inputRef = useRef<any>();

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

    const handleInputClick = () => {
        setShowMenu(!showMenu);
    };

    const getDisplay = () => {
        return (
            <div className="jkl-combobox__tags">
                {selectedValue.map((option: { value: any; label: any }) => (
                    <Tag
                        key={option.value}
                        className="jkl-spacing-2xs--right jkl-spacing-2xs--top"
                        dismissAction={{ onClick: (e) => onTagRemove(e, option), label: "Fjern tag" }}
                    >
                        {option.label}
                    </Tag>
                ))}
                <input
                    className="jkl-combobox__search-input"
                    onChange={onSearch}
                    value={searchValue}
                    ref={searchRef}
                    placeholder={selectedValue.length > 0 ? "" : placeholder}
                    onClick={(e) => setShowMenu(true)}
                />
            </div>
        );
    };

    // Fjerne ett eller flere valg
    const removeOption = (option: { value: any }) => {
        return selectedValue.filter((o: { value: any }) => o.value !== option.value);
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

    const toggleHover = () => {
        setIsHovered((prevState) => !prevState);
    };

    // Håndtere valgt verdi i listen
    const onItemClick = (option: { value: any }) => {
        let newValue;

        if (selectedValue.findIndex((o: { value: any }) => o.value === option.value) >= 0) {
            newValue = removeOption(option);
        } else {
            newValue = [...selectedValue, option];
        }
        searchRef.current.focus();
        setSelectedValue(newValue);
        onChange(newValue);
    };

    // Funksjon for å stile valgt element
    const isSelected = (option: { value: any }) => {
        if (!selectedValue) {
            return false;
        } else {
            return selectedValue.filter((o: { value: any }) => o.value === option.value).length > 0;
        }
    };

    const onSearch = (e: { target: { value: React.SetStateAction<string> } }) => {
        setShowMenu(true);
        setSearchValue(e.target.value);
    };

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

    // Åpne meny med pil-ned
    const handleOnKeyDown = useCallback(
        (e: KeyboardEvent<HTMLButtonElement>) => {
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
        <div className={`jkl-combobox__wrapper ${showMenu && "menu-open"}`}>
            <div className="jkl-label jkl-label--small">{label}</div>
            <button
                ref={inputRef}
                onClick={handleInputClick}
                onKeyDown={handleOnKeyDown}
                className={`jkl-combobox__button ${showMenu && "menu-open"}`}
                type="button"
                aria-label="Søk"
            >
                <div className="jkl-combobox__content">
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
                    <div className="jkl-combobox__menu" role="listbox">
                        {getOptions().map((option: { value: any; label: any }) => (
                            <div
                                aria-hidden
                                key={option.value}
                                onClick={(e) => {
                                    // Hindre at liste lukker seg ved select/deselect av items i listen
                                    e.stopPropagation();
                                    onItemClick(option);
                                    setSearchValue("");
                                }}
                                className={`jkl-combobox__option ${isSelected(option) && "selected"}`}
                            >
                                <option key={option.value} /* onMouseEnter={toggleHover} onMouseLeave={toggleHover}*/>
                                    {option.label}
                                </option>
                                {isSelected(option) ? <>{isHovered ? <CloseIcon /> : <CheckIcon />}</> : null}
                            </div>
                        ))}
                    </div>
                )}
            </button>
        </div>
    );
};
