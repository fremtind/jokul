import { Density } from "@fremtind/jkl-core";
import React from "react";
import { SkeletonElementProps } from "./SkeletonElement";
export interface SkeletonLabelProps extends Omit<SkeletonElementProps, "width" | "height"> {
    className?: string;
    density?: Density;
}
export declare const SkeletonLabel: ({ density, ...rest }: SkeletonLabelProps) => React.JSX.Element;
