import React, { FC } from "react";
import { IconFactory } from "../IconFactory";
import { IconProps } from "./types";

export const Hamburger: FC<IconProps> = ({ className, variant, ...rest }) => (
    <IconFactory
        {...rest}
        className={className}
        variant={variant}
        innerSvg={
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20 6.07422H0V5.07422H20V6.07422ZM20 13.0742H0V12.0742H20V13.0742ZM0 20.0742H20V19.0742H0V20.0742Z"
                fill="currentColor"
            />
        }
    />
);

Hamburger.displayName = "Hamburger";
