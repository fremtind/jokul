import { Density } from "@fremtind/jkl-core";
import clsx from "clsx";
import React from "react";
import { SkeletonElement, SkeletonElementProps } from "./SkeletonElement";
import { SkeletonLabel, SkeletonLabelProps } from "./SkeletonLabel";

export interface SkeletonRadioButtonGroupProps {
    className?: string;
    density?: Density;
    labelProps?: SkeletonLabelProps;
    inputProps?: SkeletonElementProps;
    radioButtons: number;
}

export const SkeletonRadioButtonGroup = ({
    className,
    radioButtons,
    density,
    labelProps,
    inputProps,
    ...rest
}: SkeletonRadioButtonGroupProps) => {
    const compact = density === "compact";
    return (
        <div className={clsx("jkl-skeleton-input", className)} {...rest}>
            <SkeletonLabel density={density} {...labelProps} />
            {Array.from(Array(radioButtons)).map((_, index) => (
                <div key={`jkl-skeleton-checkbox-${index}`} className="jkl-skeleton-input__checkbox">
                    <SkeletonElement
                        width={compact ? 22 : 24}
                        height={compact ? 22 : 24}
                        style={{ borderRadius: "50%" }}
                    />
                    <SkeletonElement width={compact ? 201 : 216} height={compact ? 22 : 24} {...inputProps} />
                </div>
            ))}
        </div>
    );
};
