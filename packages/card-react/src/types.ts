export type SpacingStep = "2xs" | "xs" | "s" | "m" | "l" | "xl" | "2xl" | "3xl";

export interface PaddingOptions {
    /**
     * Hvor mye rom skal det være rundt innholdet i kortet?
     * Bruk stegene "m", "l" eller "xl" fra spacing-skalaen til Jøkul
     * @default "l" (24px)
     */
    padding?: "m" | "l" | "xl";
    /**
     * Legger til ekstra rom i toppen av kortet, fra spacing-skalaen til Jøkul.
     * Ikke bruk ekstra topPadding sammen med tag. Verdier lavere enn for padding
     * blir ignorert.
     */
    topPadding?: SpacingStep;
}
