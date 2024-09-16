import clsx from "clsx";
import React, { FC } from "react";
import { IconProps } from "../types";

/*
 * NOTE: The green-check and red-cross icons also exists as a copy in the jkl-list package.
 *       If you're here to change them, consider changing them there as well, or
 *       finding a technical solution to sharing the SVG markup
 */
export const RedCrossIcon: FC<IconProps> = ({
    as = "div",
    bold = false,
    className,
    variant = "inherit",
    "data-testid": testId,
    style,
    ...rest
}) => {
    const El = as;

    return (
        <El
            className={clsx(className, "jkl-icon", "jkl-icon-red-cross", `jkl-icon--${variant}`, {
                "jkl-icon--bold": bold,
            })}
            aria-hidden="true"
            style={style}
            data-testid={testId}
            {...rest}
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">
                <circle cx="12" cy="12" r="10" />
                <path d="m15.71 7.23 1.06 1.06-8.48 8.48-1.06-1.06 8.48-8.48Z" />
                <path d="m8.29 7.23 8.48 8.48-1.06 1.06L7.23 8.3l1.06-1.06Z" />
            </svg>
        </El>
    );
};
RedCrossIcon.displayName = "RedCrossIcon";
