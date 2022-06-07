import cn from "classnames";
import React, { HTMLProps } from "react";

export interface SkeletonElementProps extends Pick<HTMLProps<HTMLDivElement>, "style"> {
    className?: string;
    shape?: "rect" | "circle";
    width: number;
    height: number;
}

export const SkeletonElement = ({ shape = "rect", width, height, style, ...rest }: SkeletonElementProps) => {
    return (
        <div
            className={cn("jkl-skeleton-element", `jkl-skeleton-element--${shape}`)}
            style={{ width, height, ...style }}
            {...rest}
        />
    );
};
