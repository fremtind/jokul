import React, { type CSSProperties } from "react";
import type tokens from "../../core/tokens.js";
import type { AsChildProps } from "../../utilities/polymorphism/as-child.js";
import type { PolymorphicPropsWithRef } from "../../utilities/polymorphism/polymorphism.js";

export type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse";
export type GapValue = Exclude<keyof (typeof tokens)["spacing"], 0>;

export type FlexProps<ElementType extends React.ElementType> =
    PolymorphicPropsWithRef<
        ElementType,
        {
            direction?: FlexDirection;
            wrap?: boolean;
            gap?: GapValue;
            colGap?: GapValue;
            rowGap?: GapValue;
        } & Pick<
            CSSProperties,
            "alignContent" | "alignItems" | "justifyContent" | "justifyItems"
        >
    >;

export type FlexComponent = <ElementType extends React.ElementType = "div">(
    props: FlexProps<ElementType> & AsChildProps,
) => React.ReactElement | null;
