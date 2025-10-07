import React from "react";
import type { AsChildProps } from "../../utilities/polymorphism/as-child.js";
import type {
    Expand,
    PolymorphicComponentPropWithRef,
} from "../../utilities/polymorphism/polymorphism.js";

type Size = 1 | 2 | 3 | 4 | 6 | 4.8 | 8.4 | 2.1 | 10.2 | 3.9 | 9.3 | 5.7 | 7.5;
type Center = "md" | "lg" | "xl" | "xxl" | boolean;
type Layout = Expand<"auto" | Size | `${Size}`[][number] | "2.10">;
type GapValue = "none" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
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
    gap?: Gap | { xs?: Gap; sm?: Gap; md?: Gap; lg?: Gap; xl?: Gap; xxl?: Gap };
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
              sm?: Layout;
              md?: Layout;
              lg?: Layout;
              xl?: Layout;
              xxl?: Layout;
          };
    wrap?: "wrap" | "nowrap" | "reverse";
};

export type FlexProps<As extends React.ElementType = "div"> =
    PolymorphicComponentPropWithRef<As, FlexBaseProps>;

export type FlexComponent = <ElementType extends React.ElementType = "div">(
    props: FlexProps<ElementType> & AsChildProps,
) => React.ReactElement | null;
