import clsx from "clsx";
import React, { forwardRef } from "react";
import type {
    PolymorphicPropsWithRef,
    PolymorphicRef,
} from "../../utilities/index.js";

export type TitleProps<As extends React.ElementType = "h2"> =
    PolymorphicPropsWithRef<
        As,
        {
            text?: string;
            size?:
                | 1
                | 2
                | 3
                | 4
                | 5
                | 6
                | "1"
                | "2"
                | "3"
                | "4"
                | "5"
                | "6"
                | "body";
        }
    >;

type TitleComponent = <As extends React.ElementType = "h2">(
    props: TitleProps<As>,
) => React.ReactElement | null;

const TitleComp: TitleComponent = forwardRef(function Title<
    As extends React.ElementType = "h2",
>(
    { className, size, as, text, ...rest }: TitleProps<As>,
    ref?: PolymorphicRef<As>,
) {
    const Tag = as || "h2";
    const sizeInt =
        Number(String(size || as).replace(/^h([1-6])$/i, "$1")) || 1;
    const resolvedSize =
        size === "body" ? "body" : String(Math.max(1, Math.min(6, sizeInt)));
    const classes = clsx(
        "jkl-title--beta",
        `jkl-title--beta-size-${resolvedSize}`,
        className,
    );

    if (text && !rest.children) {
        Object.assign(rest, { children: formatTextBreaks(text) });
    }

    return <Tag className={classes} ref={ref} {...rest} />;
}) as TitleComponent; // Needed to tell Typescript this does not return ReactNode but acutally JSX.Element

export const Title = TitleComp;

const formatTextBreaks = (text: string) =>
    text
        .replace(/--/g, "\u{AD}")
        .replace(/__/g, "\u{A0}")
        .replace(/(\d)\s(\d)/g, "$1\u{A0}$2");
