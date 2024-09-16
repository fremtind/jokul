import cn from "classnames";
import React from "react";
import { SlotComponent } from "../";
import { AsChildProps, PolymorphicPropsWithRef, PolymorphicRef } from "../../core";

export type CardImageProps<ElementType extends React.ElementType> = PolymorphicPropsWithRef<
    ElementType,
    {
        /**
         * Legger til riktig negativ margin avhengig av hvor i kortet bildet
         * skal plasseres. Margin justeres automatisk etter padding i kortet.
         * @default "top"
         */
        placement?: "top" | "middle" | "bottom";
    }
>;

type CardImageComponent = <ElementType extends React.ElementType = "img">(
    props: CardImageProps<ElementType>,
) => React.ReactElement | null;

/**
 * Bildekomponent som kan brukes i `Card` for å sørge for at bildet
 * blør helt ut i kantene av kortet. Rendres normalt som et `<img>`-
 * element, men du kan overstyre dette med `as` dersom du f.eks. har
 * en egen komponent for å håndtere responsive bilder.
 */
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
