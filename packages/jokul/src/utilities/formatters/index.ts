export type { FormatNumberOptions } from "./util/formatNumber.js";
export { formatNumber } from "./util/formatNumber.js";
export { parseNumber } from "./util/parseNumber.js";
export type { Formatter, RegisterWithMaskOptions } from "./util/registerWithMask.js";
export {
    registerWithMasks,
    registerWithFodselsnummerMask,
    registerWithKontonummerMask,
    registerWithKortnummerMask,
    registerWithTelefonnummerMask,
} from "./util/registerWithMask.js";

export { formatAvstand } from "./avstand/formatAvstand.js";
export { formatBytes } from "./bytes/formatBytes.js";
export { formatDate } from "./date/formatDate.js";
export { FODSELSNUMMER_REGEX, formatFodselsnummer } from "./fodselsnummer/formatFodselsnummer.js";
export {
    ORGANISASJONSNUMMER_REGEX,
    formatOrganisasjonsnummer,
} from "./organisasjonsnummer/formatOrganisasjonsnummer.js";
export { KONTONUMMER_REGEX, formatKontonummer } from "./kontonummer/formatKontonummer.js";
export { KORTNUMMER_REGEX, formatKortnummer } from "./kortnummer/formatKortnummer.js";
export { TELEFONNUMMER_REGEX, formatTelefonnummer } from "./telefonnummer/formatTelefonnummer.js";
export { formatValuta } from "./valuta/formatValuta.js";
