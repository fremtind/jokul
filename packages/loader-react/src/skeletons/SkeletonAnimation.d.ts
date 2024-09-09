import { Density } from "@fremtind/jkl-core";
import React, { AriaRole, HTMLProps, ReactNode } from "react";
export interface SkeletonAnimationProps extends Pick<HTMLProps<HTMLDivElement>, "style"> {
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
export declare const SkeletonAnimation: ({
    className,
    delay,
    density,
    textDescription,
    ...rest
}: SkeletonAnimationProps) => React.JSX.Element | null;
