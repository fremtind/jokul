import React, { FC } from "react";
import { IconFactory } from "../IconFactory";
import { IconProps } from "./types";

export const ArrowUpRight: FC<IconProps> = ({ className, variant, ...rest }) => (
    <IconFactory
        {...rest}
        viewBox="0 0 15 16"
        className={className}
        variant={variant}
        innerSvg={
            <path
                d="M10.0756 5.70656L3.39683 5.68281L3.39313 4.64217L11.8483 4.67224L11.8784 13.1275L10.8378 13.1238L10.814 6.44507L2.11099 15.1481L1.37253 14.4096L10.0756 5.70656Z"
                fill="currentColor"
            />
        }
    />
);

ArrowUpRight.displayName = "ArrowUpRight";
