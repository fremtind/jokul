import React, { FC } from "react";
import { IconFactory } from "../IconFactory";
import { IconProps } from "./types";

export const CheckMark: FC<IconProps> = ({ className, variant, ...rest }) => (
    <IconFactory
        {...rest}
        className={className}
        variant={variant}
        innerSvg={<path d="M1 15.2168L5.24264 19.4594L19.3848 5.3173" stroke="currentColor" />}
    />
);

CheckMark.displayName = "CheckMark";
