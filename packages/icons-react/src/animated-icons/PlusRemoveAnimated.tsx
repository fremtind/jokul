import cx from "classnames";
import React, { FC } from "react";
import { PlusIcon } from "../icons/plus/PlusIcon";
import { IconVariant } from "../icons/types";

export interface PlusRemoveAnimatedProps {
    className?: string;
    isPlus: boolean;
    variant?: IconVariant;
    bold?: boolean;
}

export const PlusRemoveAnimated: FC<PlusRemoveAnimatedProps> = ({
    className,
    isPlus,
    variant = "inherit",
    bold = false,
    ...rest
}) => (
    <div
        {...rest}
        className={cx(
            "jkl-icon",
            `jkl-icon--${variant}`,
            "jkl-icons-animated__plus",
            `jkl-icons-animated__plus--${isPlus ? "plus" : "close"}`,
            className,
        )}
    >
        <PlusIcon variant={variant} bold={bold} />
    </div>
);

PlusRemoveAnimated.displayName = "PlusRemoveAnimated";
