import type { JokulModes } from "../utilities/index.js";

/**
 * Samlet sporingsobjekt for Jokul-komponenter som er migrert til `tracking`-propen.
 * Hvert felt er valgfritt og mappes til et tilsvarende `data-track-*`-attributt i DOM-en.
 */
export type Tracking = {
    /**
     * En unik identifikator for komponenten som skal spores. Mappes til `data-track-id`.
     */
    id?: string;
    /**
     * Ekstra sporingsfelt utover de faste feltene over, for team som trenger å
     * spore egne, prosjektspesifikke detaljer. Hver nøkkel rendres som et eget
     * `data-track-<kebab-case-nøkkel>`-attributt i DOM-en, se `getExtraTrackingAttributes`.
     */
    extra?: Record<string, string | number | boolean>;
};

/**
 * Konverterer en camelCase-streng til kebab-case, f.eks. `campaignName` -> `campaign-name`.
 */
function toKebabCase(value: string): string {
    return value.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
}

/**
 * Konverterer `Tracking["extra"]` til et objekt med `data-track-<kebab-case-nøkkel>`-
 * attributter, klare til å spres ut i JSX-en til en komponent.
 */
export function getExtraTrackingAttributes(
    extra: Tracking["extra"],
): Record<string, string | number | boolean> {
    if (!extra) {
        return {};
    }
    return Object.fromEntries(
        Object.entries(extra).map(([key, value]) => [
            `data-track-${toKebabCase(key)}`,
            value,
        ]),
    );
}

/**
 * Globale attributter som kan brukes på alle Jokul-komponenter.
 * Denne typen kombinerer modus-attributtene (`JokulModes`) med den samlede `tracking`-propen.
 */
export type GlobalJokulAttributes = JokulModes & {
    /**
     * Samlet sporingsobjekt, se `Tracking`.
     */
    tracking?: Tracking;
};
