import clsx from "clsx";
import React, { forwardRef } from "react";
import type { PolymorphicRef } from "../../utilities/index.js";
import type { TitleElement, TitleProps } from "./types.js";

type TitleComponent = <As extends TitleElement = "h2">(
    props: TitleProps<As>,
) => React.ReactElement | null;

export const Title: TitleComponent = forwardRef(function Title<
    As extends TitleElement = "h2",
>(
    { className, size = "l", as, srOnly, ...rest }: TitleProps<As>,
    ref?: PolymorphicRef<As>,
) {
    const Tag = (as || "h2") as React.ElementType;
    return (
        <Tag
            className={clsx("jkl-title", srOnly && "jkl-sr-only", className)}
            data-text-size={size}
            ref={ref}
            {...rest}
        />
    );
}) as TitleComponent;
