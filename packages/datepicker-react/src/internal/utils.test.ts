import { formatDate } from "../../../formatters-util/src";
import { parseDateString } from "../utils";
import { isSameDay, dateHasChanged, dateIsOutsideRange, getInitialDate, getYearSelectOptions } from "./utils";

describe("formatDate", () => {
    it("renders the given date correctly", () => {
        const date = new Date("1986-10-14");
        const formattedDate = formatDate(date);

        expect(formattedDate).toEqual("14.10.1986");
    });
});

describe("parseDateString", () => {
    it("creates the correct Date object from valid date", () => {
        const dateString = "14.10.1986";
        const parsedDate = parseDateString(dateString);

        expect(parsedDate?.getDate()).toEqual(14);
        expect(parsedDate?.getMonth()).toEqual(9); // zero-indexed
        expect(parsedDate?.getFullYear()).toEqual(1986);
    });

    it("returns undefined for invalid date strings", () => {
        const dateString = "not a date";
        const parsedDate = parseDateString(dateString);

        expect(parsedDate).toBeUndefined();
    });

    it("does not allow overflowing dates", () => {
        const dateString = "33.02.2021";
        const parsedDate = parseDateString(dateString);

        expect(parsedDate).toBeUndefined();
    });
});

describe("isSameDay", () => {
    it("returns true for equal dates", () => {
        const date = new Date("1986-10-14");

        expect(isSameDay(date, date)).toBeTruthy();
    });
    it("returns false for different dates", () => {
        const date1 = new Date("1986-10-14");
        const date2 = new Date("2001-10-14");

        expect(isSameDay(date1, date2)).toBeFalsy();
    });
});

describe("dateHasChanged", () => {
    const date1 = new Date("1986-10-14");
    const date2 = new Date("2001-10-14");

    it("returns true if date is undefined", () => {
        expect(dateHasChanged(undefined, date2)).toBeTruthy();
    });

    it("returns true for different dates", () => {
        expect(dateHasChanged(date1, date2)).toBeTruthy();
    });

    it("returns false for dates that are the same", () => {
        expect(dateHasChanged(date1, date1)).toBeFalsy();
    });
});

describe("dateIsOutsideRange", () => {
    const value = new Date("2001-10-14");
    const valueAfter = new Date("2001-12-14");
    const valueBefore = new Date("2001-08-14");

    const rangeStart = new Date("2001-09-14");
    const rangeEnd = new Date("2001-11-14");

    it("returns false if there is no defined range", () => {
        expect(dateIsOutsideRange(value, undefined, undefined)).toBeFalsy();
    });

    it("returns false if value is after rangeStart", () => {
        expect(dateIsOutsideRange(value, rangeStart, undefined)).toBeFalsy();
    });

    it("returns false if value is before rangeEnd", () => {
        expect(dateIsOutsideRange(value, undefined, rangeEnd)).toBeFalsy();
    });

    it("returns false if value is inside range definitions", () => {
        expect(dateIsOutsideRange(value, rangeStart, rangeEnd)).toBeFalsy();
    });

    it("returns true if value is after rangeEnd", () => {
        expect(dateIsOutsideRange(valueAfter, undefined, rangeEnd)).toBeTruthy();
    });

    it("returns true if value is before outside range", () => {
        expect(dateIsOutsideRange(valueBefore, rangeStart, rangeEnd)).toBeTruthy();
        expect(dateIsOutsideRange(valueAfter, rangeStart, rangeEnd)).toBeTruthy();
    });

    it("returns true if value is before rangeStart", () => {
        expect(dateIsOutsideRange(valueBefore, rangeStart, undefined)).toBeTruthy();
    });
});

describe("getInitialDate", () => {
    const value = "14.10.2001";
    const initialDate = "01.10.2001";
    const minDate = new Date(2001, 8, 14);
    const maxDate = new Date(2001, 10, 14);
    const expectedValue = new Date(2001, 9, 14);
    const expectedInitialDate = new Date(2001, 9, 1);

    it("returns null if value is undefined and initialDate is outside range", () => {
        expect(getInitialDate(undefined, "1986-10-14", minDate, maxDate)).toBeNull();
    });

    it("returns initialDate if value is undefined and initialDate is inside range", () => {
        expect(getInitialDate(undefined, initialDate, minDate, maxDate)).toEqual(expectedInitialDate);
    });

    it("returns value if initialDate is undefined and value is inside range", () => {
        expect(getInitialDate(value, undefined, minDate, maxDate)).toEqual(expectedValue);
    });

    it("returns value if both is defined and inside range", () => {
        expect(getInitialDate(value, initialDate, minDate, maxDate)).toEqual(expectedValue);
    });
});

describe("getYearSelectOptions", () => {
    it("returns given number of years before and after current year if no min or max is set", () => {
        const CURRENT_YEAR = 2023;
        const NUMBER_OF_YEARS_TO_SHOW = 3;
        const years = getYearSelectOptions(CURRENT_YEAR, undefined, undefined, NUMBER_OF_YEARS_TO_SHOW);

        expect(years.indexOf((CURRENT_YEAR - NUMBER_OF_YEARS_TO_SHOW).toString())).not.toBe(-1);
        expect(years.indexOf((CURRENT_YEAR + NUMBER_OF_YEARS_TO_SHOW).toString())).not.toBe(-1);
    });

    it("shows min and max dates when number of years to show is set to 'all'", () => {
        const NUMBER_OF_YEARS_TO_SHOW = "all";
        const MIN_YEAR = 2020;
        const MAX_YEAR = 2030;
        const years = getYearSelectOptions(
            2023,
            new Date(MIN_YEAR, 1, 1),
            new Date(MAX_YEAR, 1, 1),
            NUMBER_OF_YEARS_TO_SHOW,
        );

        expect(years.indexOf(MIN_YEAR.toString())).not.toBe(-1);
        expect(years.indexOf(MAX_YEAR.toString())).not.toBe(-1);
    });

    it("shows first possible year when min date is set after current year", () => {
        const years = getYearSelectOptions(2023, new Date(2028, 2, 11), undefined, 3);

        expect(years.indexOf("2023")).toBe(-1);
        expect(years.indexOf("2028")).not.toBe(-1);
    });

    it("shows last possible year when max date is set before current year", () => {
        const years = getYearSelectOptions(2023, undefined, new Date(2019, 2, 11), 3);

        expect(years.indexOf("2023")).toBe(-1);
        expect(years.indexOf("2019")).not.toBe(-1);
    });
});
