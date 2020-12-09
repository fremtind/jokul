import React, { FC } from "react";
import { Plus } from "../icons/Plus";
import { variants } from "../icons/types";

interface Props {
    isPlus: boolean;
    variant?: variants;
}

export const PlusRemoveAnimated: FC<Props> = ({ isPlus, variant = "small" }) => {
    const iconSize = variant !== "inherit" ? variant : "small";
    return (
        <div
            className={`jkl-icon--${iconSize} jkl-icons-animated__plus jkl-icons-animated__plus--${
                isPlus ? "plus" : "close"
            }`}
        >
            <Plus variant={iconSize} />
        </div>
    );
};

PlusRemoveAnimated.displayName = "PlusRemoveAnimated";
