import React, { ButtonHTMLAttributes, forwardRef } from "react";

export interface DismissButtonProps extends Exclude<ButtonHTMLAttributes<HTMLButtonElement>, "disabled"> {
    label?: string;
}

export const DismissButton = forwardRef<HTMLButtonElement, DismissButtonProps>(({ label = "Lukk", ...rest }, ref) => {
    return (
        <button ref={ref} type="button" title={label} {...rest}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.99969 4.9394L9.96936 0.969727L11.03 2.03039L7.06035 6.00006L11.0303 9.97L9.96963 11.0307L5.99969 7.06072L2.03029 11.0301L0.969632 9.96945L4.93903 6.00006L0.96936 2.03039L2.03002 0.969727L5.99969 4.9394Z"
                    fill="currentColor"
                />
            </svg>
            <span className="jkl-sr-only">{label}</span>
        </button>
    );
});

DismissButton.displayName = "DismissButton";
