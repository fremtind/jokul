import type React from "react";
import tokens from "../../core/tokens.js";
import type { AsChildProps } from "../../utilities/polymorphism/as-child.js";
import type { PolymorphicPropsWithRef } from "../../utilities/polymorphism/polymorphism.js";

export type Spacing = keyof typeof tokens.semanticSpacing;
export type Breakpoint = keyof typeof tokens.breakpoint;

export type Responsive<T> = Partial<Record<Breakpoint, T>>;
export function isResponsive<T>(value: unknown): value is Responsive<T> {
    return Object.keys(tokens.breakpoint).includes(
        Object.keys(value as Responsive<T>)[0],
    );
}

export const LAYOUTS = [
    "auto",
    "1",
    "2",
    "3",
    "4",
    "6",
    "4.8",
    "8.4",
    "2.10",
    "10.2",
    "3.9",
    "9.3",
    "5.7",
    "7.5",
] as const;

export type Layout = (typeof LAYOUTS)[number];
export type Center = "m" | "l" | "xl" | "2xl" | boolean;
export type Gap = `${Spacing}` | `${Spacing} ${Spacing}`;

type FlexBaseProps = {
    alignItems?: "normal" | "start" | "center" | "end" | "baseline" | "stretch";
    alignContent?:
        | "normal"
        | "start"
        | "center"
        | "end"
        | "stretch"
        | "baseline"
        | "space-between"
        | "space-around"
        | "space-evenly";
    center?: Center;
    direction?: "row" | "column" | "row-reverse" | "column-reverse";
    fill?: boolean;
    gap?: Gap | Responsive<Gap>;
    inline?: boolean;
    textAlign?: "left" | "right" | "center";
    justifyContent?:
        | "normal"
        | "start"
        | "center"
        | "end"
        | "space-between"
        | "space-around"
        | "space-evenly";
    layout?: Layout | Responsive<Layout>;
    wrap?: "wrap" | "nowrap" | "reverse";
};

export type FlexProps<As extends React.ElementType = "div"> =
    PolymorphicPropsWithRef<As, FlexBaseProps>;

export type FlexComponent = <ElementType extends React.ElementType = "div">(
    props: FlexProps<ElementType> & AsChildProps,
) => React.ReactElement | null;
