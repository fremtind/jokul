import clsx from "clsx";
import type { SkeletonInputProps } from "../types.js";
import { SkeletonElement } from "./SkeletonElement.js";
import { SkeletonLabel } from "./SkeletonLabel.js";

export const SkeletonInput = ({
    className,
    density,
    labelProps,
    inputProps,
    ...rest
}: SkeletonInputProps) => {
    const compact = density === "compact";
    return (
        <div className={clsx("jkl-skeleton-input", className)} {...rest}>
            <SkeletonLabel density={density} {...labelProps} />
            <SkeletonElement
                width={compact ? 301 : 316}
                height={compact ? 32 : 48}
                {...inputProps}
            />
        </div>
    );
};
