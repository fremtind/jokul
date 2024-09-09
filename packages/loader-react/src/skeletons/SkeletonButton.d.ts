import { Density } from "@fremtind/jkl-core";
import React from "react";
import { SkeletonElementProps } from "./SkeletonElement";
export interface SkeletonButtonProps extends Omit<SkeletonElementProps, "height"> {
    density?: Density;
}
export declare const SkeletonButton: ({ style, density, ...rest }: SkeletonButtonProps) => React.JSX.Element;
