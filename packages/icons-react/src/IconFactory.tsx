import React, { ReactNode, FC } from "react";
import { IconProps } from "./icons/types";

interface Props extends IconProps {
    innerSvg: ReactNode;
    viewBox?: string;
}

export const IconFactory: FC<Props> = ({
    viewBox = "0 0 20 21",
    variant = "inherit",
    className = "",
    innerSvg,
    ...rest
}) => (
    <svg
        {...rest}
        className={`jkl-icon jkl-icon--${variant} ${className}`}
        width="100%"
        viewBox={viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
    >
        {innerSvg}
    </svg>
);
