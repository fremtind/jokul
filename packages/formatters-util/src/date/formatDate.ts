/**
 * Format a Date object as a string with Norwegian locale
 *
 * @param date the Date object to format
 * @return returns a date with "dd.mm.yyyy"-format
 */
export function formatDate(date: Date): string {
    const day = `${date.getDate()}`.padStart(2, "0");
    const month = `${date.getMonth() + 1}`.padStart(2, "0");
    return `${day}.${month}.${date.getFullYear()}`;
}
