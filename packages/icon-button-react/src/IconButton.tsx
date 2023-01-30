import { Density } from "@fremtind/jkl-core";
import cn from "classnames";
import React, { ButtonHTMLAttributes, forwardRef } from "react";

export interface IconButtonProps extends Exclude<ButtonHTMLAttributes<HTMLButtonElement>, "disabled"> {
    density?: Density;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>((props, ref) => {
    const { className, children, density, ...rest } = props;
    return (
        <button
            ref={ref}
            type="button"
            className={cn("jkl-icon-button", className)}
            data-testid="jkl-icon-button"
            data-density={density}
            {...rest}
        >
            {children}
        </button>
    );
});

IconButton.displayName = "IconButton";
