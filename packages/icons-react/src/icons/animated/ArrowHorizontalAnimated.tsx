import cn from "classnames";
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
        className={cn(
            "jkl-icon",
            "jkl-icon--animated",
            `jkl-icon--${variant}`,
            { "jkl-icon--bold": bold },
            "jkl-animated-horizontal-arrows",
            className,
        )}
    >
        <div className="jkl-animated-horizontal-arrows__slider" data-show={pointingRight ? "right" : "left"}>
            <ArrowRightIcon className="jkl-animated-horizontal-arrows__arrow" variant={variant} bold={bold} />
            <ArrowLeftIcon className="jkl-animated-horizontal-arrows__arrow" variant={variant} bold={bold} />
        </div>
    </div>
);

ArrowHorizontalAnimated.displayName = "ArrowHorizontalAnimated";
