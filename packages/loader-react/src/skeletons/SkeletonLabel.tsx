import React from "react";
import { SkeletonElement, SkeletonElementProps } from "./SkeletonElement";

export interface SkeletonLabelProps extends Omit<SkeletonElementProps, "width" | "height"> {
    className?: string;
    /**
     * Skal bare brukes i informasjonstette applikasjoner.
     * @default false
     */
    compact?: boolean;
}

export const SkeletonLabel = ({ compact, ...rest }: SkeletonLabelProps) => {
    return <SkeletonElement {...rest} width={compact ? 100 : 115} height={compact ? 12 : 16} />;
};
