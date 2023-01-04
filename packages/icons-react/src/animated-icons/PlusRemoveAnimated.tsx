import cx from "classnames";
import React, { FC } from "react";
import { PlusIcon } from "../icons/plus/PlusIcon";
import { IconVariant } from "../icons/types";

export interface PlusRemoveAnimatedProps {
    className?: string;
    isPlus: boolean;
    variant?: IconVariant;
}

export const PlusRemoveAnimated: FC<PlusRemoveAnimatedProps> = ({ className, isPlus, variant = "small", ...rest }) => {
    const iconSize = variant !== "inherit" ? variant : "small";
    return (
        <div
            {...rest}
            className={cx(
                "jkl-icon",
                `jkl-icon--${iconSize}`,
                "jkl-icons-animated__plus",
                `jkl-icons-animated__plus--${isPlus ? "plus" : "close"}`,
                className,
            )}
        >
            <PlusIcon variant={iconSize} />
        </div>
    );
};

PlusRemoveAnimated.displayName = "PlusRemoveAnimated";
