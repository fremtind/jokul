import clsx from "clsx";
import React, { forwardRef } from "react";
import { CheckIcon } from "../icon/icons/CheckIcon.js";
import { CloseIcon } from "../icon/icons/CloseIcon.js";
import type { ChipProps } from "./types.js";

export const Chip = forwardRef<HTMLButtonElement, ChipProps>(function Chip(
    { className, variant, onClick, children, selected, tracking, ...rest },
    ref,
) {
    const hasIcon = variant === "input" || (variant === "filter" && selected);

    return (
        <button
            type="button"
            ref={ref}
            // Merker chipen for Mixpanels `autocapture` så klikk kan spores
            // via `data-jkl-*` når en Mixpanel-instans er initialisert. Uten
            // samtykke/token er attributtene helt inerte.
            data-jkl-tracked="Chip"
            data-jkl-variant={variant}
            data-jkl-has-icon={hasIcon || undefined}
            data-jkl-selected={selected || undefined}
            data-jkl-tracking={tracking ? JSON.stringify(tracking) : undefined}
            className={clsx("jkl-chip", `jkl-chip--${variant}`, className)}
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
