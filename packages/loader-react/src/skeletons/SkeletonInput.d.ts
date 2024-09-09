import { Density } from "@fremtind/jkl-core";
import React from "react";
import { SkeletonElementProps } from "./SkeletonElement";
import { SkeletonLabelProps } from "./SkeletonLabel";
export interface SkeletonInputProps {
    className?: string;
    density?: Density;
    labelProps?: SkeletonLabelProps;
    inputProps?: SkeletonElementProps;
}
export declare const SkeletonInput: ({
    className,
    density,
    labelProps,
    inputProps,
    ...rest
}: SkeletonInputProps) => React.JSX.Element;
