import React from "react";
import { ContentToggle } from "@fremtind/jkl-content-toggle-react";
import classnames from "classnames";

interface Props {
    isOpen: boolean;
    onClick: () => void;
    className?: string;
    /** @deprecated use data-theme["dark|light"] where possible in stead. this prop is to support IE11 */
    inverted?: boolean;
    description?: string;
    actionLabel?: {
        open: string;
        close: string;
    };
}

export const Hamburger = ({
    isOpen,
    onClick,
    inverted = false,
    description = "Hovedmeny",
    className = "",
    actionLabel,
}: Props) => {
    const componentClassname = classnames(
        "jkl-hamburger",
        {
            "jkl-hamburger--is-open": isOpen,
            "jkl-hamburger--inverted": inverted,
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
            <span className="jkl-hamburger__inner"></span>
            {actionLabel && (
                <ContentToggle
                    className="jkl-hamburger__label"
                    secondary={actionLabel.close}
                    showSecondary={isOpen}
                    variant="fade"
                >
                    {actionLabel.open}
                </ContentToggle>
            )}
        </button>
    );
};
