import { isHex } from "@fremtind/jokul/theme";

export { isHex, normalizeHex } from "@fremtind/jokul/theme";

/** Inline feilmelding for heks-input, eller `undefined` om verdien er OK. */
export const hexErrorLabel = (value: string): string | undefined =>
    isHex(value) ? undefined : "Bruk formatet #RRGGBB";
