import React, { FC } from "react";
import { ArrowUp } from "../icons/ArrowUp";
import { ArrowDown } from "../icons/ArrowDown";
import { variants } from "../icons/types";

interface Props {
    pointingDown: boolean;
    variant?: variants;
}

export const ArrowVerticalAnimated: FC<Props> = ({ pointingDown, variant = "small" }) => {
    const iconSize = variant !== "inherit" ? variant : "small";

    return (
        <div className={`jkl-icon--${iconSize} jkl-animated-vertical-arrows`}>
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
