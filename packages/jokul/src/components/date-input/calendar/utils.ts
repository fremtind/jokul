import { toValidInputValue } from "../utils.js";
import type { CalendarProps } from "./types.js";

const NORWEGIAN_LOCALE = "nb-NO";
const WEEK_STARTS_ON = 1;
export function getCalendarTable(year: number, month: number) {
    const now = new Date();
    const y = Number.isFinite(year) ? year : now.getFullYear();
    const m = Number.isFinite(month) ? month : now.getMonth();

    const daysInMonth = new Date(y, m + 1, 0).getDate();
    const firstDay = new Date(y, m, 1).getDay(); // 0 = Sunday

    const leadingBlanks = (firstDay - WEEK_STARTS_ON + 7) % 7;

    const cells: Array<number | null> = [
        ...Array(leadingBlanks).fill(null),
        ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
    ];

    while (cells.length % 7 !== 0) cells.push(null);

    const weeks: Array<Array<number | null>> = [];
    for (let i = 0; i < cells.length; i += 7) {
        weeks.push(cells.slice(i, i + 7));
    }

    const formatter = new Intl.DateTimeFormat(NORWEGIAN_LOCALE, {
        weekday: "long",
    });
    const headers = Array.from({ length: 7 }, (_, i) => {
        const d = new Date(2024, 0, 7 + ((WEEK_STARTS_ON + i) % 7));
        return formatter.format(d);
    });

    return { headers, weeks };
}

const DEFAULT_YEARS_RANGE = 5;
export function getYearOptions(
    currentYear: number,
    min?: string,
    max?: string,
): number[] {
    const parsedMinYear = min
        ? new Date(toValidInputValue(min) || "").getUTCFullYear()
        : Number.NaN;
    const parsedMaxYear = max
        ? new Date(toValidInputValue(max) || "").getUTCFullYear()
        : Number.NaN;

    const minYear = Number.isFinite(parsedMinYear)
        ? parsedMinYear
        : currentYear - DEFAULT_YEARS_RANGE;
    const maxYear = Number.isFinite(parsedMaxYear)
        ? parsedMaxYear
        : currentYear + DEFAULT_YEARS_RANGE;

    const startYear = Math.min(minYear, currentYear);
    const endYear = Math.max(maxYear, currentYear);

    const years: number[] = [];
    for (let year = startYear; year <= endYear; year++) {
        years.push(year);
    }
    return years;
}

export function getMonthNames(locale: string): string[] {
    const formatter = new Intl.DateTimeFormat(locale, { month: "long" });
    return Array.from({ length: 12 }, (_, i) =>
        formatter.format(new Date(2000, i, 1)),
    );
}
export const months = getMonthNames(NORWEGIAN_LOCALE);

export const isDateDisabled = (
    value: CalendarProps["value"],
    min?: CalendarProps["min"],
    max?: CalendarProps["max"],
): boolean => {
    if (value) {
        const date = new Date(toValidInputValue(value) || "");
        const minDate = min
            ? new Date(toValidInputValue(min) || "")
            : undefined;
        const maxDate = max
            ? new Date(toValidInputValue(max) || "")
            : undefined;
        if (minDate && date < minDate) return true;
        if (maxDate && date > maxDate) return true;
    }
    return false;
};

export const addDays = (date: Date, amount: number): Date => {
    const next = new Date(date);
    next.setDate(next.getDate() + amount);
    return next;
};

export const addMonths = (date: Date, amount: number): Date => {
    const first = new Date(date.getFullYear(), date.getMonth() + amount, 1);
    const lastDayOfMonth = new Date(
        first.getFullYear(),
        first.getMonth() + 1,
        0,
    ).getDate();
    first.setDate(Math.min(date.getDate(), lastDayOfMonth));
    return first;
};

export const startOfWeek = (date: Date): Date => {
    const next = new Date(date);
    const diff = (next.getDay() - WEEK_STARTS_ON + 7) % 7;
    next.setDate(next.getDate() - diff);
    return next;
};

export const endOfWeek = (date: Date): Date => addDays(startOfWeek(date), 6);

export const isoToLocalDate = (value: string | undefined): Date | null => {
    const iso = toValidInputValue(value);
    if (!iso) return null;
    const [year, month, day] = iso.split("-").map(Number);
    return new Date(year, month - 1, day);
};

export const clampDateToRange = (
    date: Date,
    min?: string,
    max?: string,
): Date => {
    const iso = toValidInputValue(date);
    const minIso = min ? toValidInputValue(min) : "";
    const maxIso = max ? toValidInputValue(max) : "";
    if (minIso && iso < minIso) return isoToLocalDate(minIso) ?? date;
    if (maxIso && iso > maxIso) return isoToLocalDate(maxIso) ?? date;
    return date;
};

export const hasSelectableDateInMonth = (
    year: number,
    month: number,
    min?: string,
    max?: string,
): boolean => {
    const firstIso = toValidInputValue(new Date(year, month, 1));
    const lastIso = toValidInputValue(new Date(year, month + 1, 0));
    const minIso = min ? toValidInputValue(min) : "";
    const maxIso = max ? toValidInputValue(max) : "";
    if (minIso && lastIso < minIso) return false;
    if (maxIso && firstIso > maxIso) return false;
    return true;
};

export const getSelectableMonths = (
    year: number,
    min?: string,
    max?: string,
): number[] =>
    months
        .map((_, index) => index)
        .filter((index) => hasSelectableDateInMonth(year, index, min, max));

const MONTH_CHANGE_KEYS = ["PageUp", "PageDown"];
export const getNextFocusableDate = (
    key: string,
    shiftKey: boolean,
    focusedDate: Date,
    min?: string,
    max?: string,
): Date | null => {
    const naive = getDateForCalendarKey(key, shiftKey, focusedDate);
    if (!naive) {
        return null;
    }

    // Måneds-/årshopp inn i en helt disabla måned skal være en no-op,
    // på linje med de disabla ‹ ›-knappene.
    if (
        MONTH_CHANGE_KEYS.includes(key) &&
        !hasSelectableDateInMonth(
            naive.getFullYear(),
            naive.getMonth(),
            min,
            max,
        )
    ) {
        return null;
    }

    // Klamper til nærmeste valgbare dato (håndterer bl.a. at selve
    // måldagen kan være før min / etter max selv om måneden har gyldige dager).
    return clampDateToRange(naive, min, max);
};

// Mapper et tastetrykk til datoen navigasjonen skal flytte til.
// Returnerer null for taster som ikke er navigasjon (håndteres i komponenten).
export const getDateForCalendarKey = (
    key: string,
    shiftKey: boolean,
    focusedDate: Date,
): Date | null => {
    switch (key) {
        case "ArrowLeft":
            return addDays(focusedDate, -1);
        case "ArrowRight":
            return addDays(focusedDate, 1);
        case "ArrowUp":
            return addDays(focusedDate, -7);
        case "ArrowDown":
            return addDays(focusedDate, 7);
        case "Home":
            return startOfWeek(focusedDate);
        case "End":
            return endOfWeek(focusedDate);
        case "PageUp":
            return addMonths(focusedDate, shiftKey ? -12 : -1);
        case "PageDown":
            return addMonths(focusedDate, shiftKey ? 12 : 1);
        default:
            return null;
    }
};
