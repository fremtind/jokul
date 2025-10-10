import React from "react";
import type { AsChildProps } from "../../utilities/polymorphism/as-child.js";
import type { PolymorphicPropsWithRef } from "../../utilities/polymorphism/polymorphism.js";

// Les https://stackoverflow.com/q/57683303
export type Expand<T> = T extends (...args: infer A) => infer R
    ? (...args: Expand<A>) => Expand<R>
    : T extends infer O
      ? { [K in keyof O]: O[K] }
      : never;

type Size = 1 | 2 | 3 | 4 | 6 | 4.8 | 8.4 | 2.1 | 10.2 | 3.9 | 9.3 | 5.7 | 7.5;
type Center = "m" | "l" | "xl" | "xxl" | boolean;
type Layout = Expand<"auto" | Size | `${Size}`[][number] | "2.10">;
type GapValue = "none" | "xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl";
type Gap = `${GapValue}` | `${GapValue} ${GapValue}`;

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
    gap?: Gap | { xs?: Gap; s?: Gap; m?: Gap; l?: Gap; xl?: Gap; xxl?: Gap };
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
    layout?:
        | Layout
        | {
              xs?: Layout;
              s?: Layout;
              m?: Layout;
              l?: Layout;
              xl?: Layout;
              xxl?: Layout;
          };
    wrap?: "wrap" | "nowrap" | "reverse";
};

export type FlexProps<As extends React.ElementType = "div"> =
    PolymorphicPropsWithRef<As, FlexBaseProps>;

export type FlexComponent = <ElementType extends React.ElementType = "div">(
    props: FlexProps<ElementType> & AsChildProps,
) => React.ReactElement | null;
