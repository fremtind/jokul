import clsx from "clsx";
import React, { forwardRef } from "react";
import type {
    PolymorphicPropsWithRef,
    PolymorphicRef,
} from "../../utilities/index.js";

export type TextProps<As extends React.ElementType = "p"> =
    PolymorphicPropsWithRef<
        As,
        {
            size?:
                | "inherit"
                | "1"
                | "2"
                | "3"
                | "4"
                | "5"
                | "6"
                | "7"
                | "8"
                | "9"
                | "10"
                | 1
                | 2
                | 3
                | 4
                | 5
                | 6
                | 7
                | 8
                | 9
                | 10;
            weight?: "400" | "700" | 400 | 700;
        }
    >;

type TextComponent = <As extends React.ElementType = "p">(
    props: TextProps<As>,
) => React.ReactElement | null;

export const Text: TextComponent = forwardRef(function Text<
    As extends React.ElementType = "p",
>(
    { as, className, size = "inherit", weight = 400, ...rest }: TextProps<As>,
    ref?: PolymorphicRef<As>,
) {
    const Component = as || "p";
    const sizeClass =
        size === "inherit" ? undefined : `jkl-text--beta-size-${size}`;
    const classes = clsx(
        "jkl-text--beta",
        sizeClass,
        `jkl-text--beta-weight-${weight}`,
        className,
    );

    return <Component className={classes} ref={ref} {...rest} />;
}) as TextComponent;
