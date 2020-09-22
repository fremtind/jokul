import React from "react";

interface Props {
    className?: string;
    onClick?: () => void;
    active: boolean;
    negative?: boolean;
    description?: string;
}

export const Hamburger = ({
    className = "",
    active = false,
    negative = false,
    description = "Hovedmeny",
    onClick,
}: Props) => {
    const handleClick = () => {
        if (typeof onClick === "function") {
            return onClick();
        }
        return;
    };

    return (
        <button
            type="button"
            aria-label={description}
            onClick={handleClick}
            className={`jkl-hamburger ${active ? "jkl-hamburger--is-active" : ""} ${
                negative ? "jkl-hamburger--negative" : ""
            } ${className}`}
            data-testid="jkl-hamburger"
        >
            <span className="jkl-hamburger__inner"></span>
        </button>
    );
};
