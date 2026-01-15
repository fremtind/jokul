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

export const DATE_REGEX = {
    // Tillater datoer på formene DDMMYY og DDMMYYYY
    full: /^(0[1-9]|[12][0-9]|3[01])(0[1-9]|1[0-2])(\d{2}|\d{4})$/,
    partial: /^(0[1-9]|[12][0-9]|3[01])(0[1-9]|1[0-2])?(\d{1,4})?$/,
};

type FormatDateStringOptions = {
    partial?: boolean;
};

export function formatDateString(
    input: string,
    options?: FormatDateStringOptions,
): string {
    const digits = input.replace(/\D/g, "");
    const regex = options?.partial ? DATE_REGEX.partial : DATE_REGEX.full;

    if (!digits.match(regex)) return input;

    if (digits.length <= 1) return digits;
    if (digits.length === 2) return `${digits}.`;
    if (digits.length === 3) return `${digits.slice(0, 2)}.${digits.slice(2)}`;
    if (digits.length === 4) return `${digits.slice(0, 2)}.${digits.slice(2)}.`;
    return `${digits.slice(0, 2)}.${digits.slice(2, 4)}.${digits.slice(4)}`;
}
