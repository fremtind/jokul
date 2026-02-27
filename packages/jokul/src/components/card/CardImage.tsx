import clsx from "clsx";
import type { ElementType } from "react";
import type { Polymorphic } from "../../utilities/index.js";
import { SlotComponent } from "../../utilities/polymorphism/SlotComponent.js";
import type { AsChildProps } from "../../utilities/polymorphism/as-child.js";

export type CardImageProps = {
    /**
     * Legger til riktig negativ margin avhengig av hvor i kortet bildet
     * skal plasseres. Margin justeres automatisk etter padding i kortet.
     * Velg "full" hvis bildet skal være eneste innhold i kortet.
     * @default "top"
     */
    placement?: "top" | "middle" | "bottom" | "full";
};

/**
 * Bildekomponent som kan brukes i `Card` for å sørge for at bildet
 * blør helt ut i kantene av kortet. Rendres normalt som et `<img>`-
 * element, men du kan overstyre dette med `as` dersom du f.eks. har
 * en egen komponent for å håndtere responsive bilder.
 */
export function CardImage<T extends ElementType = "img">(
    props: Polymorphic<CardImageProps, T> & AsChildProps,
) {
    const {
        as = "img",
        ref,
        asChild,
        className,
        placement = "top",
        ...imageProps
    } = props;

    const Component = asChild ? SlotComponent : as;

    return (
        <Component
            ref={ref}
            className={clsx(
                "jkl-card-image",
                `jkl-card-image--${placement}`,
                className,
            )}
            {...imageProps}
        />
    );
}
