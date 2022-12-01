export const SPACING_STEPS = ["0", "m", "l", "xl", "2xl", "3xl", "4xl"] as const;
type SpacingSteps = typeof SPACING_STEPS;
export type BasePadding = SpacingSteps[0 | 1 | 2 | 3];
export type SpacingStep = SpacingSteps[number];

export interface PaddingShorthand {
    /**
     * Legger til ekstra rom i toppen av kortet, fra spacing-skalaen til Jøkul.
     * Ikke bruk ekstra topPadding sammen med tag. Verdier lavere enn for venstre og høyre padding
     * blir ignorert.
     * @default "l" (24px)
     */
    top?: SpacingStep;
    /**
     * Bruk stegene "m", "l" eller "xl" fra spacing-skalaen til Jøkul.
     * Hvis left og right har forskjellige verdier brukes den største for begge.
     * @default "l" (24px)
     */
    right?: BasePadding;
    /**
     * Legger til ekstra rom i bunnen av kortet, fra spacing-skalaen til Jøkul.
     * Verdier lavere enn for venstre og høyre padding blir ignorert.
     * @default "l" (24px)
     */
    bottom?: SpacingStep;
    /**
     * Bruk stegene "m", "l" eller "xl" fra spacing-skalaen til Jøkul.
     * Hvis left og right har forskjellige verdier brukes den største for begge.
     * @default "l" (24px)
     */
    left?: BasePadding;
}

export interface PaddingOptions {
    /**
     * Hvor mye rom skal det være rundt innholdet i kortet?
     * @default "l" (24px)
     */
    padding?: BasePadding | PaddingShorthand;
}
