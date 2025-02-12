import clsx from "clsx";
import React from "react";
import { SkeletonAnimationProps } from "../types.js";
import { useDelayedRender } from "../useDelayedRender.js";

/**
 * Wrapper-komponent for Skeleton loaders.
 * Legg denne rundt en gruppe med SkeletonElement-komponenter
 * for å rendre dem med synkronisert animasjon.
 */
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
