import React, { FC } from "react";
import { Plus } from "../icons/Plus";
import { variants } from "../icons/types";

interface Props {
    isPlus: boolean;
    variant?: variants;
    title?: [string, string];
}

export const PlusRemoveAnimated: FC<Props> = ({ isPlus, variant = "small", title = ["pluss", "lukk"] }) => {
    const iconSize = variant !== "inherit" ? variant : "small";
    return (
        <div
            className={`jkl-icon--${iconSize} jkl-icons-animated__plus jkl-icons-animated__plus--${
                isPlus ? "plus" : "close"
            }`}
        >
            <Plus
                variant={iconSize}
                title={isPlus ? title[0] : title[1]}
                description={`Ikon av ${isPlus ? title[0] : title[1]}tegn`}
            />
        </div>
    );
};

PlusRemoveAnimated.displayName = "PlusRemoveAnimated";
