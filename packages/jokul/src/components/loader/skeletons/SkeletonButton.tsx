import React from "react";
import { SkeletonButtonProps } from "../types.js";
import { SkeletonElement } from "./SkeletonElement.js";

export const SkeletonButton = ({
    style,
    density,
    ...rest
}: SkeletonButtonProps) => {
    return (
        <SkeletonElement
            {...rest}
            height={density === "compact" ? 24 : 40}
            style={{ borderRadius: "999px", ...style }}
        />
    );
};
