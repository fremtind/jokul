import clsx from "clsx";
import React from "react";
import { Density } from "../../../core/types.js";
import { SkeletonElement, SkeletonElementProps } from "./SkeletonElement.js";
import { SkeletonLabel, SkeletonLabelProps } from "./SkeletonLabel.js";

export interface SkeletonCheckboxGroupProps {
    className?: string;
    checkboxes: number;
    density?: Density;
    labelProps?: SkeletonLabelProps;
    inputProps?: SkeletonElementProps;
}

export const SkeletonCheckboxGroup = ({
    className,
    checkboxes,
    density,
    labelProps,
    inputProps,
    ...rest
}: SkeletonCheckboxGroupProps) => {
    const compact = density === "compact";
    return (
        <div className={clsx("jkl-skeleton-input", className)} {...rest}>
            <SkeletonLabel density={density} {...labelProps} />
            {Array.from(Array(checkboxes)).map((_, index) => (
                <div
                    key={`jkl-skeleton-checkbox-${index}`}
                    className="jkl-skeleton-input__checkbox"
                >
                    <SkeletonElement
                        width={compact ? 22 : 24}
                        height={compact ? 22 : 24}
                    />
                    <SkeletonElement
                        width={compact ? 201 : 216}
                        height={compact ? 22 : 24}
                        {...inputProps}
                    />
                </div>
            ))}
        </div>
    );
};
