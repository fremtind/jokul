import React, { FC } from "react";
import { IconFactory } from "../IconFactory";
import { IconProps } from "./types";

export const Error: FC<IconProps> = ({ className, variant, ...rest }) => (
    <IconFactory
        {...rest}
        viewBox="0 0 24 24"
        className={className}
        variant={variant}
        innerSvg={
            <>
                <circle cx="12" cy="12" r="11.5" stroke="currentColor" />
                <rect x="4" y="4.22168" width="1" height="22" transform="rotate(-45 4 4.22168)" fill="currentColor" />
            </>
        }
    />
);

Error.displayName = "Error";
