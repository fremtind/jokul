import clsx from "clsx";
import React from "react";
import type { SkeletonAnimationProps } from "../types.js";
import { useDelayedRender } from "../useDelayedRender.js";

export const SkeletonAnimation = ({
    className,
    delay = 0,
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
        />
    );
};
