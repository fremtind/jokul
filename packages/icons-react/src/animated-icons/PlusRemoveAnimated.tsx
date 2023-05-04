import cn from "classnames";
import React, { type FC } from "react";
import { PlusIcon } from "../icons/plus/PlusIcon";
import { type IconVariant } from "../icons/types";

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
        className={cn("jkl-icon", "jkl-icon--animated", `jkl-icon--${variant}`, { "jkl-icon--bold": bold }, className)}
    >
        <PlusIcon
            variant={variant}
            bold={bold}
            className={cn("jkl-icons-animated__plus", `jkl-icons-animated__plus--${isPlus ? "plus" : "close"}`)}
        />
    </div>
);

PlusRemoveAnimated.displayName = "PlusRemoveAnimated";
