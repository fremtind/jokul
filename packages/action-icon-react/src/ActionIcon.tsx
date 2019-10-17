import React from "react";
import { IconDelete } from "./Icons/IconDelete";
import { IconEdit } from "./Icons/IconEdit";
import { IconSearch } from "./Icons/IconSearch";
import { IconClear } from "./Icons/IconClear";
import { IconVariant } from "./index";

interface Props {
    name: IconVariant;
}

function ActionType(name: IconVariant) {
    switch (name) {
        case "clear":
            return <IconClear />;
            break;
        case "delete":
            return <IconDelete />;
            break;
        case "search":
            return <IconSearch />;
            break;
        case "edit":
            return <IconEdit />;
            break;
        default:
            return null;
    }
}

export const ActionIcon = ({ name }: Props) => {
    const componentClassName = "jkl-action-icon".concat(` jkl-action-icon--${name}`);

    return <div className={componentClassName}>{ActionType(name)}</div>;
};
