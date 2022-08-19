import React from "react";

export const dayMonthYearRegex = /^(\d\d?)[\.-](\d\d?)[\.-](\d{4}|\d{2})$/;

/**
 * Format a Date object as a string in the format DatePicker expects.
 *
 * @param date the Date object to format
 * @return returns a date string with "dd.mm.yyyy"-format
 */
export function formatInput(date: Date): string {
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

/**
 * Hjelpefunksjon for å se om en onBlur går utenfor DatePicker,
 * eller om den går til et interaktivt element inni DatePickeren.
 * @param {React.FocusEvent<HTMLButtonElement | HTMLInputElement>} e - Eventet fra onBlur og action.onBlur
 * @returns {boolean} true hvis e.relatedTarget er utenfor DatePicker
 */
export function isBlurTargetOutside(e: React.FocusEvent<HTMLButtonElement | HTMLInputElement>): boolean {
    if (!e.relatedTarget) {
        return true;
    }

    const targetRoot = e.target.closest(".jkl-datepicker__input-wrapper");
    const relatedTargetRoot = e.relatedTarget.closest(".jkl-datepicker__input-wrapper");

    return relatedTargetRoot !== targetRoot;
}
