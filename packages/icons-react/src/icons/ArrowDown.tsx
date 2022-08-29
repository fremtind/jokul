import React, { FC } from "react";
import { IconFactory } from "../IconFactory";
import { ArrowIconProps } from "./types";

export const ArrowDown: FC<ArrowIconProps> = ({ className, variant, bold, ...rest }) => (
    <IconFactory
        {...rest}
        viewBox="0 0 15 16"
        className={className}
        variant={variant}
        innerSvg={
            bold ? (
                <path
                    d="M11.59 8.22L10.31 6.98L6.91002 10.46L6.91002 0.279999L5.11002 0.279999L5.11002 10.48L1.71002 6.98L0.430023 8.22L5.99002 13.6L11.59 8.22Z"
                    fill="currentColor"
                />
            ) : (
                <path
                    d="M8.02213 13.1636L12.7615 8.45775L13.5 9.19097L7.5 15.1484L1.5 9.19096L2.23845 8.45774L6.97779 13.1635L6.97779 0.148437L8.02213 0.148438L8.02213 13.1636Z"
                    fill="currentColor"
                />
            )
        }
    />
);

ArrowDown.displayName = "ArrowDown";
