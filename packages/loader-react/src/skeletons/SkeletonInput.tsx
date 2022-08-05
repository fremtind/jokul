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
    /**
     * @default false
     * @deprecated Bruk compact
     */
    forceCompact?: boolean;
    labelProps?: SkeletonLabelProps;
    inputProps?: SkeletonElementProps;
}

export const SkeletonInput = ({
    className,
    compact,
    forceCompact,
    labelProps,
    inputProps,
    ...rest
}: SkeletonInputProps) => {
    return (
        <div
            className={cn("jkl-skeleton-input", className, {
                "jkl-skeleton-input--compact": compact || forceCompact,
            })}
            {...rest}
        >
            <SkeletonLabel compact={compact || forceCompact} {...labelProps} />
            <SkeletonElement
                width={compact || forceCompact ? 301 : 316}
                height={compact || forceCompact ? 32 : 48}
                {...inputProps}
            />
        </div>
    );
};
