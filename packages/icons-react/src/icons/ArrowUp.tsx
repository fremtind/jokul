import React, { FC } from "react";
import { IconFactory } from "../IconFactory";
import { ArrowIconProps } from "./types";

export const ArrowUp: FC<ArrowIconProps> = ({ className, variant, bold, ...rest }) => (
    <IconFactory
        {...rest}
        viewBox="0 0 15 16"
        className={className}
        variant={variant}
        innerSvg={
            bold ? (
                <path
                    d="M0.410004 5.71L1.69 6.95L5.09 3.47V13.65H6.89V3.45L10.29 6.95L11.57 5.71L6.01 0.330002L0.410004 5.71Z"
                    fill="currentColor"
                />
            ) : (
                <path
                    d="M6.97787 2.13331L2.23846 6.83913L1.5 6.10591L7.5 0.148436L13.5 6.10591L12.7615 6.83913L8.0222 2.13338L8.02221 15.1484L6.97787 15.1484L6.97787 2.13331Z"
                    fill="currentColor"
                />
            )
        }
    />
);

ArrowUp.displayName = "ArrowUp";
