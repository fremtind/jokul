import React, { FC } from "react";
import { IconFactory } from "../IconFactory";
import { IconProps } from "./types";

export const Close: FC<IconProps> = ({ className, variant, ...rest }) => (
    <IconFactory
        {...rest}
        className={className}
        variant={variant}
        innerSvg={
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.6897 12.2047L16.7976 5.77481L16.0836 5.07422L10.0003 11.4783L3.92319 5.07428L3.20958 5.77524L9.31054 12.2044L2.5 19.374L3.21395 20.0746L9.99992 12.9308L16.7857 20.0816L17.4993 19.3807L10.6897 12.2047Z"
                fill="currentColor"
            />
        }
    />
);

Close.displayName = "Close";
