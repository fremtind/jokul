import { CloseIcon, CheckIcon } from "@fremtind/jkl-icons-react";
import React, { Dispatch, FC, SetStateAction, useState } from "react";

interface ComboboxOptionItemProps {
    option: { value: string; label: string };
    selectedValue: any;
    setSearchValue: Dispatch<SetStateAction<string>>;
    onItemClick: Function;
}

export const ComboboxOptionItem: FC<ComboboxOptionItemProps> = ({
    option,
    selectedValue,
    setSearchValue,
    onItemClick,
}) => {
    const [isHovered, setIsHovered] = useState(false);

    const toggleHover = () => {
        setIsHovered((prevState) => !prevState);
    };

    // Funksjon for å stile valgt element
    const isSelected = (option: { value: string }) => {
        if (!selectedValue) {
            return false;
        } else {
            return selectedValue.filter((o: { value: string }) => o.value === option.value).length > 0;
        }
    };

    return (
        <div
            aria-hidden
            key={option.value}
            onClick={(e) => {
                e.stopPropagation();
                onItemClick(option);
                setSearchValue("");
            }}
            className={`jkl-combobox__option ${isSelected(option) && "selected"}`}
        >
            <button
                type="button"
                role="option"
                aria-selected={option.value === selectedValue}
                onMouseEnter={toggleHover}
                onMouseLeave={toggleHover}
            >
                {option.label}
            </button>
            {isSelected(option) ? <>{isHovered ? <CloseIcon /> : <CheckIcon />}</> : null}
        </div>
    );
};
