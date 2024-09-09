import { Density } from "@fremtind/jkl-core";
import React from "react";
import { SkeletonElementProps } from "./SkeletonElement";
import { SkeletonLabelProps } from "./SkeletonLabel";
export interface SkeletonTextAreaProps {
    className?: string;
    labelProps?: SkeletonLabelProps;
    inputProps?: SkeletonElementProps;
    density?: Density;
}
export declare const SkeletonTextArea: ({
    className,
    density,
    labelProps,
    inputProps,
    ...rest
}: SkeletonTextAreaProps) => React.JSX.Element;
