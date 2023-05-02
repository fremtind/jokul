import { unicode } from "@fremtind/jkl-constants-util";
import { formatNumber, FormatNumberOptions } from "../util/formatNumber";

export function formatBytes(bytes: number, options?: FormatNumberOptions): string {
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
