import clsx from "clsx";
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
    variant = "inherit",
    bold = false,
    ...rest
}) => (
    <div
        {...rest}
        className={clsx(
            "jkl-icon",
            "jkl-icon--animated",
            `jkl-icon--${variant}`,
            { "jkl-icon--bold": bold },
            className,
        )}
    >
        <PlusIcon
            variant={variant}
            bold={bold}
            className={clsx("jkl-icons-animated__plus", `jkl-icons-animated__plus--${isPlus ? "plus" : "close"}`)}
        />
    </div>
);

PlusRemoveAnimated.displayName = "PlusRemoveAnimated";
