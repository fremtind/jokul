export const dayMonthYearRegex = /^(\d\d)[\.-](\d\d)[\.-](\d{4}|\d{2})$/;

/**
 * Check if two Date objects represent the same day
 *
 * @param date1 first Date to compare
 * @param date2 second Date to compare
 */
export function isSameDay(date1: Date, date2: Date) {
    return (
        date1.getDate() === date2.getDate() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getFullYear() === date2.getFullYear()
    );
}

/**
 * Format a Date object as a string
 *
 * @param date the Date object to format
 * @return returns a date with "dd.mm.yyyy"-format
 */
export function formatDate(date: Date) {
    const day = `${date.getDate()}`.padStart(2, "0");
    const month = `${date.getMonth() + 1}`.padStart(2, "0");
    return `${day}.${month}.${date.getFullYear()}`;
}

/**
 * Convert a date string to a Date object
 *
 * @param dateString date as string with format dd.mm.yyyy
 * @return a Date object representing the given date
 */
export function parseDateString(dateString: string) {
    const match = dayMonthYearRegex.exec(dateString);

    if (!match) {
        return;
    }

    const currentTwoDigitYear = parseInt(new Date().toLocaleString("no-NB", { year: "2-digit" }));
    const parseTwoDigitYear = (year: number) => (year > currentTwoDigitYear ? year + 1900 : year + 2000);

    const day = parseInt(match[1], 10);
    const month = parseInt(match[2], 10) - 1;
    const yearIn = parseInt(match[3], 10);
    const year = yearIn > 99 ? yearIn : parseTwoDigitYear(yearIn);

    const generatedDate = new Date(year, month, day, 0, 0, 0);
    // Days can "overflow" to next month/year in Date(). Return undefined if it does:
    return generatedDate.getMonth() === month && generatedDate.getFullYear() === year ? generatedDate : undefined;
}

/**
 * Check if the date has changed from the previous date
 *
 * @param date First date to compare
 * @param newDate Second date to compare
 */
export function dateHasChanged(date: Date | undefined, newDate: Date) {
    return !date || !isSameDay(date, newDate);
}

/**
 * Check if a given date is outside a given range
 *
 * @param date Input date
 * @param rangeStart Dates before this date should be disabled
 * @param rangeEnd Dates after this date should be disabled
 */
export function dateIsOutsideRange(date: Date, rangeStart: Date | undefined, rangeEnd: Date | undefined) {
    return (rangeEnd && date > rangeEnd) || (rangeStart && date < rangeStart);
}

/**
 * Get the correct initial date for initiating the datepicker reducer store
 *
 * @param value Value from props
 * @param initialDate Initial date from porps
 * @param disableDate Function for checking whether the date should be disabled
 */
export function getInitialDate(
    value: Date | undefined,
    initialDate: Date | undefined,
    disableDate: (date: Date) => boolean | undefined,
) {
    if (!!value) {
        return !disableDate(value) ? value : undefined;
    }
    if (!!initialDate) {
        return !disableDate(initialDate) ? initialDate : undefined;
    }
    return undefined;
}
