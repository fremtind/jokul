import React, { ReactNode, FC } from "react";
import { IconVariant } from "./icons/types";

interface Props {
    title: string;
    description: string;
    innerSvg: ReactNode;
    variant?: IconVariant;
    viewBox?: string;
    className?: string;
}

export const IconFactory: FC<Props> = ({
    viewBox = "0 0 20 21",
    variant = "inherit",
    className = "",
    title,
    description,
    innerSvg,
}) => (
    <svg
        className={`jkl-icon jkl-icon--${variant} ${className}`}
        width="100%"
        viewBox={viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <title>{title}</title>
        <desc>{description}</desc>
        {innerSvg}
    </svg>
);
