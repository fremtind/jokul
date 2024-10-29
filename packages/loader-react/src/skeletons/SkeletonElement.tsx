import cn from "classnames";
import React, { HTMLProps } from "react";

export interface SkeletonElementProps
    extends Pick<HTMLProps<HTMLDivElement>, "style"> {
    className?: string;
    shape?: "rect" | "circle";
    width: number | string;
    height: number | string;
}

export const SkeletonElement = ({
    shape = "rect",
    width,
    height,
    style,
    className,
    ...rest
}: SkeletonElementProps) => {
    return (
        <div
            className={cn(
                "jkl-skeleton-element",
                `jkl-skeleton-element--${shape}`,
                className,
            )}
            style={{ width, height, ...style }}
            {...rest}
        />
    );
};
