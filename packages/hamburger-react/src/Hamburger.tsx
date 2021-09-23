import React from "react";
import { ContentToggle } from "@fremtind/jkl-content-toggle-react";
import classnames from "classnames";

interface Props {
    isOpen: boolean;
    onClick: (() => void) | ((evt: React.MouseEvent) => void);
    className?: string;
    /** @deprecated use data-theme["dark|light"] where possible in stead. this prop is to support IE11 */
    inverted?: boolean;
    description?: string;
    actionLabel?: {
        open: string;
        close: string;
        animated?: boolean;
        position?: "before" | "after";
    };
}

export const Hamburger = ({
    isOpen,
    onClick,
    inverted = false,
    description = "Hovedmeny",
    className,
    actionLabel,
}: Props) => {
    const componentClassname = classnames(
        "jkl-hamburger",
        {
            "jkl-hamburger--is-open": isOpen,
            "jkl-hamburger--inverted": inverted,
            "jkl-hamburger--label-before": actionLabel?.position === "before",
            "jkl-hamburger--label-after": actionLabel && actionLabel.position !== "before",
        },
        className,
    );

    const labelClassname = classnames("jkl-hamburger__label", {
        "jkl-hamburger__label--animated": actionLabel?.animated,
    });

    return (
        <button
            type="button"
            aria-label={description}
            onClick={onClick}
            className={componentClassname}
            data-testid="jkl-hamburger"
        >
            <span className="jkl-hamburger__lines"></span>
            {actionLabel && (
                <ContentToggle
                    className={labelClassname}
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
