import React from "react";
import { IconDelete } from "./Icons/IconDelete";
import { IconEdit } from "./Icons/IconEdit";
import { IconSearch } from "./Icons/IconSearch";
import { IconClear } from "./Icons/IconClear";

interface Props {
    action: IconVariant;
    forceCompact?: boolean;
}

function ActionType(action: IconVariant) {
    switch (action) {
        case "clear":
            return <IconClear />;
        case "delete":
            return <IconDelete />;
        case "search":
            return <IconSearch />;
        case "edit":
            return <IconEdit />;
        default:
            return null;
    }
}

export const ActionIcon = ({ action, forceCompact }: Props) => {
    const componentClassName = `jkl-action-icon jkl-action-icon--${action} `.concat(
        forceCompact ? "jkl-action-icon--compact" : "",
    );

    return <span className={componentClassName}>{ActionType(action)}</span>;
};

export type IconVariant = "clear" | "delete" | "search" | "edit";
