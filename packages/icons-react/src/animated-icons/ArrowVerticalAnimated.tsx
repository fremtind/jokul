import cx from "classnames";
import React from "react";
import { ArrowDownIcon } from "../icons/arrow-down/ArrowDownIcon";
import { ArrowUpIcon } from "../icons/arrow-up/ArrowUpIcon";
import { IconVariant } from "../icons/types";

export interface ArrowVerticalAnimatedProps {
    className?: string;
    pointingDown: boolean;
    variant?: IconVariant;
    bold?: boolean;
}

export const ArrowVerticalAnimated = ({
    className,
    pointingDown,
    variant = "inherit",
    bold = false,
    ...rest
}: ArrowVerticalAnimatedProps) => (
    <div {...rest} className={cx(`jkl-icon jkl-icon--${variant}`, "jkl-animated-vertical-arrows", className)}>
        <div className="jkl-animated-vertical-arrows__slider" data-show={pointingDown ? "down" : "up"}>
            <ArrowDownIcon className="jkl-animated-vertical-arrows__arrow" variant={variant} bold={bold} />
            <ArrowUpIcon className="jkl-animated-vertical-arrows__arrow" variant={variant} bold={bold} />
        </div>
    </div>
);

ArrowVerticalAnimated.displayName = "ArrowVerticalAnimated";
