export const weekStartsOn = 1;
export const locale = "nb-NO";
export const months = getMonthNames(locale);

const DEFAULT_YEARS_RANGE = 5;

export function getMonthNames(locale: string): string[] {
    const formatter = new Intl.DateTimeFormat(locale, { month: "long" });
    return Array.from({ length: 12 }, (_, i) =>
        formatter.format(new Date(2000, i, 1)),
    );
}

export function getCalendarTable(year: number, month: number) {
    const now = new Date();
    const y = Number.isFinite(year) ? year : now.getFullYear();
    const m = Number.isFinite(month) ? month : now.getMonth();

    const daysInMonth = new Date(y, m + 1, 0).getDate();
    const firstDay = new Date(y, m, 1).getDay(); // 0 = Sunday

    const leadingBlanks = (firstDay - weekStartsOn + 7) % 7;

    const cells: Array<number | null> = [
        ...Array(leadingBlanks).fill(null),
        ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
    ];

    while (cells.length % 7 !== 0) cells.push(null);

    const weeks: Array<Array<number | null>> = [];
    for (let i = 0; i < cells.length; i += 7) {
        weeks.push(cells.slice(i, i + 7));
    }

    const formatter = new Intl.DateTimeFormat(locale, { weekday: "long" });
    const headers = Array.from({ length: 7 }, (_, i) => {
        const d = new Date(2024, 0, 7 + ((weekStartsOn + i) % 7));
        return formatter.format(d);
    });

    return { headers, weeks };
}

/** Genererer år-listen for dropdown, begrenset av minDate/maxDate */
export function getYearOptions(
    currentYear: number,
    min?: string,
    max?: string,
): number[] {
    const minDate = min ? new Date(min) : undefined;
    const maxDate = max ? new Date(max) : undefined;

    const startYear = minDate
        ? Math.max(currentYear - DEFAULT_YEARS_RANGE, minDate.getFullYear())
        : currentYear - DEFAULT_YEARS_RANGE;

    const endYear = maxDate
        ? Math.min(currentYear + DEFAULT_YEARS_RANGE, maxDate.getFullYear())
        : currentYear + DEFAULT_YEARS_RANGE;

    const length = Math.max(endYear - startYear + 1, 1);
    return Array.from({ length }, (_, i) => startYear + i);
}
