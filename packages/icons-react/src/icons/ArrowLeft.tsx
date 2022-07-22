import React, { FC } from "react";
import { IconFactory } from "../IconFactory";
import { IconProps } from "./types";

export const ArrowLeft: FC<IconProps> = ({ className, variant, ...rest }) => (
    <IconFactory
        {...rest}
        viewBox="0 0 15 16"
        className={className}
        variant={variant}
        innerSvg={
            <path
                d="M1.98487 8.17056L6.69069 12.91L5.95747 13.6484L5.96007e-07 7.64844L5.95747 1.64844L6.69069 2.38689L1.98495 7.12623L15 7.12623L15 8.17057L1.98487 8.17056Z"
                fill="currentColor"
            />
        }
    />
);

ArrowLeft.displayName = "ArrowLeft";
