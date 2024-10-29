import { unicode } from "../../constants/index.js";
import { formatNumber, FormatNumberOptions } from "../util/formatNumber.js";

/**
 * Formater et antall bytes som en lesbar verdi med enten KB eller MB som enhet.
 * @param bytes Antall bytes som skal vises i lesbar form
 * @param options Innstillinger for formateringen. Se https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options for detaljer.
 * @returns Den formaterte verdien
 */
export function formatBytes(
    bytes: number,
    options?: FormatNumberOptions,
): string {
    if (bytes >= 100000) {
        return `${formatNumber(Number(bytes / 1000 / 1000), {
            maximumFractionDigits: 1,
            ...options,
        })}${unicode.nbsp}MB`;
    } else {
        return `${formatNumber(bytes / 1000, {
            maximumFractionDigits: 2,
            ...options,
        })}${unicode.nbsp}KB`;
    }
}
