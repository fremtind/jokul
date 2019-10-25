import React from "react";
import { IconDelete } from "./Icons/IconDelete";
import { IconEdit } from "./Icons/IconEdit";
import { IconSearch } from "./Icons/IconSearch";
import { IconClear } from "./Icons/IconClear";
import { IconVariant } from "./index";

interface Props {
    action: IconVariant;
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

export const ActionIcon = ({ action }: Props) => {
    const componentClassName = `jkl-action-icon jkl-action-icon--${action}`;

    return <span className={componentClassName}>{ActionType(action)}</span>;
};
