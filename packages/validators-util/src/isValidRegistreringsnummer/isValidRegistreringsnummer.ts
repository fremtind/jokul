export const BIL_REGNR_REGEX = /^[a-zA-Z]{2}\s?\d{5}$/;
export const MC_MOPED_REGNR_REGEX = /^[a-zA-Z]{2}\s?\d{4}$/;

export interface IsValidRegistreringsnummerOptions {
    vehicle?: "bil" | "mc" | "moped";
}
export const isValidRegistreringsnummer = (
    value: string,
    options: IsValidRegistreringsnummerOptions = { vehicle: "bil" },
): boolean => {
    if (options.vehicle === "bil") {
        return BIL_REGNR_REGEX.test(value);
    }
    return MC_MOPED_REGNR_REGEX.test(value);
};
