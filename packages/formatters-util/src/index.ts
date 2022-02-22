export type { FormatNumberOptions } from "./util/formatNumber";
export { formatNumber } from "./util/formatNumber";
export { parseNumber } from "./util/parseNumber";
export type { Formatter } from "./util/registerWithMask";
export {
    registerWithMasks,
    registerWithFodselsnummerMask,
    registerWithKontonummerMask,
    registerWithKortnummerMask,
    registerWithTelefonnummerMask,
} from "./util/registerWithMask";

export { FODSELSNUMMER_REGEX, formatFodselsnummer } from "./fodselsnummer/formatFodselsnummer";
export { KONTONUMMER_REGEX, formatKontonummer } from "./kontonummer/formatKontonummer";
export { KORTNUMMER_REGEX, formatKortnummer } from "./kortnummer/formatKortnummer";
export { TELEFONNUMMER_REGEX, formatTelefonnummer } from "./telefonnummer/formatTelefonnummer";
export { formatAvstand } from "./avstand/formatAvstand";
export { formatValuta } from "./valuta/formatValuta";
