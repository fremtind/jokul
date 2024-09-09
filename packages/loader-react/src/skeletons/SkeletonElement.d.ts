import React, { HTMLProps } from "react";
export interface SkeletonElementProps extends Pick<HTMLProps<HTMLDivElement>, "style"> {
    className?: string;
    shape?: "rect" | "circle";
    width: number | string;
    height: number | string;
}
export declare const SkeletonElement: ({
    shape,
    width,
    height,
    style,
    className,
    ...rest
}: SkeletonElementProps) => React.JSX.Element;
