import clsx from "clsx";
import React, { type CSSProperties } from "react";
import tokens from "../../core/tokens.js";
import { SlotComponent } from "../../utilities/polymorphism/SlotComponent.js";
import type { PolymorphicRef } from "../../utilities/polymorphism/polymorphism.js";
import type { FlexComponent, FlexProps } from "./types.js";

export const Flex = React.forwardRef(function Flex<
    ElementType extends React.ElementType = "div",
>(props: FlexProps<ElementType>, ref?: PolymorphicRef<ElementType>) {
    const {
        asChild,
        as = "div",
        className,
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
        style,
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
        <Component
            ref={ref}
            className={clsx("jkl-flex", className)}
            style={{ ...flexStyle, ...style }}
            {...rest}
        >
            {children}
        </Component>
    );
}) as FlexComponent;
