import React from "react";
import type { SkeletonButtonProps } from "../types.js";
import { SkeletonElement } from "./SkeletonElement.js";

export const SkeletonButton = ({ style, ...rest }: SkeletonButtonProps) => {
    return (
        <SkeletonElement
            {...rest}
            height="var(--jkl-unit-40)"
            style={{ borderRadius: "999px", ...style }}
        />
    );
};
