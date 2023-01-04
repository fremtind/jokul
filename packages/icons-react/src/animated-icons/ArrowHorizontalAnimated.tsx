import cx from "classnames";
import React, { FC } from "react";
import { ArrowLeftIcon } from "../icons/arrow-left/ArrowLeftIcon";
import { ArrowRightIcon } from "../icons/arrow-right/ArrowRightIcon";
import { IconVariant } from "../icons/types";

export interface ArrowHorizontalAnimatedProps {
    className?: string;
    pointingRight: boolean;
    variant?: IconVariant;
}

export const ArrowHorizontalAnimated: FC<ArrowHorizontalAnimatedProps> = ({
    className,
    pointingRight,
    variant = "small",
    ...rest
}) => (
    <div {...rest} className={cx(`jkl-icon jkl-icon--${variant}`, "jkl-animated-horizontal-arrows", className)}>
        <div className="jkl-animated-horizontal-arrows__slider" data-show={pointingRight ? "right" : "left"}>
            <ArrowRightIcon variant={variant} />
            <ArrowLeftIcon variant={variant} />
        </div>
    </div>
);

ArrowHorizontalAnimated.displayName = "ArrowHorizontalAnimated";
