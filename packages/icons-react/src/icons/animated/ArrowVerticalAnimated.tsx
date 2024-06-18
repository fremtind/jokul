import cn from "classnames";
import React, { type FC } from "react";
import { type IconVariant } from "../../types";
import { ArrowDownIcon } from "../ArrowDownIcon";
import { ArrowUpIcon } from "../ArrowUpIcon";

export interface ArrowVerticalAnimatedProps {
    className?: string;
    pointingDown: boolean;
    variant?: IconVariant;
    bold?: boolean;
}

export const ArrowVerticalAnimated: FC<ArrowVerticalAnimatedProps> = ({
    className,
    pointingDown,
    variant = "inherit",
    bold = false,
    ...rest
}) => (
    <div
        {...rest}
        className={cn(
            "jkl-icon",
            "jkl-icon--animated",
            `jkl-icon--${variant}`,
            { "jkl-icon--bold": bold },
            "jkl-animated-vertical-arrows",
            className,
        )}
    >
        <div className="jkl-animated-vertical-arrows__slider" data-show={pointingDown ? "down" : "up"}>
            <ArrowDownIcon className="jkl-animated-vertical-arrows__arrow" variant={variant} bold={bold} />
            <ArrowUpIcon className="jkl-animated-vertical-arrows__arrow" variant={variant} bold={bold} />
        </div>
    </div>
);

ArrowVerticalAnimated.displayName = "ArrowVerticalAnimated";
