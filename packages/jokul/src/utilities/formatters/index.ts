export type { FormatNumberOptions } from "./util/formatNumber";
export { formatNumber } from "./util/formatNumber";
export { parseNumber } from "./util/parseNumber";
export type { Formatter, RegisterWithMaskOptions } from "./util/registerWithMask";
export {
    registerWithMasks,
    registerWithFodselsnummerMask,
    registerWithKontonummerMask,
    registerWithKortnummerMask,
    registerWithTelefonnummerMask,
} from "./util/registerWithMask";

export { formatAvstand } from "./avstand/formatAvstand";
export { formatBytes } from "./bytes/formatBytes";
export { formatDate } from "./date/formatDate";
export { FODSELSNUMMER_REGEX, formatFodselsnummer } from "./fodselsnummer/formatFodselsnummer";
export { ORGANISASJONSNUMMER_REGEX, formatOrganisasjonsnummer } from "./organisasjonsnummer/formatOrganisasjonsnummer";
export { KONTONUMMER_REGEX, formatKontonummer } from "./kontonummer/formatKontonummer";
export { KORTNUMMER_REGEX, formatKortnummer } from "./kortnummer/formatKortnummer";
export { TELEFONNUMMER_REGEX, formatTelefonnummer } from "./telefonnummer/formatTelefonnummer";
export { formatValuta } from "./valuta/formatValuta";
