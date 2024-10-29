import React from "react";
import { Density } from "../../../core/types.js";
import { SkeletonElement, SkeletonElementProps } from "./SkeletonElement.js";

export interface SkeletonButtonProps
    extends Omit<SkeletonElementProps, "height"> {
    density?: Density;
}

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
