export const SPACING_STEPS = ["0", "m", "l", "xl", "2xl", "3xl", "4xl"] as const;
type SpacingSteps = typeof SPACING_STEPS;
export const NEW_SPACING_STEPS = ["0", "16", "24", "40", "64", "104", "168"] as const;
type NewSpacingSteps = typeof NEW_SPACING_STEPS;
export type BasePadding = SpacingSteps[0 | 1 | 2 | 3] | NewSpacingSteps[0 | 1 | 2 | 3];
export type OldSpacingStep = SpacingSteps[number];
export type NewSpacingStep = NewSpacingSteps[number];
export type SpacingStep = SpacingSteps[number] | NewSpacingSteps[number];

export function isOldSpacingStep(value: SpacingStep): value is OldSpacingStep {
    return SPACING_STEPS.includes(value as OldSpacingStep);
}

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
