import cn from "classnames";
import React from "react";
import { SkeletonElement, SkeletonElementProps } from "./SkeletonElement";
import { SkeletonLabel, SkeletonLabelProps } from "./SkeletonLabel";

export interface SkeletonTextAreaProps {
    className?: string;
    labelProps?: SkeletonLabelProps;
    inputProps?: SkeletonElementProps;
    /**
     * Skal bare brukes i informasjonstette applikasjoner.
     * @default false
     */
    compact?: boolean;
}

export const SkeletonTextArea = ({ className, compact, labelProps, inputProps, ...rest }: SkeletonTextAreaProps) => {
    return (
        <div
            className={cn("jkl-skeleton-input", className, {
                "jkl-skeleton-input--compact": compact,
            })}
            {...rest}
        >
            <SkeletonLabel compact={compact} {...labelProps} />
            <SkeletonElement width={compact ? 301 : 316} height={compact ? 148 : 168} {...inputProps} />
        </div>
    );
};
