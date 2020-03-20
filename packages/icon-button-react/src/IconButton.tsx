import React from "react";
import { IconSearch } from "./Icons/IconSearch";
import { IconClear } from "./Icons/IconClear";
import { IconCalendar } from "./Icons/IconCalendar";

interface Props {
    iconType: IconVariant;
}

function getIcon(iconType: IconVariant) {
    switch (iconType) {
        case "clear":
            return <IconClear />;
        case "search":
            return <IconSearch />;
        case "calendar":
            return <IconCalendar />;
        default:
            return null;
    }
}

export const IconButton = ({ iconType }: Props) => {
    return (
        <span data-testid="jkl-action-icon" className="jkl-icon-button__icon">
            {getIcon(iconType)}
        </span>
    );
};

export type IconVariant = "clear" | "search" | "calendar";
