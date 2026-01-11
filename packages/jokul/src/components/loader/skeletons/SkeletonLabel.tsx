import React from "react";
import type { SkeletonLabelProps } from "../types.js";
import { SkeletonElement } from "./SkeletonElement.js";

export const SkeletonLabel = ({ ...rest }: SkeletonLabelProps) => {
    // Bruker CSS-variabler for bredde og høyde, skalerer automatisk med data-size
    return (
        <SkeletonElement
            {...rest}
            width="var(--jkl-unit-130)"
            height="var(--jkl-unit-20)"
        />
    );
};
