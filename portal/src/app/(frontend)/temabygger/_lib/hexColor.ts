const HEX_COLOR_PATTERN = /^#[0-9a-fA-F]{6}$/;

/** Sann når verdien matcher `#RRGGBB`. Case-insensitiv ved input — `normalizeHex` uppercaser ved lagring. */
export const isHex = (value: string): boolean => HEX_COLOR_PATTERN.test(value);

/** Stripper mellomrom og gjør om til store bokstaver — stabil form for lagring og sammenligning. */
export const normalizeHex = (value: string): string =>
    value.replace(/\s+/g, "").toUpperCase();

/** Inline feilmelding for heks-input, eller `undefined` om verdien er OK. */
export const hexErrorLabel = (value: string): string | undefined =>
    isHex(value) ? undefined : "Bruk formatet #RRGGBB";
