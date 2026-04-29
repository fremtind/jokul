import type { PolymorphicPropsWithRef } from "../../utilities/polymorphism/polymorphism.js";

export const CARD_PADDINGS = ["s", "m", "l", "xl"] as const;
export type CardPadding = (typeof CARD_PADDINGS)[number];
export const CARD_VARIANTS = ["outlined", "high", "low"] as const;
export type CardVariant = (typeof CARD_VARIANTS)[number];

type Props = {
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
    variant?: CardVariant;
    /**
     * Angir om kortet visuelt skal fremstå som klikkbart. Du må selv rendre
     * kortet som et klikkbart element (f.eks. `<a>` eller en `<Link>` fra
     * et ruting-bibliotek) og gi det en `href` eller `onClick`-handler.
     * HUSK: Sett aria-label for at støtteverktøy, som skjermlesere, ikke
     * skal lese alt innholdet i kortet.
     */
    clickable?: boolean;
};

export type CardProps<ElementType extends React.ElementType> =
    PolymorphicPropsWithRef<ElementType, Props> & Props;
