import React, { FC } from "react";
import { IconFactory } from "../IconFactory";
import { IconProps } from "./types";

export const ArrowUp: FC<IconProps> = ({ className, variant, ...rest }) => (
    <IconFactory
        {...rest}
        viewBox="0 0 15 16"
        className={className}
        variant={variant}
        innerSvg={
            <path
                d="M6.97787 2.13331L2.23846 6.83913L1.5 6.10591L7.5 0.148436L13.5 6.10591L12.7615 6.83913L8.0222 2.13338L8.02221 15.1484L6.97787 15.1484L6.97787 2.13331Z"
                fill="currentColor"
            />
        }
    />
);

ArrowUp.displayName = "ArrowUp";
