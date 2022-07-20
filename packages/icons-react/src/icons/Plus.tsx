import React, { FC } from "react";
import { IconFactory } from "../IconFactory";
import { IconProps } from "./types";

export const Plus: FC<IconProps> = ({ className, variant, ...rest }) => (
    <IconFactory
        {...rest}
        className={className}
        variant={variant}
        innerSvg={
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.5 13.0742V20.0742H10.5V13.0742L17.5 13.0742V12.0742L10.5 12.0742V5.07422H9.5V12.0742L2.5 12.0742V13.0742L9.5 13.0742Z"
                fill="currentColor"
            />
        }
    />
);

Plus.displayName = "Plus";
