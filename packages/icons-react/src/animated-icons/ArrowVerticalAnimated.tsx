import clsx from "clsx";
import React, { type FC } from "react";
import { ArrowDownIcon } from "../icons/arrow-down/ArrowDownIcon";
import { ArrowUpIcon } from "../icons/arrow-up/ArrowUpIcon";
import { type IconVariant } from "../icons/types";

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
        className={clsx(
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
