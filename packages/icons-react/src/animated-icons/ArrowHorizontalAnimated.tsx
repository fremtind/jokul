import cx from "classnames";
import React, { FC } from "react";
import { ArrowLeft } from "../icons/ArrowLeft";
import { ArrowRight } from "../icons/ArrowRight";
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
}) => {
    const iconSize = variant !== "inherit" ? variant : "small";
    return (
        <div {...rest} className={cx(`jkl-icon--${iconSize}`, "jkl-animated-horizontal-arrows", className)}>
            <div className="jkl-animated-horizontal-arrows__slider" data-show={pointingRight ? "right" : "left"}>
                <ArrowRight variant={iconSize} />
                <ArrowLeft variant={iconSize} />
            </div>
        </div>
    );
};

ArrowHorizontalAnimated.displayName = "ArrowHorizontalAnimated";
