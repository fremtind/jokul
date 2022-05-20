import { formatDate, parseDateString, isSameDay, dateHasChanged, dateIsOutsideRange, getInitialDate } from "./utils";

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
    const value = new Date("2001-10-14");
    const initialDate = new Date("2001-10-01");
    const disableDate = (value: Date) => dateIsOutsideRange(value, new Date("2001-09-14"), new Date("2001-11-14"));

    it("returns undefined if value is undefined and initialDate is outside range", () => {
        expect(getInitialDate(undefined, new Date("1986-10-14"), disableDate)).toBeUndefined();
    });

    it("returns initialDate if value is undefined and initialDate is inside range", () => {
        expect(getInitialDate(undefined, initialDate, disableDate)).toEqual(initialDate);
    });

    it("returns value if initialDate is undefined and value is inside range", () => {
        expect(getInitialDate(value, undefined, disableDate)).toEqual(value);
    });

    it("returns value if both is defined and inside range", () => {
        expect(getInitialDate(value, initialDate, disableDate)).toEqual(value);
    });
});
