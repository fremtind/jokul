import React, { FC } from "react";
import { IconFactory } from "../IconFactory";
import { ArrowIconProps } from "./types";

export const ArrowUpRight: FC<ArrowIconProps> = ({ className, variant, bold, ...rest }) => (
    <IconFactory
        {...rest}
        viewBox="0 0 15 16"
        className={className}
        variant={variant}
        innerSvg={
            bold ? (
                <path
                    d="M3.20867 0.923523L3.23696 2.70543L8.10185 2.64886L0.903503 9.84721L2.1763 11.12L9.38879 3.90751L9.31807 8.78655L11.1 8.81483L10.9727 1.07909L3.20867 0.923523Z"
                    fill="currentColor"
                />
            ) : (
                <path
                    d="M10.0756 5.70656L3.39683 5.68281L3.39313 4.64217L11.8483 4.67224L11.8784 13.1275L10.8378 13.1238L10.814 6.44507L2.11099 15.1481L1.37253 14.4096L10.0756 5.70656Z"
                    fill="currentColor"
                />
            )
        }
    />
);

ArrowUpRight.displayName = "ArrowUpRight";
