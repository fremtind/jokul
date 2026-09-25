import clsx from "clsx";
import React, { forwardRef } from "react";
import type { IconButtonProps } from "./types.js";

/**
 * @deprecated bruk heller {@link Button} med ghost-varianten
 */
export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
    (props, ref) => {
        const { className, children, tracking, ...rest } = props;
        const hasIcon = React.Children.count(children) > 0;

        return (
            <button
                ref={ref}
                type="button"
                // Merker ikonknappen som sporbar for Mixpanels
                // `autocapture`. Attributtene er ellers helt inerte når
                // ingen Mixpanel-instans er satt opp.
                data-jkl-tracked="IconButton"
                data-jkl-has-icon={hasIcon || undefined}
                data-jkl-tracking={
                    tracking ? JSON.stringify(tracking) : undefined
                }
                className={clsx("jkl-icon-button", className)}
                data-testid="jkl-icon-button"
                {...rest}
            >
                {children}
            </button>
        );
    },
);

IconButton.displayName = "IconButton";
