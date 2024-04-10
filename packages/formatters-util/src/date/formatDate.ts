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
    // Tillater datoer på formene DD-MM-YY og DD-MM-YYYY
    full: /^(0[1-9]|[12][0-9]|3[01])(0[1-9]|1[0-2])(\d{2}|\d{4})$/,
    partial: /^(0[1-9]|[12][0-9]|3[01])(0[1-9]|1[0-2])?(\d{1,4})?$/,
};

type FormatDateStringOptions = {
    partial?: boolean;
    separator?: "." | "-" | " " | "/";
};

export function formatDateString(input: string, options?: FormatDateStringOptions): string {
    const strippedInput = input.replace(/\D/g, "");
    const regex = options?.partial ? DATE_REGEX.partial : DATE_REGEX.full;

    const match = strippedInput.match(regex);

    if (!match) {
        return input;
    }

    return match
        .slice(1)
        .filter(Boolean)
        .join(options?.separator || ".");
}
