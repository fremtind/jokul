import clsx from "clsx";
import React, { forwardRef } from "react";
import type { IconButtonProps } from "./types.js";

/**
 * @deprecated bruk heller {@link Button} med ghost-varianten
 */
export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
    (props, ref) => {
        const { className, children, density, ...rest } = props;
        return (
            <button
                ref={ref}
                type="button"
                className={clsx("jkl-icon-button", className)}
                data-testid="jkl-icon-button"
                data-density={density}
                {...rest}
            >
                {children}
            </button>
        );
    },
);

IconButton.displayName = "IconButton";
