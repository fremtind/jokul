import { CloseIcon, CheckIcon } from "@fremtind/jkl-icons-react";
import React, { Dispatch, FC, SetStateAction, useState } from "react";

interface ComboboxOptionItemProps {
    value: string;
    label: string;
    option: any;
    isSelected: (option: { value: any }) => boolean;
    setSearchValue: Dispatch<SetStateAction<string>>;
    onItemClick: Function;
}

export const ComboboxOptionItem: FC<ComboboxOptionItemProps> = ({
    option,
    value,
    label,
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
            <option key={value}>{label}</option>
            {isSelected(option) ? <>{isHovered ? <CloseIcon /> : <CheckIcon />}</> : null}
        </div>
    );
};
