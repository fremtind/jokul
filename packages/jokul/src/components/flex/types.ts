import React from "react";
import type { AsChildProps } from "../../utilities/polymorphism/as-child.js";
import type { PolymorphicPropsWithRef } from "../../utilities/polymorphism/polymorphism.js";

export const SEMANTIC_SPACING = [
    "none",
    "2xs",
    "xs",
    "s",
    "m",
    "l",
    "xl",
    "2xl",
] as const;

export const STATIC_SPACING = [
    "0",
    "2",
    "4",
    "8",
    "12",
    "16",
    "20",
    "24",
    "28",
    "32",
    "40",
    "48",
    "56",
    "64",
    "72",
    "80",
    "104",
    "168",
] as const;

const BREAKPOINTS = ["small", "medium", "large", "xl"] as const;

export type SemanticSpacing = (typeof SEMANTIC_SPACING)[number];
export type StaticSpacing = (typeof STATIC_SPACING)[number];
export type Breakpoint = (typeof BREAKPOINTS)[number];

export type Responsive<T> = Partial<Record<Breakpoint, T>>;
export function isResponsive<T>(value: unknown): value is Responsive<T> {
    return BREAKPOINTS.includes(
        Object.keys(value as Responsive<T>)[0] as Breakpoint,
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

export type DynamicGap =
    | `${SemanticSpacing}`
    | `${SemanticSpacing} ${SemanticSpacing}`;
export type StaticGap =
    | `${StaticSpacing}`
    | `${StaticSpacing} ${StaticSpacing}`;
export type Gap = DynamicGap | StaticGap;

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
