import clsx from "clsx";
import React, { type FC } from "react";
import { ArrowDownIcon } from "../ArrowDownIcon.js";
import { ArrowUpIcon } from "../ArrowUpIcon.js";

export interface ArrowVerticalAnimatedProps {
    className?: string;
    pointingDown: boolean;
    bold?: boolean;
}

export const ArrowVerticalAnimated: FC<ArrowVerticalAnimatedProps> = ({
    className,
    pointingDown,
    bold = false,
    ...rest
}) => (
    <div
        {...rest}
        className={clsx(
            "jkl-icon--animated",
            {
                "jkl-icon--bold": bold,
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
                bold={bold}
            />
            <ArrowDownIcon
                className="jkl-animated-vertical-arrows__arrow"
                bold={bold}
            />
        </div>
    </div>
);
