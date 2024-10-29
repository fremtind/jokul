import clsx from "clsx";
import React, { AriaRole, HTMLProps, ReactNode } from "react";
import { Density } from "../../../core/types.js";
import { useDelayedRender } from "../useDelayedRender.js";

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

export const SkeletonAnimation = ({
    className,
    delay = 0,
    density,
    textDescription = "Vennligst vent",
    ...rest
}: SkeletonAnimationProps) => {
    const renderComponent = useDelayedRender(delay);

    if (delay && !renderComponent) {
        return null;
    }

    return (
        <div
            className={clsx("jkl-skeleton-animation", className)}
            aria-busy="true"
            aria-label={textDescription}
            {...rest}
            data-density={density}
        />
    );
};
