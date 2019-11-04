import React from "react";
import { IconDelete } from "./Icons/IconDelete";
import { IconEdit } from "./Icons/IconEdit";
import { IconSearch } from "./Icons/IconSearch";
import { IconClear } from "./Icons/IconClear";

interface Props {
    action: IconVariant;
    className: string;
}

function getIcon(actionType: IconVariant) {
    switch (actionType) {
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

export const ActionIcon = ({ action, className }: Props) => {
    return <span className={className}>{getIcon(action)}</span>;
};

export type IconVariant = "clear" | "delete" | "search" | "edit";
