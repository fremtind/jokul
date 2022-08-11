import { ExpandButton } from "@fremtind/jkl-expand-button-react";
import { useId } from "@fremtind/jkl-react-hooks";
import classnames from "classnames";
import React, { HTMLAttributes, useEffect, useRef, useState } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
    label: string;
    isOpen?: boolean;
    onClick?: () => void;
}

export const Dropdown = ({ label, children, isOpen: controlledIsOpen, onClick }: Props) => {
    const [isOpen, setIsOpen] = useState(controlledIsOpen);

    const buttonId = useId("jkl-dropdown-button");
    const contentId = useId("jkl-dropdown-content");

    const clickOutsideRef = useRef<HTMLDivElement>(null);

    const handleOnClick = () => {
        if (onClick) {
            onClick();
        } else {
            setIsOpen(!isOpen);
        }
    };

    useEffect(() => {
        setIsOpen(controlledIsOpen);
    }, [controlledIsOpen]);

    const componentClasses = classnames("jkl-dropdown", {
        ["jkl-dropdown--open"]: isOpen,
        ["jkl-dropdown--closed"]: !isOpen,
    });

    return (
        <div className={componentClasses}>
            <ExpandButton
                id={buttonId}
                className="jkl-dropdown__button"
                aria-controls={contentId}
                isExpanded={isOpen}
                onClick={handleOnClick}
            >
                {label}
            </ExpandButton>

            <div
                className="jkl-dropdown__content"
                id={contentId}
                ref={clickOutsideRef}
                hidden={!isOpen}
                aria-labelledby={buttonId}
            >
                {children}
            </div>
        </div>
    );
};
