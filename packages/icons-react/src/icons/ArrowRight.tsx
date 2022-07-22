import React, { FC } from "react";
import { IconFactory } from "../IconFactory";
import { IconProps } from "./types";

export const ArrowRight: FC<IconProps> = ({ className, variant, ...rest }) => (
    <IconFactory
        {...rest}
        viewBox="0 0 15 16"
        className={className}
        variant={variant}
        innerSvg={
            <path
                d="M13.0151 7.12631L8.30931 2.38689L9.04253 1.64844L15 7.64844L9.04253 13.6484L8.30931 12.91L13.0151 8.17064L-2.39442e-07 8.17064L-2.85091e-07 7.12631L13.0151 7.12631Z"
                fill="currentColor"
            />
        }
    />
);

ArrowRight.displayName = "ArrowRight";
