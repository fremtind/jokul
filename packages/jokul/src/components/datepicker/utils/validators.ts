import type { DateValidationError } from "../types.js";
import { parseDateString } from "./formatters.js";

export function isCorrectFormat(value: string | undefined): boolean {
    if (!value) return false;
    return Boolean(parseDateString(value));
}

function toDateOnly(date: Date): Date {
    const d = new Date(date);
    d.setHours(0, 0, 0, 0);
    return d;
}

export function isWithinLowerBound(
    value: Date | string | undefined,
    minDate: Date,
    options: { inclusive?: boolean } = { inclusive: false },
): boolean {
    const parsedValue =
        typeof value === "string" ? parseDateString(value) : value;

    if (!parsedValue) return false;

    const val = toDateOnly(parsedValue);
    const min = toDateOnly(minDate);

    return options.inclusive ? val >= min : val > min;
}

export function isWithinUpperBound(
    value: Date | string | undefined,
    maxDate: Date,
    options: { inclusive?: boolean } = { inclusive: false },
): boolean {
    const parsedValue =
        typeof value === "string" ? parseDateString(value) : value;

    if (!parsedValue) return false;

    const val = toDateOnly(parsedValue);
    const max = toDateOnly(maxDate);

    return options.inclusive ? val <= max : val < max;
}

export const getInputValidationState = (
    value?: string,
    min?: string,
    max?: string,
): { value: string; error: DateValidationError | null } => {
    if (!value) {
        return { value: "", error: null };
    }

    if (!isCorrectFormat(value)) {
        return { value, error: "WRONG_FORMAT" };
    }

    const minDate = parseDateString(min);
    if (minDate && !isWithinLowerBound(value, minDate, { inclusive: true })) {
        return { value, error: "OUTSIDE_LOWER_BOUND" };
    }

    const maxDate = parseDateString(max);
    if (maxDate && !isWithinUpperBound(value, maxDate, { inclusive: true })) {
        return { value, error: "OUTSIDE_UPPER_BOUND" };
    }

    return { value, error: null };
};
