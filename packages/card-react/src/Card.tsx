import {
    type AsChildProps,
    type PolymorphicPropsWithRef,
    type PolymorphicRef,
    SlotComponent,
} from "@fremtind/jkl-core";
import cn from "classnames";
import React from "react";

export const CARD_PADDINGS = ["s", "m", "l", "xl"] as const;
export type CardPadding = (typeof CARD_PADDINGS)[number];
export const CARD_TYPES = ["outlined", "high", "low"] as const;
export type CardType = (typeof CARD_TYPES)[number];

export type CardProps<ElementType extends React.ElementType> = PolymorphicPropsWithRef<
    ElementType,
    {
        className?: string;
        /**
         * Setter padding på kortet. Tilsvarer samme property i Figma.
         * @default "s"
         */
        padding?: CardPadding;
        /**
         * Angir hvilken kortvariant du vil bruke. Velg en variant som gir god kontrast
         * til bakgrunnen på siden, slik at det er enkelt å skille innholdet fra hverandre.
         * @default "high"
         */
        type?: CardType;
        /**
         * Angir om kortet visuelt skal fremstå som klikkbart. Du må selv rendre
         * kortet som et klikkbart element (f.eks. `<a>` eller en `<Link>` fra
         * et ruting-bibliotek) og gi det en `href` eller `onClick`-handler.
         * HUSK: Sett aria-label for at støtteverktøy, som skjermlesere, ikke
         * skal lese alt innholdet i kortet.
         */
        clickable?: boolean;
    }
>;

type CardComponent = <ElementType extends React.ElementType = "div">(
    props: CardProps<ElementType> & AsChildProps,
) => React.ReactElement | null;

/**
 * En allsidig kortkomponent som brukes for å gruppere innhold på en side.
 * Komponenten rendres til vanlig som en `<div>`, men du kan velge å rendre
 * den som andre elementer eller komponenter der du trenger annen semantikk
 * eller funksjonalitet.
 */
export const Card = React.forwardRef(function Card<ElementType extends React.ElementType = "div">(
    props: CardProps<ElementType>,
    ref?: PolymorphicRef<ElementType>,
) {
    const {
        className,
        clickable = false,
        padding = "s",
        type = "high",
        asChild,
        as = "div",
        ...componentProps
    } = props;

    const Component = asChild ? SlotComponent : as;

    return (
        <Component
            data-testid="jkl-card"
            data-clickable={clickable}
            data-padding={padding}
            className={cn("jkl-card", `jkl-card--${type}`, className)}
            {...componentProps}
            ref={ref}
        />
    );
}) as CardComponent;
