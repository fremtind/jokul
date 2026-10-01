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
 * Samler sporingsattributtene konsumenten selv har bestemt: feltene i
 * `tracking.extra`, og `data-track-*`-attributter satt direkte i JSX-en.
 *
 * Spres ut *etter* komponentens egne `data-track-*`-attributter, slik at et
 * attributt satt direkte alltid vinner over defaulten vår. Da gjelder samme
 * konvensjon enten komponenten kommer fra Jokul eller ikke.
 */
export function getExtraTrackingAttributes(
    extra: Tracking["extra"],
    props?: object,
): Record<string, string | number | boolean | undefined> {
    const fromExtra = Object.entries(extra ?? {}).map(
        ([key, value]) => [`data-track-${toKebabCase(key)}`, value] as const,
    );
    const fromProps = Object.entries(
        (props ?? {}) as Record<string, string | number | boolean | undefined>,
    ).filter(([key]) => key.startsWith("data-track-"));

    return Object.fromEntries([...fromExtra, ...fromProps]);
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
