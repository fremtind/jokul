import clsx from "clsx";
import React, { forwardRef } from "react";
import { CheckIcon } from "../icon/icons/CheckIcon.js";
import { CloseIcon } from "../icon/icons/CloseIcon.js";
import { ChipProps } from "./types.js";

export const Chip = forwardRef<HTMLButtonElement, ChipProps>(function Chip(
    {
        className,
        variant,
        onClick,
        children,
        selected,
        size = "small",
        ...rest
    },
    ref,
) {
    return (
        <button
            type="button"
            ref={ref}
            className={clsx(
                "jkl-chip",
                `jkl-chip--${size}`,
                `jkl-chip--${variant}`,
                className,
            )}
            onClick={onClick}
            aria-pressed={selected}
            {...rest}
        >
            {children}
            {variant === "filter" && selected && (
                <CheckIcon
                    className="jkl-chip__icon"
                    variant="small"
                    data-testid="jkl-check-icon"
                />
            )}
            {variant === "input" && (
                <CloseIcon
                    className="jkl-chip__icon"
                    variant="small"
                    data-testid="jkl-close-icon"
                />
            )}
        </button>
    );
});
