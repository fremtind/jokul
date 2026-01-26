import clsx from "clsx";
import React from "react";
import type { SkeletonRadioButtonGroupProps } from "../types.js";
import { SkeletonElement } from "./SkeletonElement.js";
import { SkeletonLabel } from "./SkeletonLabel.js";

export const SkeletonRadioButtonGroup = ({
    className,
    radioButtons,
    labelProps,
    inputProps,
    ...rest
}: SkeletonRadioButtonGroupProps) => {
    return (
        <div className={clsx("jkl-skeleton-input", className)} {...rest}>
            <SkeletonLabel {...labelProps} />
            {Array.from(Array(radioButtons)).map((_, index) => (
                <div
                    key={`jkl-skeleton-checkbox-${index}`}
                    className="jkl-skeleton-input__checkbox"
                >
                    <SkeletonElement
                        width="var(--jkl-unit-30)"
                        height="var(--jkl-unit-30)"
                        style={{ borderRadius: "50%" }}
                    />
                    <SkeletonElement
                        width="var(--jkl-unit-210)"
                        height="var(--jkl-unit-30)"
                        {...inputProps}
                    />
                </div>
            ))}
        </div>
    );
};
