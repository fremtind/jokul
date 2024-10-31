import React from "react";

const dayMonthYearRegex = /^(\d\d?)[\W](\d\d?)[\W](\d{4}|\d{2})$/;
const yearMonthDayRegex = /^(\d{4}|\d{2})[\W](\d\d?)[\W](\d\d?)$/;

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
 * Get the date segments from a string of unknown format
 *
 * @param input date as a string with unknown format
 * @returns an array of string elements [day, month, year]
 */
const getDateSegmentsFromString = (input: string): string[] | undefined => {
    const dayMonthYear = dayMonthYearRegex.exec(input);

    if (dayMonthYear) {
        return dayMonthYear.slice(1, 4);
    }

    const yearMonthDay = yearMonthDayRegex.exec(input);

    if (!yearMonthDay) {
        return undefined;
    }

    // reverse to get the correct ordering
    const slicedDateSegments = yearMonthDay.slice(1, 4);
    slicedDateSegments.reverse();

    return slicedDateSegments;
};

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

    const inputDateSegments = getDateSegmentsFromString(dateString);

    if (!inputDateSegments) {
        return undefined;
    }

    const currentTwoDigitYear = parseInt(
        new Date().toLocaleString("no-NB", { year: "2-digit" }),
    );
    const parseTwoDigitYear = (year: number) =>
        year > currentTwoDigitYear ? year + 1900 : year + 2000;

    const day = parseInt(inputDateSegments[0], 10);
    const month = parseInt(inputDateSegments[1], 10) - 1;
    const yearIn = parseInt(inputDateSegments[2], 10);
    const year = yearIn > 99 ? yearIn : parseTwoDigitYear(yearIn);

    const generatedDate = new Date(year, month, day, 0, 0, 0);
    // Days can "overflow" to next month/year in Date(). Return undefined if it does:
    return generatedDate.getMonth() === month &&
        generatedDate.getFullYear() === year
        ? generatedDate
        : undefined;
}

/**
 * Hjelpefunksjon for å se om en onBlur går utenfor DatePicker,
 * eller om den går til et interaktivt element inni DatePickeren.
 * @param {React.FocusEvent<HTMLButtonElement | HTMLInputElement>} e - Eventet fra onBlur og action.onBlur
 * @returns {boolean} true hvis e.relatedTarget er utenfor DatePicker
 */
export function isBlurTargetOutside(
    e: React.FocusEvent<HTMLButtonElement | HTMLInputElement>,
): boolean {
    if (!e.relatedTarget) {
        return true;
    }

    const targetRoot = e.target.closest(".jkl-datepicker__input-wrapper");
    const relatedTargetRoot = e.relatedTarget.closest(
        ".jkl-datepicker__input-wrapper",
    );

    return relatedTargetRoot !== targetRoot;
}
