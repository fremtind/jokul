import React from "react";
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
        case "search":
            return <IconSearch />;
        default:
            return null;
    }
}

export const ActionIcon = ({ action, className }: Props) => {
    return (
        <span data-testid="jkl-action-icon" className={className}>
            {getIcon(action)}
        </span>
    );
};

export type IconVariant = "clear" | "search";
