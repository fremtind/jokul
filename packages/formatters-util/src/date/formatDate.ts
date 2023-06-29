/**
 * Formaterer en dato med "dd.mm.yyyy"-format.
 * @param date Verdien som skal formateres
 * @returns Verdien i "dd.mm.yyyy"-format
 */
export function formatDate(date: Date): string {
    const day = `${date.getDate()}`.padStart(2, "0");
    const month = `${date.getMonth() + 1}`.padStart(2, "0");
    return `${day}.${month}.${date.getFullYear()}`;
}
