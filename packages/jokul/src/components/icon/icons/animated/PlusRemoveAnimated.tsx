import clsx from "clsx";
import React, { type FC } from "react";
import { PlusIcon } from "../PlusIcon.js";

export interface PlusRemoveAnimatedProps {
    className?: string;
    isPlus: boolean;
    bold?: boolean;
}

export const PlusRemoveAnimated: FC<PlusRemoveAnimatedProps> = ({
    className,
    isPlus,
    bold = false,
    ...rest
}) => (
    <div
        {...rest}
        className={clsx(
            "jkl-icon",
            "jkl-icon--animated",
            {
                "jkl-icon--bold": bold,
            },
            className,
        )}
    >
        <PlusIcon
            bold={bold}
            className={clsx(
                "jkl-icons-animated__plus",
                `jkl-icons-animated__plus--${isPlus ? "plus" : "close"}`,
            )}
        />
    </div>
);
