import clsx from "clsx";
import React, { type FC } from "react";
import { ArrowLeftIcon } from "../ArrowLeftIcon.js";
import { ArrowRightIcon } from "../ArrowRightIcon.js";

export interface ArrowHorizontalAnimatedProps {
    className?: string;
    pointingRight: boolean;
    bold?: boolean;
}

export const ArrowHorizontalAnimated: FC<ArrowHorizontalAnimatedProps> = ({
    className,
    pointingRight,
    bold = false,
    ...rest
}) => (
    <div
        {...rest}
        className={clsx(
            "jkl-icon--animated",
            { "jkl-icon--bold": bold },
            "jkl-animated-horizontal-arrows",
            className,
        )}
    >
        <div
            className="jkl-animated-horizontal-arrows__slider"
            data-show={pointingRight ? "right" : "left"}
        >
            <ArrowLeftIcon
                className="jkl-animated-horizontal-arrows__arrow"
                bold={bold}
            />
            <ArrowRightIcon
                className="jkl-animated-horizontal-arrows__arrow"
                bold={bold}
            />
        </div>
    </div>
);
