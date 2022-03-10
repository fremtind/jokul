import React, { ButtonHTMLAttributes } from "react";
import { IconSearch } from "./Icons/IconSearch";
import { IconClear } from "./Icons/IconClear";
import { IconCalendar } from "./Icons/IconCalendar";

export type IconVariant = "clear" | "search" | "calendar";

export interface IconButtonProps extends Exclude<ButtonHTMLAttributes<HTMLButtonElement>, "disabled"> {
    iconType?: IconVariant;
    buttonTitle: string;
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

export const IconButton = ({ iconType = "clear", buttonTitle, ...rest }: IconButtonProps): JSX.Element => {
    return (
        <button type="button" title={buttonTitle} data-testid="jkl-icon-button" className="jkl-icon-button" {...rest}>
            <span data-testid="jkl-action-icon" className="jkl-icon-button__icon">
                {getIcon(iconType)}
            </span>
            <span className="jkl-sr-only">{buttonTitle}</span>
        </button>
    );
};
