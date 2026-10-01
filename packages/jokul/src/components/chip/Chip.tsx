import clsx from "clsx";
import React, { forwardRef } from "react";
import { CheckIcon } from "../icon/icons/CheckIcon.js";
import { CloseIcon } from "../icon/icons/CloseIcon.js";
import { COMPONENT_NAMES } from "../metadata.js";
import { getExtraTrackingAttributes } from "../types.js";
import type { ChipProps } from "./types.js";

export const Chip = forwardRef<HTMLButtonElement, ChipProps>(function Chip(
    { className, variant, onClick, children, selected, tracking, ...rest },
    ref,
) {
    return (
        <button
            type="button"
            ref={ref}
            className={clsx("jkl-chip", `jkl-chip--${variant}`, className)}
            onClick={onClick}
            aria-pressed={selected}
            {...rest}
            {...getExtraTrackingAttributes(tracking?.extra)}
            data-track-component-name={COMPONENT_NAMES.Chip}
            data-track-id={
                tracking?.id ?? (children ? String(children) : undefined)
            }
            data-track-label={children ? String(children) : undefined}
            data-track-variant={variant}
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
