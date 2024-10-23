import clsx from "clsx";
import React, { ButtonHTMLAttributes, forwardRef } from "react";
import { Density } from "../../core/types.js";

export interface IconButtonProps extends Exclude<ButtonHTMLAttributes<HTMLButtonElement>, "disabled"> {
    density?: Density;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>((props, ref) => {
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
});

IconButton.displayName = "IconButton";
