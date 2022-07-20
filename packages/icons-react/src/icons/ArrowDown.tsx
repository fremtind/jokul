import React, { FC } from "react";
import { IconFactory } from "../IconFactory";
import { IconProps } from "./types";

export const ArrowDown: FC<IconProps> = ({ className, variant, ...rest }) => (
    <IconFactory
        {...rest}
        viewBox="0 0 15 16"
        className={className}
        variant={variant}
        innerSvg={
            <path
                d="M8.02213 13.1636L12.7615 8.45775L13.5 9.19097L7.5 15.1484L1.5 9.19096L2.23845 8.45774L6.97779 13.1635L6.97779 0.148437L8.02213 0.148438L8.02213 13.1636Z"
                fill="currentColor"
            />
        }
    />
);

ArrowDown.displayName = "ArrowDown";
