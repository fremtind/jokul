import React, { FC } from "react";
import { IconFactory } from "../IconFactory";
import { IconProps } from "./types";

export const Info: FC<IconProps> = ({ className, variant, ...rest }) => (
    <IconFactory
        {...rest}
        viewBox="0 0 24 24"
        className={className}
        variant={variant}
        innerSvg={
            <>
                <circle cx="12" cy="12" r="11.5" stroke="currentColor" />
                <path
                    d="M11.952 7.328C12.384 7.328 12.688 7.072 12.688 6.624C12.688 6.192 12.384 5.92 11.952 5.92C11.536 5.92 11.248 6.192 11.248 6.624C11.248 7.072 11.536 7.328 11.952 7.328ZM11.504 18H12.512V9.408H11.504V18Z"
                    fill="currentColor"
                />
            </>
        }
    />
);

Info.displayName = "Info";
