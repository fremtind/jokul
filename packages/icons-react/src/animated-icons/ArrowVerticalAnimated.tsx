import cx from "classnames";
import React from "react";
import { ArrowDownIcon } from "../icons/arrow-down/ArrowDownIcon";
import { ArrowUpIcon } from "../icons/arrow-up/ArrowUpIcon";
import { IconVariant } from "../icons/types";

export interface ArrowVerticalAnimatedProps {
    className?: string;
    pointingDown: boolean;
    variant?: IconVariant;
}

export const ArrowVerticalAnimated = ({
    className = "",
    pointingDown,
    variant = "small",
    ...rest
}: ArrowVerticalAnimatedProps) => {
    const iconSize = variant !== "inherit" ? variant : "small";

    return (
        <div {...rest} className={cx(`jkl-icon jkl-icon--${iconSize}`, "jkl-animated-vertical-arrows", className)}>
            <div className="jkl-animated-vertical-arrows__slider" data-show={pointingDown ? "down" : "up"}>
                <ArrowDownIcon variant={iconSize} />
                <ArrowUpIcon variant={iconSize} />
            </div>
        </div>
    );
};

ArrowVerticalAnimated.displayName = "ArrowVerticalAnimated";
