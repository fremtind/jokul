import clsx from "clsx";
import React, { type FC } from "react";
import { type IconVariant } from "../../types";
import { ArrowLeftIcon } from "../ArrowLeftIcon";
import { ArrowRightIcon } from "../ArrowRightIcon";

export interface ArrowHorizontalAnimatedProps {
    className?: string;
    pointingRight: boolean;
    variant?: IconVariant;
    bold?: boolean;
}

export const ArrowHorizontalAnimated: FC<ArrowHorizontalAnimatedProps> = ({
    className,
    pointingRight,
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
            "jkl-animated-horizontal-arrows",
            className,
        )}
    >
        <div className="jkl-animated-horizontal-arrows__slider" data-show={pointingRight ? "right" : "left"}>
            <ArrowLeftIcon className="jkl-animated-horizontal-arrows__arrow" variant={variant} bold={bold} />
            <ArrowRightIcon className="jkl-animated-horizontal-arrows__arrow" variant={variant} bold={bold} />
        </div>
    </div>
);

ArrowHorizontalAnimated.displayName = "ArrowHorizontalAnimated";
