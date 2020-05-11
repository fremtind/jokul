export const dayMonthYearRegex = /^(\d\d)\.(\d\d)\.(\d{4})/;

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

    const day = parseInt(match[1], 10);
    const month = parseInt(match[2], 10) - 1;
    const year = parseInt(match[3], 10);

    return new Date(year, month, day, 0, 0, 0);
}
