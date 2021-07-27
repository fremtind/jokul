import React, { useMemo } from "react";
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
        animated?: boolean;
        position?: "before" | "after";
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
            "jkl-hamburger--label-before": actionLabel?.position === "before",
            "jkl-hamburger--label-after": actionLabel && actionLabel.position !== "before",
        },
        className,
    );

    const longestLabelLength = useMemo(() => {
        if (!actionLabel) {
            return undefined;
        }

        let length = actionLabel.open.length;
        if (actionLabel.close.length > length) {
            length = actionLabel.close.length;
        }

        return length;
    }, [actionLabel]);

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
            style={
                actionLabel
                    ? {
                          //  style calculated off touch size and label length with multiplier to account for uppercase letters
                          width: `calc(3rem + ${(longestLabelLength ?? 0) * 1.75}ch`,
                      }
                    : undefined
            }
        >
            <span className="jkl-hamburger__inner"></span>
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
