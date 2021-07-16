import React from "react";
import classnames from "classnames";

interface Props {
    isOpen: boolean;
    onClick: () => void;
    className?: string;
    /** @deprecated use data-theme["dark|light"] where possible in stead. this prop is to support IE11 */
    inverted?: boolean;
    description?: string;
    addon?: React.ReactNode;
    addonPosition?: "before" | "after";
}

export const Hamburger = ({
    isOpen,
    onClick,
    inverted = false,
    description = "Hovedmeny",
    className = "",
    addon,
    addonPosition = "after",
}: Props) => {
    const componentClassname = classnames(
        "jkl-hamburger",
        `jkl-hamburger--addon-${addonPosition}`,
        {
            "jkl-hamburger--is-open": isOpen,
            "jkl-hamburger--inverted": inverted,
            "jkl-hamburger--has-addon": addon,
        },
        className,
    );

    return (
        <button
            type="button"
            aria-label={description}
            onClick={onClick}
            className={componentClassname}
            data-testid="jkl-hamburger"
        >
            <span className="jkl-hamburger__inner-wrapper">
                <span className="jkl-hamburger__inner"></span>
            </span>
            {addon && <span className="jkl-hamburger__addon">{addon}</span>}
        </button>
    );
};
