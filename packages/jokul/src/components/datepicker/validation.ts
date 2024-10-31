import { ComparisonOptions } from "./types.js";
import { parseDateString } from "./utils.js";

export function isCorrectFormat(value: string | undefined): boolean {
    if (!value) {
        return false;
    }
    const val = parseDateString(value);
    return Boolean(val);
}

export function isWithinLowerBound(
    value: Date | string | undefined,
    minDate: Date,
    options: ComparisonOptions = { inclusive: false },
): boolean {
    const val = typeof value === "string" ? parseDateString(value) : value;

    if (!val) {
        return false;
    }

    if (options.inclusive) {
        return val >= minDate;
    }

    return val > minDate;
}

export function isWithinUpperBound(
    value: Date | string | undefined,
    maxDate: Date,
    options: ComparisonOptions = { inclusive: false },
): boolean {
    const val = typeof value === "string" ? parseDateString(value) : value;

    if (!val) {
        return false;
    }

    if (options.inclusive) {
        return val <= maxDate;
    }

    return val < maxDate;
}
