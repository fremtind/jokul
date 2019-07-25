import React from "react";

interface Props {
    className?: string;
    onClick?: (isActive: boolean) => void;
    initialIsActive?: boolean;
    negative?: boolean;
    description?: string;
}

export const Hamburger = ({
    className = "",
    initialIsActive = false,
    negative = false,
    description = "Hovedmeny",
    onClick,
}: Props) => {
    const [isActive, toggleIsActive] = React.useState(initialIsActive);
    const toggleActive = () => {
        const nextActive = !isActive;
        toggleIsActive(nextActive);
        if (onClick) {
            onClick(nextActive);
        }
    };

    return (
        <button
            type="button"
            aria-label={description}
            onClick={toggleActive}
            className={`jkl-hamburger ${isActive ? "jkl-hamburger--is-active" : ""} ${
                negative ? "jkl-hamburger--negative" : ""
            } ${className}`}
        >
            <span className="jkl-hamburger__box">
                <span className="jkl-hamburger__inner"></span>
            </span>
        </button>
    );
};
