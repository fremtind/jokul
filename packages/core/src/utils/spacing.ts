/** @constant Stegene i spacing-skalaen fra Jøkul */
export const SPACING_STEPS = ["xs", "s", "m", "l", "xl", "2xl", "3xl", "4xl"] as const;

/**
 * En type som inneholder alle stegene i spacingskalaen til Jøkul.
 * Denne er ikke ment å brukes direkte, men du kan bruke den for å lage en
 * egen type med kun enkelte av stegene fra spacingskalaen
 *
 * @example Velg kun noen steg
 * ```ts
 * // Følgende vil gi typen "s" | "m" | "l"
 * type AllowedSpacingStep = SpacingSteps[1 | 2 | 3];
 * ```
 */
export type SpacingSteps = typeof SPACING_STEPS;

/**
 * String literal-type som tillater alle stegene i
 * spacingskalaen til Jøkul
 */
export type SpacingStep = SpacingSteps[number];
