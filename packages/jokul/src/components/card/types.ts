import type { PolymorphicPropsWithRef } from "../../utilities/polymorphism/polymorphism.js";

export const SPACING_STEPS = [
    "0",
    "m",
    "l",
    "xl",
    "2xl",
    "3xl",
    "4xl",
] as const;
type SpacingSteps = typeof SPACING_STEPS;
export const NEW_SPACING_STEPS = [
    "0",
    "16",
    "24",
    "40",
    "64",
    "104",
    "168",
] as const;
type NewSpacingSteps = typeof NEW_SPACING_STEPS;
export type BasePadding =
    | SpacingSteps[0 | 1 | 2 | 3]
    | NewSpacingSteps[0 | 1 | 2 | 3];
export type OldSpacingStep = SpacingSteps[number];
export type NewSpacingStep = NewSpacingSteps[number];
export type SpacingStep = SpacingSteps[number] | NewSpacingSteps[number];

export function isOldSpacingStep(value: SpacingStep): value is OldSpacingStep {
    return SPACING_STEPS.includes(value as OldSpacingStep);
}

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

export interface PaddingShorthand {
    /**
     * Legger til ekstra rom i toppen av kortet, fra spacing-skalaen til Jøkul.
     * Ikke bruk ekstra topPadding sammen med tag. Verdier lavere enn for venstre og høyre padding
     * blir ignorert.
     * @default "24"
     */
    top?: SpacingStep;
    /**
     * Bruk stegene fra spacing-skalaen til Jøkul.
     * Hvis left og right har forskjellige verdier brukes den største for begge.
     * @default "24"
     */
    right?: BasePadding;
    /**
     * Legger til ekstra rom i bunnen av kortet, fra spacing-skalaen til Jøkul.
     * Verdier lavere enn for venstre og høyre padding blir ignorert.
     * @default "24"
     */
    bottom?: SpacingStep;
    /**
     * Bruk stegene fra spacing-skalaen til Jøkul.
     * Hvis left og right har forskjellige verdier brukes den største for begge.
     * @default "24"
     */
    left?: BasePadding;
}

export interface PaddingOptions {
    /**
     * Hvor mye rom skal det være rundt innholdet i kortet?
     * @default "24"
     */
    padding?: BasePadding | PaddingShorthand;
}

export type TagType = "success" | "warning" | "info" | "error";

export type CardTag = {
    /**
     * @default <none> Rendres som nøytral tag
     */
    type?: TagType;
    text: string;
};
