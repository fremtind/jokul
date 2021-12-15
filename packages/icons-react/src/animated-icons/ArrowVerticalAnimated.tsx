import React from "react";
import cx from "classnames";
import { ArrowUp } from "../icons/ArrowUp";
import { ArrowDown } from "../icons/ArrowDown";
import { variants } from "../icons/types";

interface Props {
    className?: string;
    pointingDown: boolean;
    variant?: variants;
}

export const ArrowVerticalAnimated = ({ className = "", pointingDown, variant = "small" }: Props) => {
    const iconSize = variant !== "inherit" ? variant : "small";

    return (
        <div className={cx(`jkl-icon--${iconSize}`, "jkl-animated-vertical-arrows", className)}>
            <div
                className={`jkl-animated-vertical-arrows__slider jkl-animated-vertical-arrows__slider--${
                    pointingDown ? "down" : "up"
                }`}
            >
                <ArrowDown variant={iconSize} />
                <ArrowUp variant={iconSize} />
            </div>
        </div>
    );
};

ArrowVerticalAnimated.displayName = "ArrowVerticalAnimated";
