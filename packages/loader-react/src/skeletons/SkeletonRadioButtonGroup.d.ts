import { Density } from "@fremtind/jkl-core";
import React from "react";
import { SkeletonElementProps } from "./SkeletonElement";
import { SkeletonLabelProps } from "./SkeletonLabel";
export interface SkeletonRadioButtonGroupProps {
    className?: string;
    density?: Density;
    labelProps?: SkeletonLabelProps;
    inputProps?: SkeletonElementProps;
    radioButtons: number;
}
export declare const SkeletonRadioButtonGroup: ({
    className,
    radioButtons,
    density,
    labelProps,
    inputProps,
    ...rest
}: SkeletonRadioButtonGroupProps) => React.JSX.Element;
