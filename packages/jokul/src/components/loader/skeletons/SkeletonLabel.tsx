import React from "react";
import { SkeletonLabelProps } from "../types.js";
import { SkeletonElement } from "./SkeletonElement.js";

export const SkeletonLabel = ({ density, ...rest }: SkeletonLabelProps) => {
    const compact = density === "compact";
    return (
        <SkeletonElement
            {...rest}
            width={compact ? 100 : 115}
            height={compact ? 12 : 16}
        />
    );
};
