import React, { useState } from "react";
import classnames from "classnames";

interface Props {
    isOpen: boolean;
    onClick: () => void;
    className?: string;
    /** @deprecated use data-theme["dark|light"] where possible in stead. this prop is to support IE11 */
    inverted?: boolean;
    description?: string;
    openLabel?: string;
    closeLabel?: string;
}

export const Hamburger = ({
    isOpen,
    onClick,
    inverted = false,
    description = "Hovedmeny",
    className = "",
    openLabel = "",
    closeLabel = "",
}: Props) => {
    const [canAnimate, setCanAnimate] = useState(false);
    const componentClassname = classnames(
        "jkl-hamburger",
        {
            "jkl-hamburger--is-open": isOpen,
            "jkl-hamburger--inverted": inverted,
        },
        className,
    );

    const handleClick = () => {
        setCanAnimate(true);
        onClick();
    };

    return (
        <button
            type="button"
            aria-label={description}
            onClick={handleClick}
            className={componentClassname}
            data-testid="jkl-hamburger"
        >
            <span className="jkl-hamburger__inner"></span>
            {openLabel && closeLabel && (
                <span
                    className={`jkl-hamburger__label jkl-hamburger__label--${canAnimate ? "animate" : "initial"}`}
                    aria-live="polite"
                >
                    <span className="jkl-hamburger__label--open" aria-hidden={isOpen}>
                        {openLabel}
                    </span>
                    <span className="jkl-hamburger__label--close" aria-hidden={!isOpen}>
                        {closeLabel}
                    </span>
                </span>
            )}
        </button>
    );
};
