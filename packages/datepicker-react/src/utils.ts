import React from "react";

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

/**
 * Hjelpefunksjon for å se om en onBlur går utenfor DatePicker,
 * eller om den går til et interaktivt element inni DatePickeren.
 * @param {React.FocusEvent<HTMLButtonElement | HTMLInputElement>} e - Eventet fra onBlur og action.onBlur
 * @returns {boolean} true hvis e.relatedTarget ikke matcher noen kjente elementer fra DatePicker, altså er utenfor DatePicker
 */
export function isBlurTargetOutside(e: React.FocusEvent<HTMLButtonElement | HTMLInputElement>): boolean {
    if (!e.relatedTarget) {
        return true;
    }

    const knownBlurTargetsInsideDatepicker = [
        "jkl-datepicker__action-button",
        "jkl-calendar__date",
        "jkl-datepicker__input",
    ];

    for (const knownTarget of knownBlurTargetsInsideDatepicker) {
        if (e.relatedTarget.classList.contains(knownTarget)) {
            return false;
        }
    }

    return true;
}
