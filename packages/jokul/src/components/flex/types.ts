import React from "react";
import type { AsChildProps } from "../../utilities/polymorphism/as-child.js";
import type {
    Expand,
    PolymorphicComponentPropWithRef,
} from "../../utilities/polymorphism/polymorphism.js";

type Size = 1 | 2 | 3 | 4 | 6 | 4.8 | 8.4 | 2.1 | 10.2 | 3.9 | 9.3 | 5.7 | 7.5;
type Center = "md" | "lg" | "xl" | "xxl" | boolean;
type Layout = Expand<"auto" | Size | `${Size}`[][number] | "2.10">;
type Gap =
    | "none"
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "xxl"
    | "xxl xl"
    | "xxl lg"
    | "xxl md"
    | "xxl sm"
    | "xxl xs"
    | "xl none"
    | "xl xxl"
    | "xl lg"
    | "xl md"
    | "xl sm"
    | "xl xs"
    | "xl none"
    | "lg xxl"
    | "lg xl"
    | "lg md"
    | "lg sm"
    | "lg xs"
    | "lg none"
    | "md xxl"
    | "md xl"
    | "md lg"
    | "md sm"
    | "md xs"
    | "md none"
    | "sm xxl"
    | "sm xl"
    | "sm lg"
    | "sm md"
    | "sm xs"
    | "sm none"
    | "xs xxl"
    | "xs xl"
    | "xs lg"
    | "xs md"
    | "xs sm"
    | "xs none"
    | "none xxl"
    | "none xl"
    | "none lg"
    | "none md"
    | "none sm"
    | "none xs";

type FlexBaseProps = {
    align?: "normal" | "start" | "center" | "end" | "baseline" | "stretch";
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
    text?: "left" | "right" | "center";
    justify?:
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
