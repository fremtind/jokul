import {
    type PolymorphicPropsWithRef,
    type PolymorphicRef,
    type AsChildProps,
    SlotComponent,
} from "@fremtind/jkl-core";
import cn from "classnames";
import React from "react";

export const CARD_PADDINGS = ["none", "xs", "s", "m", "l", "xl"] as const;
export type CardPadding = (typeof CARD_PADDINGS)[number];
export const CONTAINER_COLORS = ["default", "high", "low", "subdued"] as const;
export type ContainerColor = (typeof CONTAINER_COLORS)[number];

export type CardProps<ElementType extends React.ElementType> = PolymorphicPropsWithRef<
    ElementType,
    {
        className?: string;
        padding?: CardPadding;
        background?: ContainerColor;
        clickable?: boolean;
    }
>;
type CardComponent = <ElementType extends React.ElementType = "div">(
    props: CardProps<ElementType> & AsChildProps,
) => React.ReactElement | null;

export const Card = React.forwardRef(function Card<ElementType extends React.ElementType = "div">(
    props: CardProps<ElementType>,
    ref?: PolymorphicRef<ElementType>,
) {
    const {
        className,
        clickable = false,
        padding = "none",
        background = "default",
        asChild,
        as = "div",
        ...componentProps
    } = props;

    const Component = asChild ? SlotComponent : as;

    const style = {
        "--padding": `var(--jkl-card-padding-${padding})`,
        "--background-color":
            background === "default"
                ? "var(--jkl-color-background-container)"
                : `var(--jkl-color-background-container-${background})`,
        ...componentProps.style,
    } as React.CSSProperties;

    return (
        <Component
            data-clickable={clickable}
            data-padding={padding}
            data-background={background}
            className={cn("jkl-card", className)}
            {...componentProps}
            style={style}
            ref={ref}
        />
    );
}) as CardComponent;
