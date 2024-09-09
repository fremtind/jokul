import { Density } from "@fremtind/jkl-core";
import React from "react";
import { SkeletonElementProps } from "./SkeletonElement";
import { SkeletonLabelProps } from "./SkeletonLabel";
export interface SkeletonCheckboxGroupProps {
    className?: string;
    checkboxes: number;
    density?: Density;
    labelProps?: SkeletonLabelProps;
    inputProps?: SkeletonElementProps;
}
export declare const SkeletonCheckboxGroup: ({
    className,
    checkboxes,
    density,
    labelProps,
    inputProps,
    ...rest
}: SkeletonCheckboxGroupProps) => React.JSX.Element;
