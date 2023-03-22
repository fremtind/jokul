/***
 * MIT License
 *
 * Copyright (c) 2017 Deseret Digital Media. 2022 Fremtind Forsikring AS.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import type { ValuePair } from "@fremtind/jkl-core";
import addDays from "date-fns/addDays";
import differenceInCalendarMonths from "date-fns/differenceInCalendarMonths";
import isBefore from "date-fns/isBefore";
import isToday from "date-fns/isToday";
import startOfDay from "date-fns/startOfDay";
import React from "react";
import { parseDateString } from "../utils";

export function composeEventHandlers(...fns: Array<React.MouseEventHandler | undefined>) {
    return (event: React.MouseEvent) =>
        fns.some((fn) => {
            fn && fn(event);
            return event.defaultPrevented;
        });
}

/**
 * Takes a calendars array and figures out the number of months to subtract
 * based on the current offset and the minDate allowed.
 * @param {Object} param The param object
 * @param {Array} param.calendars The calendars array created by the getCalendars function
 * @param {Number} param.offset The num of months to be subtracted
 * @param {Date} param.minDate The earliest date we are allow to subtract back to
 * @returns {Number} The number of months to subtract
 */
export function subtractMonth({
    calendars,
    offset,
    minDate,
}: {
    calendars: CalendarMonth[];
    offset: number;
    minDate?: Date;
}): number {
    if (offset > 1 && minDate) {
        const { firstDayOfMonth } = calendars[0];
        const diffInMonths = differenceInCalendarMonths(firstDayOfMonth, minDate);
        if (diffInMonths < offset) {
            offset = diffInMonths;
        }
    }
    return offset;
}

/**
 * Generates an array of year strings for a year selector component, with min and max dates taken into account.
 *
 * @param {number} currentYear - The current year to center the list around
 * @param {Date | undefined} [minDate] - The minimum date to include in the list of years
 * @param {Date | undefined} [maxDate] - The maximum date to include in the list of years
 *
 * @returns {string[]} - An array of year strings, starting from the earliest year specified by minDate or currentYear - 3, and ending at the latest year specified by maxDate or currentYear + 3
 */
export function getYearSelectOptions(
    currentYear: number,
    minDate: Date | undefined,
    maxDate: Date | undefined,
): string[] {
    if (maxDate && minDate && maxDate < minDate) {
        // Dette burde forhåpentligvis aldri skje, men sørg for at ikke
        // kalenderen kræsjer hvis startdato er etter sluttdato (vis kun inneværende år)
        return [currentYear.toString()];
    }

    if (maxDate && maxDate.getFullYear() < currentYear - 3) {
        // Hvis sluttdato er satt mer enn 3 år før dagens,
        // sørg for å vise noen år tilbake i tid
        return Array(6)
            .fill(null)
            .map((_, index) => maxDate.getFullYear() - index)
            .reverse()
            .map((year) => year.toString());
    }

    if (minDate && minDate.getFullYear() > currentYear + 3) {
        // Hvis startdato er satt mer enn 3 år etter dagens,
        // sørg for å vise noen år frem i tid
        return Array(6)
            .fill(null)
            .map((_, index) => minDate.getFullYear() + index)
            .map((year) => year.toString());
    }

    let start = minDate ? Math.max(minDate.getFullYear(), currentYear - 3) : currentYear - 3;
    let end = maxDate ? Math.min(maxDate.getFullYear(), currentYear + 3) : currentYear + 3;

    const range = [...Array(end - start + 1).keys()].map((x) => x + start);
    const stringRange = range.map((item) => item.toString());

    return stringRange;
}

/**
 * Returns an array of months that are allowed for selection in the current year based on the minimum and maximum dates.
 * @param {number} currentYear The current year
 * @param {string[]} monthNames An array of strings representing the month names
 * @param {Date | undefined} minDate The minimum date that is allowed for selection
 * @param {Date | undefined} maxDate The maximum date that is allowed for selection
 * @returns {ValuePair[]} An array of ValuePairs representing the months that are allowed for selection in the current year
 */
export function getMonthSelectOptions(
    currentYear: number,
    monthNames: string[],
    minDate: Date | undefined,
    maxDate: Date | undefined,
): ValuePair[] {
    const minDateYear = minDate?.getFullYear() || currentYear;
    const minDateMonth = minDate?.getMonth() || 0;
    const maxDateYear = maxDate?.getFullYear() || currentYear;
    const maxDateMonth = maxDate?.getMonth() || 11;

    let startMonth = 0;
    let endMonth = 11;

    if (minDateYear === currentYear) {
        startMonth = minDateMonth;
    }
    if (maxDateYear === currentYear) {
        endMonth = maxDateMonth;
    }

    const filteredMonths = monthNames
        .map((month, index) => ({
            value: index.toString(),
            label: month,
        }))
        .filter(({ value }) => parseInt(value) >= startMonth && parseInt(value) <= endMonth);

    return filteredMonths;
}

/**s
 * Takes a calendars array and figures out the number of months to add
 * based on the current offset and the maxDate allowed.
 * @param {Object} param The param object
 * @param {Array} param.calendars The calendars array created by the getCalendars function
 * @param {Number} param.offset The num of months to be added
 * @param {Date} param.maxDate The furthest date we are allow to add forward to
 * @returns {Number} The number of months to add
 */
export function addMonth({
    calendars,
    offset,
    maxDate,
}: {
    calendars: CalendarMonth[];
    offset: number;
    maxDate?: Date;
}): number {
    if (offset > 1 && maxDate) {
        const { lastDayOfMonth } = calendars[calendars.length - 1];
        const diffInMonths = differenceInCalendarMonths(maxDate, lastDayOfMonth);
        if (diffInMonths < offset) {
            offset = diffInMonths;
        }
    }
    return offset;
}

/**
 * Takes a calendars array and figures out if the back button should be
 * disabled based on the minDate allowed.
 * @param {Object} param The param object
 * @param {Array} param.calendars The calendars array created by the getCalendars function
 * @param {Date} param.minDate The earliest date available
 * @returns {Boolean} Whether the back button should be disabled.
 */
export function isBackDisabled({ calendars, minDate }: { calendars: CalendarMonth[]; minDate?: Date }): boolean {
    if (!minDate) {
        return false;
    }
    const { firstDayOfMonth } = calendars[0];
    const firstDayOfMonthMinusOne = addDays(firstDayOfMonth, -1);
    if (isBefore(firstDayOfMonthMinusOne, minDate)) {
        return true;
    }
    return false;
}

/**
 * Takes a calendars array and figures out if the forward button should be
 * disabled based on the maxDate allowed.
 * @param {Object} param The param object
 * @param {Array} param.calendars The calendars array created by the getCalendars function
 * @param {Date} param.maxDate The furthest date available
 * @returns {Boolean} Whether the forward button should be disabled.
 */
export function isForwardDisabled({ calendars, maxDate }: { calendars: CalendarMonth[]; maxDate?: Date }): boolean {
    if (!maxDate) {
        return false;
    }
    const { lastDayOfMonth } = calendars[calendars.length - 1];
    const lastDayOfMonthPlusOne = addDays(lastDayOfMonth, 1);
    if (isBefore(maxDate, lastDayOfMonthPlusOne)) {
        return true;
    }
    return false;
}

type GetCalendarProps = {
    /**  The date to start the calendar at */
    date: Date;
    /** Date or dates currently selected. */
    selected?: Date | Date[];
    /**  The earliest date available */
    minDate?: Date;
    /**  The earliest date available */
    maxDate?: Date;
    /** The number of months to return in the calendar view */
    monthsToDisplay: number;
    /** The number of months to offset based off the param.date given  */
    offset: number;
    /** First day of week, 0-6 (Sunday to Saturday) */
    firstDayOfWeek: number;
    /** Flag to fill front and back weeks with dates from adjacent months */
    showOutsideDays: boolean;
};

/**
 * Figures out the months data needed based off the number of monthsToDisplay
 * and other options provided.
 * @param {Object} param The param object
 * @param {Date} param.date The date to start the calendar at
 * @param {Array.<Date>} param.selected An array of dates currently selected
 * @param {Number} param.monthsToDisplay The number of months to return in the calendar view
 * @param {Number} param.offset The number of months to offset based off the param.date given
 * @param {Date} param.minDate The earliest date available
 * @param {Date} param.maxDate The furthest date available
 * @param {Number} param.firstDayOfWeek First day of week, 0-6 (Sunday to Saturday)
 * @param {Bool} param.showOutsideDays Flag to fill front and back weeks with dates from adjacent months
 * @returns {Array.<Object>} An array of objects with month data
 */
export function getCalendars({
    date,
    selected,
    monthsToDisplay,
    offset,
    minDate,
    maxDate,
    firstDayOfWeek,
    showOutsideDays,
}: GetCalendarProps): CalendarMonth[] {
    const months: CalendarMonth[] = [];
    const startDate = getStartDate(date, minDate, maxDate);
    for (let i = 0; i < monthsToDisplay; i++) {
        const calendarDates = getMonths({
            month: startDate.getMonth() + i + offset,
            year: startDate.getFullYear(),
            selectedDates: selected,
            minDate,
            maxDate,
            firstDayOfWeek,
            showOutsideDays,
        });
        months.push(calendarDates);
    }
    return months;
}

/**
 * Figures out the actual start date based on
 * the min and max dates available.
 * @param {Date} date The we want to start the calendar at
 * @param {Date} minDate The earliest date available to start at
 * @param {Date} maxDate The latest date available to start at
 * @returns {Date} The actual start date
 */
function getStartDate(date: Date, minDate?: Date, maxDate?: Date): Date {
    let startDate = startOfDay(date);
    if (minDate) {
        const minDateNormalized = startOfDay(minDate);
        if (isBefore(startDate, minDateNormalized)) {
            startDate = minDateNormalized;
        }
    }
    if (maxDate) {
        const maxDateNormalized = startOfDay(maxDate);
        if (isBefore(maxDateNormalized, startDate)) {
            startDate = maxDateNormalized;
        }
    }
    return startDate;
}

type GetMonthsProps = {
    /**  The month to grab data for */
    month: number;
    /**  The year to grab data for */
    year: number;
    /** Date or dates currently selected. */
    selectedDates?: Date | Date[];
    /**  The earliest date available */
    minDate?: Date;
    /**  The earliest date available */
    maxDate?: Date;
    /** First day of week, 0-6 (Sunday to Saturday) */
    firstDayOfWeek: number;
    /** Flag to fill front and back weeks with dates from adjacent months */
    showOutsideDays: boolean;
};

export type CalendarMonth = {
    firstDayOfMonth: Date;
    lastDayOfMonth: Date;
    month: number;
    year: number;
    weeks: CalendarWeek[];
};

export type CalendarWeek = CalendarDay[];

export type CalendarDay = DateInfo | string;

/**
 * Figures what week/day data to return for the given month
 * and year. Adds flags to day data if found in the given selectedDates,
 * if is selectable inside the given min and max dates, or is today.
 * @param {Object} param The param object
 * @param {Number} param.month The month to grab data for
 * @param {Number} param.year The year to grab data for
 * @param {Array.<Date>} sparam.electedDates An array of dates currently selected
 * @param {Date} param.minDate The earliest date available
 * @param {Date} param.maxDate The furthest date available
 * @param {Number} param.firstDayOfWeek First day of week, 0-6 (Sunday to Saturday)
 * @param {Bool} param.showOutsideDays Flag to fill front and back weeks with dates from adjacent months
 * @returns {Object} The data for the selected month/year
 */
function getMonths({
    month,
    year,
    selectedDates,
    minDate,
    maxDate,
    firstDayOfWeek,
    showOutsideDays,
}: GetMonthsProps): CalendarMonth {
    // Get the normalized month and year, along with days in the month.
    const daysMonthYear = getNumDaysMonthYear(month, year);
    const daysInMonth = daysMonthYear.daysInMonth;
    month = daysMonthYear.month;
    year = daysMonthYear.year;

    // Fill out the dates for the month.
    const dates = [];
    for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, month, day);
        const dateObj = {
            date,
            selected: isSelected(selectedDates, date),
            selectable: isSelectable(minDate, maxDate, date),
            today: isToday(date),
            prevMonth: false,
            nextMonth: false,
        };
        dates.push(dateObj);
    }

    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month, daysInMonth);

    const frontWeekBuffer = fillFrontWeek({
        firstDayOfMonth,
        minDate,
        maxDate,
        selectedDates,
        firstDayOfWeek,
        showOutsideDays,
    });

    const backWeekBuffer = fillBackWeek({
        lastDayOfMonth,
        minDate,
        maxDate,
        selectedDates,
        firstDayOfWeek,
        showOutsideDays,
    });

    dates.unshift(...frontWeekBuffer);
    dates.push(...backWeekBuffer);

    // Get the filled out weeks for the
    // given dates.
    const weeks = getWeeks(dates);
    // return the calendar data.
    return {
        firstDayOfMonth,
        lastDayOfMonth,
        month,
        year,
        weeks,
    };
}

type FillFrontWeekProps = {
    firstDayOfMonth: Date;
    /** Date or dates currently selected. */
    selectedDates?: Date | Date[];
    /**  The earliest date available */
    minDate?: Date;
    /**  The earliest date available */
    maxDate?: Date;
    /** First day of week, 0-6 (Sunday to Saturday) */
    firstDayOfWeek: number;
    /** Flag to fill front and back weeks with dates from adjacent months */
    showOutsideDays: boolean;
};

/**
 * Fill front week with either empty buffer or dates from previous month,
 * depending on showOutsideDays flag
 * @param {Object} param The param object
 * @param {Array.<Date>} param.selectedDates An array of dates currently selected
 * @param {Date} param.minDate The earliest date available
 * @param {Date} param.maxDate The furthest date available
 * @param {Date} param.firstDayOfMonth First day of the month
 * @param {Number} param.firstDayOfWeek First day of week, 0-6 (Sunday to Saturday)
 * @param {Bool} param.showOutsideDays Flag to fill front and back weeks with dates from adjacent months
 * @returns {Array.<Date>} Buffer to fill front week
 */
function fillFrontWeek({
    firstDayOfMonth,
    minDate,
    maxDate,
    selectedDates,
    firstDayOfWeek,
    showOutsideDays,
}: FillFrontWeekProps): CalendarWeek {
    const dates: CalendarWeek = [];
    let firstDay = (firstDayOfMonth.getDay() + 7 - firstDayOfWeek) % 7;

    if (showOutsideDays) {
        const lastDayOfPrevMonth = addDays(firstDayOfMonth, -1);
        const prevDate = lastDayOfPrevMonth.getDate();
        const prevDateMonth = lastDayOfPrevMonth.getMonth();
        const prevDateYear = lastDayOfPrevMonth.getFullYear();

        // Fill out front week for days from
        // preceding month with dates from previous month.
        let counter = 0;
        while (counter < firstDay) {
            const date = new Date(prevDateYear, prevDateMonth, prevDate - counter);
            const dateObj: DateInfo = {
                date,
                selected: isSelected(selectedDates, date),
                selectable: isSelectable(minDate, maxDate, date),
                today: false,
                prevMonth: true,
                nextMonth: false,
            };
            dates.unshift(dateObj);
            counter++;
        }
    } else {
        // Fill out front week for days from
        // preceding month with buffer.
        while (firstDay > 0) {
            dates.unshift("");
            firstDay--;
        }
    }

    return dates;
}

export type DateInfo = {
    date: Date;
    selected: boolean;
    selectable: boolean;
    today: boolean;
    prevMonth: boolean;
    nextMonth: boolean;
};

type FillBackWeekProps = {
    lastDayOfMonth: Date;
    /** Date or dates currently selected. */
    selectedDates?: Date | Date[];
    /**  The earliest date available */
    minDate?: Date;
    /**  The earliest date available */
    maxDate?: Date;
    /** First day of week, 0-6 (Sunday to Saturday) */
    firstDayOfWeek: number;
    /** Flag to fill front and back weeks with dates from adjacent months */
    showOutsideDays: boolean;
};

/**
 * Fill back weeks with either empty buffer or dates from next month,
 * depending on showOutsideDays flag
 * @param {Object} param The param object
 * @param {Array.<Date>} param.selectedDates An array of dates currently selected
 * @param {Date} param.minDate The earliest date available
 * @param {Date} param.maxDate The furthest date available
 * @param {Date} param.lastDayOfMonth Last day of the month
 * @param {Number} param.firstDayOfWeek First day of week, 0-6 (Sunday to Saturday)
 * @param {Bool} param.showOutsideDays Flag to fill front and back weeks with dates from adjacent months
 * @returns {Array.<Date>} Buffer to fill back week
 */
function fillBackWeek({
    lastDayOfMonth,
    minDate,
    maxDate,
    selectedDates,
    firstDayOfWeek,
    showOutsideDays,
}: FillBackWeekProps): CalendarWeek {
    const dates: CalendarWeek = [];
    let lastDay = (lastDayOfMonth.getDay() + 7 - firstDayOfWeek) % 7;

    if (showOutsideDays) {
        const firstDayOfNextMonth = addDays(lastDayOfMonth, 1);
        const nextDateMonth = firstDayOfNextMonth.getMonth();
        const nextDateYear = firstDayOfNextMonth.getFullYear();

        // Fill out back week for days from
        // following month with dates from next month.
        let counter = 0;
        while (counter < 6 - lastDay) {
            const date = new Date(nextDateYear, nextDateMonth, 1 + counter);
            const dateObj: DateInfo = {
                date,
                selected: isSelected(selectedDates, date),
                selectable: isSelectable(minDate, maxDate, date),
                today: false,
                prevMonth: false,
                nextMonth: true,
            };
            dates.push(dateObj);
            counter++;
        }
    } else {
        // Fill out back week for days from
        // following month with buffer.
        while (lastDay < 6) {
            dates.push("");
            lastDay++;
        }
    }

    return dates;
}

/**
 * Normalizes month (could be overflow) and year pairs and returns the
 * normalized month and year along with the number of days in the month.
 * @param {Number} month The month to normalize
 * @param {Number} year The year to normalize
 * @returns {Object} The normalized month and year along with the number of days in the month
 */
function getNumDaysMonthYear(month: number, year: number): { daysInMonth: number; month: number; year: number } {
    // If a parameter you specify is outside of the expected range for Month or Day,
    // JS Date attempts to update the date information in the Date object accordingly!
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setMonth
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setDate

    // Let Date handle the overflow of the month,
    // which should return the normalized month and year.
    const normalizedMonthYear = new Date(year, month, 1);
    month = normalizedMonthYear.getMonth();
    year = normalizedMonthYear.getFullYear();
    // Overflow the date to the next month, then subtract the difference
    // to get the number of days in the previous month.
    // This will also account for leap years!
    const daysInMonth = 32 - new Date(year, month, 32).getDate();
    return { daysInMonth, month, year };
}

/**
 * Takes an array of dates, and turns them into a multi dimensional
 * array with 7 entries for each week.
 * @param {Array.<Object>} dates An array of dates
 * @returns {Array} The weeks as a multi dimensional array
 */
function getWeeks(dates: CalendarWeek): Array<CalendarWeek> {
    const weeksLength = Math.ceil(dates.length / 7);
    const weeks: Array<CalendarWeek> = [];
    for (let i = 0; i < weeksLength; i++) {
        weeks[i] = [];
        for (let x = 0; x < 7; x++) {
            weeks[i].push(dates[i * 7 + x]);
        }
    }
    return weeks;
}

/**
 * Normalizes dates to the beginning of the day,
 * then checks to see if the day given is found
 * in the selectedDates.
 * @param {Array.<Date>} selectedDates An array of dates currently selected
 * @param {Date} date The date to search with against selectedDates
 * @returns {Boolean} Whether day is found in selectedDates
 */
function isSelected(selectedDates: Date | Date[] | undefined, date: Date): boolean {
    if (!selectedDates) {
        return false;
    }
    selectedDates = Array.isArray(selectedDates) ? selectedDates : [selectedDates];
    return selectedDates.some((selectedDate) => {
        if (selectedDate instanceof Date && startOfDay(selectedDate).getTime() === startOfDay(date).getTime()) {
            return true;
        }
        return false;
    });
}

/**
 * Checks to see if the date given is
 * between the min and max dates.
 * @param {Date} minDate The earliest date available
 * @param {Date} maxDate The furthest date available
 * @param {Date} date The date to compare with
 * @returns {Boolean} Whether the date is between min and max date
 */
function isSelectable(minDate: Date | undefined, maxDate: Date | undefined, date: Date): boolean {
    if ((minDate && isBefore(date, minDate)) || (maxDate && isBefore(maxDate, date))) {
        return false;
    }
    return true;
}

/**
 * Check if two Date objects represent the same day
 *
 * @param date1 first Date to compare
 * @param date2 second Date to compare
 */
export function isSameDay(date1: Date, date2: Date): boolean {
    return (
        date1.getDate() === date2.getDate() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getFullYear() === date2.getFullYear()
    );
}

/**
 * Check if the date has changed from the previous date
 *
 * @param date First date to compare
 * @param newDate Second date to compare
 */
export function dateHasChanged(date: Date | undefined, newDate: Date): boolean {
    return !date || !isSameDay(date, newDate);
}

/**
 * Check if a given date is outside a given range
 *
 * @param date Input date
 * @param rangeStart Dates before this date should be disabled
 * @param rangeEnd Dates after this date should be disabled
 */
export function dateIsOutsideRange(date: Date, rangeStart: Date | undefined, rangeEnd: Date | undefined): boolean {
    return Boolean((rangeEnd && date > rangeEnd) || (rangeStart && date < rangeStart));
}

/**
 * Get the correct initial date for initiating the datepicker reducer store
 *
 * @param value Value from props
 * @param initialDate Initial date from porps
 * @param disableDate Function for checking whether the date should be disabled
 */
export function getInitialDate(
    value: string | undefined,
    defaultValue: string | undefined,
    minDate: Date | undefined,
    maxDate: Date | undefined,
): Date | null {
    const valueAsDate = parseDateString(value);
    const defaultValueAsDate = parseDateString(defaultValue);
    if (valueAsDate) {
        return !dateIsOutsideRange(valueAsDate, minDate, maxDate) ? valueAsDate : null;
    }
    if (defaultValueAsDate) {
        return !dateIsOutsideRange(defaultValueAsDate, minDate, maxDate) ? defaultValueAsDate : null;
    }
    return null;
}

/**
 * Get the initial date to show in the calendar
 *
 * @param date The date set in the DatePicker (from props)
 * @param defaultSelected The defaultSelected prop from DatePicker
 * @param minDate The earliest selectable date, from props
 * @param maxDate The latest selectable date, from props
 * @returns The date to show in the calendar
 */
export function getInitialDateShown(
    date: Date | null,
    defaultSelected: Date | undefined,
    minDate: Date | undefined,
    maxDate: Date | undefined,
): Date {
    if (date) {
        return date;
    } else if (defaultSelected) {
        return defaultSelected;
    } else if (minDate && minDate > new Date()) {
        return minDate;
    } else if (maxDate && maxDate < new Date()) {
        return maxDate;
    } else {
        return new Date();
    }
}
