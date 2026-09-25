import type { TrackingProps } from "../types.js";

/**
 * Serialiserer `tracking`-propens felter til en JSON-streng, trygt for
 * bruk i et `data-jkl-tracking`-attributt.
 *
 * `TrackingProps` er allerede begrenset til JSON-serialiserbare verdier
 * (se `types.ts`), men denne funksjonen er et ekstra forsvarslag mot
 * forbrukere som likevel omgår typen (via `any`/ren JS, eller uventede
 * verdier som `bigint` eller sirkulære objekter) - selve komponent-
 * renderingen skal ALDRI kunne krasje på grunn av innholdet i
 * `tracking`-propen. Ved en serialiseringsfeil utelates attributtet helt
 * (returnerer `undefined`) i stedet for å kaste videre.
 */
export function serializeTracking(
    tracking: TrackingProps | undefined,
): string | undefined {
    if (!tracking) {
        return undefined;
    }
    try {
        return JSON.stringify(tracking);
    } catch (error) {
        if (process.env.NODE_ENV !== "production") {
            console.warn(
                "Kunne ikke serialisere `tracking`-propen til JSON - " +
                    "data-jkl-tracking utelates for denne hendelsen. " +
                    "Sørg for at tracking kun inneholder JSON-serialiserbare verdier.",
                error,
            );
        }
        return undefined;
    }
}
