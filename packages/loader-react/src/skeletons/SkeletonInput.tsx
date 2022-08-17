import cn from "classnames";
import React from "react";
import { SkeletonElement, SkeletonElementProps } from "./SkeletonElement";
import { SkeletonLabel, SkeletonLabelProps } from "./SkeletonLabel";

export interface SkeletonInputProps {
    className?: string;
    /**
     * Skal bare brukes i informasjonstette applikasjoner.
     * @default false
     */
    compact?: boolean;
    labelProps?: SkeletonLabelProps;
    inputProps?: SkeletonElementProps;
}

export const SkeletonInput = ({ className, compact, labelProps, inputProps, ...rest }: SkeletonInputProps) => {
    return (
        <div
            className={cn("jkl-skeleton-input", className, {
                "jkl-skeleton-input--compact": compact,
            })}
            {...rest}
        >
            <SkeletonLabel compact={compact} {...labelProps} />
            <SkeletonElement width={compact ? 301 : 316} height={compact ? 32 : 48} {...inputProps} />
        </div>
    );
};
