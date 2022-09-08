import { Density } from "@fremtind/jkl-core";
import React, { ButtonHTMLAttributes, forwardRef } from "react";
import { IconCalendar } from "./Icons/IconCalendar";
import { IconClear } from "./Icons/IconClear";
import { IconSearch } from "./Icons/IconSearch";

export type IconVariant = "clear" | "search" | "calendar";

export interface IconButtonProps extends Exclude<ButtonHTMLAttributes<HTMLButtonElement>, "disabled"> {
    iconType?: IconVariant;
    buttonTitle: string;
    density?: Density;
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

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>((props, ref) => {
    const { iconType = "clear", buttonTitle, density, ...rest } = props;
    return (
        <button
            ref={ref}
            type="button"
            title={buttonTitle}
            className="jkl-icon-button"
            data-testid="jkl-icon-button"
            data-density={density}
            {...rest}
        >
            <span data-testid="jkl-action-icon" className="jkl-icon-button__icon">
                {getIcon(iconType)}
            </span>
            <span className="jkl-sr-only">{buttonTitle}</span>
        </button>
    );
});

IconButton.displayName = "IconButton";
