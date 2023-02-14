import { CloseIcon, CheckIcon } from "@fremtind/jkl-icons-react";
import React, { Dispatch, FC, SetStateAction, useState } from "react";

interface ComboboxOptionItemProps {
    value: string;
    label: string;
    option: { value: string; label: string };
    selectedValue: string;
    isSelected: (option: { value: string }) => boolean;
    setSearchValue: Dispatch<SetStateAction<string>>;
    onItemClick: Function;
}

export const ComboboxOptionItem: FC<ComboboxOptionItemProps> = ({
    option,
    value,
    label,
    selectedValue,
    isSelected,
    setSearchValue,
    onItemClick,
}) => {
    const [isHovered, setIsHovered] = useState(false);

    const toggleHover = () => {
        setIsHovered((prevState) => !prevState);
    };
    return (
        <div
            aria-hidden
            key={value}
            onClick={(e) => {
                // Hindre at liste lukker seg ved select/deselect av items i listen
                e.stopPropagation();
                onItemClick(option);
                setSearchValue("");
            }}
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
            className={`jkl-combobox__option ${isSelected(option) && "selected"}`}
        >
            <button key={value} type="button" role="option" aria-selected={option.value === selectedValue}>
                {label}
            </button>
            {isSelected(option) ? <>{isHovered ? <CloseIcon /> : <CheckIcon />}</> : null}
        </div>
    );
};
