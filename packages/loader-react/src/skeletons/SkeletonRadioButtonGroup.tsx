import cn from "classnames";
import React from "react";
import { SkeletonElement, SkeletonElementProps } from "./SkeletonElement";
import { SkeletonLabel, SkeletonLabelProps } from "./SkeletonLabel";

export interface SkeletonRadioButtonGroupProps {
    className?: string;
    forceCompact?: boolean;
    labelProps?: SkeletonLabelProps;
    inputProps?: SkeletonElementProps;
    radioButtons: number;
}

export const SkeletonRadioButtonGroup = ({
    className,
    radioButtons,
    forceCompact,
    labelProps,
    inputProps,
    ...rest
}: SkeletonRadioButtonGroupProps) => {
    return (
        <div
            className={cn("jkl-skeleton-input", className, {
                "jkl-skeleton-input--compact": forceCompact,
            })}
            {...rest}
        >
            <SkeletonLabel forceCompact={forceCompact} {...labelProps} />
            {Array.from(Array(radioButtons)).map((_, index) => (
                <div key={`jkl-skeleton-checkbox-${index}`} className="jkl-skeleton-input__checkbox">
                    <SkeletonElement
                        width={forceCompact ? 22 : 24}
                        height={forceCompact ? 22 : 24}
                        style={{ borderRadius: "50%" }}
                    />
                    <SkeletonElement width={forceCompact ? 201 : 216} height={forceCompact ? 22 : 24} {...inputProps} />
                </div>
            ))}
        </div>
    );
};
