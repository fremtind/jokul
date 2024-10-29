import cn from "classnames";
import React, { type FC } from "react";
import { type IconVariant } from "../../types";
import { PlusIcon } from "../PlusIcon";

export interface PlusRemoveAnimatedProps {
    className?: string;
    isPlus: boolean;
    variant?: IconVariant;
    bold?: boolean;
}

export const PlusRemoveAnimated: FC<PlusRemoveAnimatedProps> = ({
    className,
    isPlus,
    variant,
    bold = false,
    ...rest
}) => (
    <div
        {...rest}
        className={cn(
            "jkl-icon",
            "jkl-icon--animated",
            { "jkl-icon--bold": bold, [`jkl-icon--${variant}`]: !!variant },
            className,
        )}
    >
        <PlusIcon
            variant={variant}
            bold={bold}
            className={cn(
                "jkl-icons-animated__plus",
                `jkl-icons-animated__plus--${isPlus ? "plus" : "close"}`,
            )}
        />
    </div>
);

PlusRemoveAnimated.displayName = "PlusRemoveAnimated";
