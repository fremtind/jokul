import { formatDate, parseDateString, isSameDay } from "./dateFunctions";

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
