import React, { HTMLAttributes, VFC } from "react";
import { IconVariant } from "./index";
import { IconSearch } from "./Icons/IconSearch";
import { IconClear } from "./Icons/IconClear";
import { IconCalendar } from "./Icons/IconCalendar";

interface Props extends Exclude<HTMLAttributes<HTMLButtonElement>, "disabled"> {
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

export const IconButton: VFC<Props> = ({ iconType = "clear", buttonTitle, ...rest }) => {
    return (
        <button type="button" title={buttonTitle} data-testid="jkl-icon-button" className="jkl-icon-button" {...rest}>
            <span data-testid="jkl-action-icon" className="jkl-icon-button__icon">
                {getIcon(iconType)}
            </span>
            <span className="jkl-sr-only">{buttonTitle}</span>
        </button>
    );
};
