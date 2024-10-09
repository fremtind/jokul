import React, { type CSSProperties } from "react";
import { tokens } from "../../core";
import { type AsChildProps, type PolymorphicPropsWithRef, type PolymorphicRef, SlotComponent } from "../../utilities";

export type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse";
export type GapValue = Exclude<keyof (typeof tokens)["spacing"], 0>;

export type FlexProps<ElementType extends React.ElementType> = PolymorphicPropsWithRef<
    ElementType,
    {
        direction?: FlexDirection;
        wrap?: boolean;
        gap?: GapValue;
        colGap?: GapValue;
        rowGap?: GapValue;
    } & Pick<CSSProperties, "alignContent" | "alignItems" | "justifyContent" | "justifyItems">
>;

export type FlexComponent = <ElementType extends React.ElementType = "div">(
    props: FlexProps<ElementType> & AsChildProps,
) => React.ReactElement | null;

export const Flex = React.forwardRef(function Flex<ElementType extends React.ElementType = "div">(
    props: FlexProps<ElementType>,
    ref?: PolymorphicRef<ElementType>,
) {
    const {
        asChild,
        as = "div",
        alignContent,
        alignItems,
        children,
        colGap,
        direction,
        gap,
        justifyContent,
        justifyItems,
        rowGap,
        wrap = false,
        ...rest
    } = props;
    const Component = asChild ? SlotComponent : as;

    const flexStyle: CSSProperties = {
        display: "flex",
        flexDirection: direction,
        alignContent,
        alignItems,
        justifyContent,
        justifyItems,
        ...(wrap ? { flexWrap: "wrap" } : {}),
        ...(gap ? { gap: tokens.spacing[gap] } : {}),
        ...(colGap ? { columnGap: tokens.spacing[colGap] } : {}),
        ...(rowGap ? { rowGap: tokens.spacing[rowGap] } : {}),
    };

    return (
        <Component ref={ref} {...rest} style={{ ...flexStyle, ...rest.style }}>
            {children}
        </Component>
    );
}) as FlexComponent;
