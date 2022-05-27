export const dayMonthYearRegex = /^(\d\d?)[\.-](\d\d?)[\.-](\d{4}|\d{2})$/;

/**
 * Convert a date string to a Date object
 *
 * @param dateString date as string with format dd.mm.yyyy
 * @return a Date object representing the given date
 */
export function parseDateString(dateString?: string): Date | undefined {
    if (!dateString) {
        return undefined;
    }

    const match = dayMonthYearRegex.exec(dateString);

    if (!match) {
        return undefined;
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
