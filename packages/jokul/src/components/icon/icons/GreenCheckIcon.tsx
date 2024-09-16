import clsx from "clsx";
import React, { FC } from "react";
import { IconProps } from "../types";

/*
 * NOTE: The green-check and red-cross icons also exists as a copy in the jkl-list package.
 *       If you're here to change them, consider changing them there as well, or
 *       finding a technical solution to sharing the SVG markup
 */
export const GreenCheckIcon: FC<IconProps> = ({
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
            className={clsx(className, "jkl-icon", "jkl-icon-green-check", `jkl-icon--${variant}`, {
                "jkl-icon--bold": bold,
            })}
            aria-hidden="true"
            style={style}
            data-testid={testId}
            {...rest}
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">
                <circle cx="12" cy="12" r="10" />
                <path
                    fillRule="evenodd"
                    d="M17.52 9.54 10.7 16.2l-4.21-4.1 1.04-1.08 3.17 3.09 5.79-5.65 1.04 1.08Z"
                    clipRule="evenodd"
                />
            </svg>
        </El>
    );
};
GreenCheckIcon.displayName = "GreenCheckIcon";
