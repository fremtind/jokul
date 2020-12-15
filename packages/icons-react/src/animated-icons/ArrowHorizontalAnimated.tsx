import React, { FC } from "react";
import { ArrowLeft } from "../icons/ArrowLeft";
import { ArrowRight } from "../icons/ArrowRight";
import { variants } from "../icons/types";

interface Props {
    pointingRight: boolean;
    variant?: variants;
}

export const ArrowHorizontalAnimated: FC<Props> = ({ pointingRight, variant = "small" }) => {
    const iconSize = variant !== "inherit" ? variant : "small";
    return (
        <div className={`jkl-icon--${iconSize} jkl-animated-horizontal-arrows`}>
            <div
                className={`jkl-animated-horizontal-arrows__slider jkl-animated-horizontal-arrows__slider--${
                    pointingRight ? "right" : "left"
                }`}
            >
                <ArrowRight variant={iconSize} />
                <ArrowLeft variant={iconSize} />
            </div>
        </div>
    );
};

ArrowHorizontalAnimated.displayName = "ArrowHorizontalAnimated";
