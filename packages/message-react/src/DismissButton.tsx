import { CloseIcon } from "@fremtind/jkl-icons-react";
import React, { ButtonHTMLAttributes, forwardRef } from "react";

export interface DismissButtonProps
    extends Exclude<ButtonHTMLAttributes<HTMLButtonElement>, "disabled"> {
    label?: string;
}

export const DismissButton = forwardRef<HTMLButtonElement, DismissButtonProps>(
    ({ label = "Lukk", ...rest }, ref) => {
        return (
            <button ref={ref} type="button" title={label} {...rest}>
                <CloseIcon variant="small" bold />
                <span className="jkl-sr-only">{label}</span>
            </button>
        );
    },
);

DismissButton.displayName = "DismissButton";
