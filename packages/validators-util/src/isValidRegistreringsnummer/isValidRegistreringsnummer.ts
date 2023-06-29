export const BIL_REGNR_REGEX = /^[a-zA-Z]{2}\s?\d{5}$/;
export const MC_MOPED_REGNR_REGEX = /^[a-zA-Z]{2}\s?\d{4}$/;

export interface IsValidRegistreringsnummerOptions {
    vehicle?: "bil" | "mc" | "moped";
}

/**
 * Validerer om en kandidat er et gyldig registreringsnummer, bestående av to bokstaver, et valgfritt mellomrom, og fem siffer for bil, fire siffer for MC/moped.
 * @param value Kandidat for registreringsnummer
 * @param options Type kjøretøy, default "bil". Kan også være "mc" eller "moped".
 * @returns Om kandidaten er et gyldig registreringsnummer
 */
export const isValidRegistreringsnummer = (
    value: string,
    options: IsValidRegistreringsnummerOptions = { vehicle: "bil" },
): boolean => {
    if (options.vehicle === "bil") {
        return BIL_REGNR_REGEX.test(value);
    }
    return MC_MOPED_REGNR_REGEX.test(value);
};
