import React, { FC } from "react";
import { IconFactory } from "../IconFactory";
import { ArrowIconProps } from "./types";

export const ArrowLeft: FC<ArrowIconProps> = ({ className, variant, bold, ...rest }) => (
    <IconFactory
        {...rest}
        viewBox="0 0 15 16"
        className={className}
        variant={variant}
        innerSvg={
            bold ? (
                <path
                    d="M5.69006 11.92L6.93006 10.64L3.45006 7.24001H13.6301V5.44001H3.43006L6.93006 2.04001L5.69006 0.76001L0.310059 6.32001L5.69006 11.92Z"
                    fill="currentColor"
                />
            ) : (
                <path
                    d="M1.98487 8.17056L6.69069 12.91L5.95747 13.6484L5.96007e-07 7.64844L5.95747 1.64844L6.69069 2.38689L1.98495 7.12623L15 7.12623L15 8.17057L1.98487 8.17056Z"
                    fill="currentColor"
                />
            )
        }
    />
);

ArrowLeft.displayName = "ArrowLeft";
