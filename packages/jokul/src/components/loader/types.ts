import type { AriaRole, HTMLProps, ReactNode } from "react";
import type { Density } from "../../core/types.js";
export type LoaderVariant = "small" | "medium" | "large";

export interface LoaderProps {
    variant?: LoaderVariant;
    textDescription: string;
    className?: string;
    dataTestAutoId?: string;
    role?: AriaRole;
    inline?: boolean;
    /**
     * Antall millisekunder komponenten vil vente før den rendrer
     * @default 0
     */
    delay?: number;
}

export interface SkeletonAnimationProps
    extends Pick<HTMLProps<HTMLDivElement>, "style"> {
    className?: string;
    children: ReactNode;
    density?: Density;
    /** @default "Vennligst vent" */
    textDescription?: string;
    role?: AriaRole;
    /**
     * Antall millisekunder komponenten vil vente før den rendrer
     * @default 0
     */
    delay?: number;
}

export interface SkeletonElementProps
    extends Pick<HTMLProps<HTMLDivElement>, "style"> {
    className?: string;
    shape?: "rect" | "circle";
    width: number | string;
    height: number | string;
}

export interface SkeletonButtonProps
    extends Omit<SkeletonElementProps, "height"> {
    density?: Density;
}

export interface SkeletonLabelProps
    extends Omit<SkeletonElementProps, "width" | "height"> {
    className?: string;
    density?: Density;
}

export interface SkeletonCheckboxGroupProps {
    className?: string;
    checkboxes: number;
    density?: Density;
    labelProps?: SkeletonLabelProps;
    inputProps?: SkeletonElementProps;
}

export interface SkeletonInputProps {
    className?: string;
    density?: Density;
    labelProps?: SkeletonLabelProps;
    inputProps?: SkeletonElementProps;
}

export interface SkeletonRadioButtonGroupProps {
    className?: string;
    density?: Density;
    labelProps?: SkeletonLabelProps;
    inputProps?: SkeletonElementProps;
    radioButtons: number;
}

export interface SkeletonTableProps
    extends Pick<HTMLProps<HTMLDivElement>, "style"> {
    className?: string;
    children: ReactNode;
    density?: Density;
    width?: number | string;
}

export interface SkeletonTableHeaderProps {
    className?: string;
    children: ReactNode;
}

export interface SkeletonTableRowProps {
    className?: string;
    children: ReactNode;
}

export interface SkeletonTextAreaProps {
    className?: string;
    labelProps?: SkeletonLabelProps;
    inputProps?: SkeletonElementProps;
    density?: Density;
}
