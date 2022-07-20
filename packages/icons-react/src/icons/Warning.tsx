import React, { FC } from "react";
import { IconFactory } from "../IconFactory";
import { IconProps } from "./types";

export const Warning: FC<IconProps> = ({ className, variant, ...rest }) => (
    <IconFactory
        {...rest}
        viewBox="0 0 24 24"
        className={className}
        variant={variant}
        innerSvg={
            <>
                <circle cx="12" cy="12" r="11.5" stroke="currentColor" />
                <path
                    d="M11.112 14.624H11.688L11.896 11.36V6H10.904V11.36L11.112 14.624ZM11.4 18.24C11.784 18.24 12.136 17.952 12.136 17.504C12.136 17.072 11.784 16.784 11.4 16.784C11.016 16.784 10.664 17.072 10.664 17.504C10.664 17.952 11.016 18.24 11.4 18.24Z"
                    fill="currentColor"
                />
            </>
        }
    />
);

Warning.displayName = "Warning";
