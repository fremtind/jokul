import { AsChildProps, PolymorphicPropsWithRef, PolymorphicRef, SlotComponent } from "@fremtind/jkl-core";
import cn from "classnames";
import React from "react";

export type CardImageProps<ElementType extends React.ElementType> = PolymorphicPropsWithRef<
    ElementType,
    {
        placement?: "top" | "middle" | "bottom";
    }
>;

type CardImageComponent = <ElementType extends React.ElementType = "img">(
    props: CardImageProps<ElementType>,
) => React.ReactElement | null;

export const CardImage = React.forwardRef(function CardImage<ElementType extends React.ElementType = "img">(
    { as, asChild, className, placement = "top", ...imageProps }: CardImageProps<ElementType> & AsChildProps,
    ref?: PolymorphicRef<ElementType>,
) {
    const Component = asChild ? SlotComponent : as || "img";

    return (
        <Component
            ref={ref}
            className={cn("jkl-card-image", `jkl-card-image--${placement}`, className)}
            {...imageProps}
        />
    );
}) as CardImageComponent;
