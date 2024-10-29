import clsx from "clsx";
import React, { type FC } from "react";
import { IconVariant } from "../../types.js";
import { ArrowDownIcon } from "../ArrowDownIcon.js";
import { ArrowUpIcon } from "../ArrowUpIcon.js";

export interface ArrowVerticalAnimatedProps {
    className?: string;
    pointingDown: boolean;
    variant?: IconVariant;
    bold?: boolean;
}

export const ArrowVerticalAnimated: FC<ArrowVerticalAnimatedProps> = ({
    className,
    pointingDown,
    variant,
    bold = false,
    ...rest
}) => (
    <div
        {...rest}
        className={clsx(
            "jkl-icon",
            "jkl-icon--animated",
            {
                "jkl-icon--bold": bold,
                [`jkl-icon--${variant}`]: !!variant,
            },
            "jkl-animated-vertical-arrows",
            className,
        )}
    >
        <div
            className="jkl-animated-vertical-arrows__slider"
            data-show={pointingDown ? "down" : "up"}
        >
            <ArrowUpIcon
                className="jkl-animated-vertical-arrows__arrow"
                variant={variant}
                bold={bold}
            />
            <ArrowDownIcon
                className="jkl-animated-vertical-arrows__arrow"
                variant={variant}
                bold={bold}
            />
        </div>
    </div>
);

ArrowVerticalAnimated.displayName = "ArrowVerticalAnimated";
