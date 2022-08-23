import { Density } from "@fremtind/jkl-core";
import cn from "classnames";
import React, { AriaRole, HTMLProps, ReactNode } from "react";
import { useDelayedRender } from "../useDelayedRender";

export interface SkeletonAnimationProps extends Pick<HTMLProps<HTMLDivElement>, "style"> {
    className?: string;
    children: ReactNode;
    density?: Density;
    /** @default "Vennligst vent" */
    textDescription?: string;
    politeness?: "polite" | "assertive";
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
    politeness = "polite",
    textDescription = "Vennligst vent",
    ...rest
}: SkeletonAnimationProps) => {
    const renderComponent = useDelayedRender(delay);

    if (delay && !renderComponent) {
        return null;
    }

    return (
        <div
            className={cn("jkl-skeleton-animation", className)}
            aria-busy="true"
            aria-label={textDescription}
            aria-live={politeness}
            role="alert"
            {...rest}
            data-density={density}
        />
    );
};
