import cn from "classnames";
import React from "react";
import { SkeletonElement, SkeletonElementProps } from "./SkeletonElement";
import { SkeletonLabel, SkeletonLabelProps } from "./SkeletonLabel";

export interface SkeletonRadioButtonGroupProps {
    className?: string;
    /**
     * Skal bare brukes i informasjonstette applikasjoner.
     * @default false
     */
    compact?: boolean;
    labelProps?: SkeletonLabelProps;
    inputProps?: SkeletonElementProps;
    radioButtons: number;
}

export const SkeletonRadioButtonGroup = ({
    className,
    radioButtons,
    compact,
    labelProps,
    inputProps,
    ...rest
}: SkeletonRadioButtonGroupProps) => {
    return (
        <div
            className={cn("jkl-skeleton-input", className, {
                "jkl-skeleton-input--compact": compact,
            })}
            {...rest}
        >
            <SkeletonLabel compact={compact} {...labelProps} />
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
