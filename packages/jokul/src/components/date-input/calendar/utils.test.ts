import { describe, expect, it } from "vitest";
import {
    getCalendarTable,
    getSelectableMonths,
    getYearOptions,
    isDateDisabled,
} from "./utils.js";

describe("getYearOptions", () => {
    it("spans a range around the current year by default", () => {
        const years = getYearOptions(2020);
        expect(years[0]).toBe(2015);
        expect(years.at(-1)).toBe(2025);
    });

    it("uses min and max years when provided", () => {
        const years = getYearOptions(2020, "2018-01-01", "2022-12-31");
        expect(years[0]).toBe(2018);
        expect(years.at(-1)).toBe(2022);
    });
});

describe("getCalendarTable", () => {
    it("returns seven weekday headers starting on Monday", () => {
        const { headers } = getCalendarTable(2020, 5);
        expect(headers).toHaveLength(7);
        expect(headers[0].toLowerCase()).toBe("mandag");
    });

    it("splits the month into full weeks of seven days", () => {
        const { weeks } = getCalendarTable(2020, 5);
        for (const week of weeks) {
            expect(week).toHaveLength(7);
        }
    });
});

describe("isDateDisabled", () => {
    it("disables dates before min and after max", () => {
        expect(isDateDisabled("2020-06-05", "2020-06-10", "2020-06-20")).toBe(
            true,
        );
        expect(isDateDisabled("2020-06-25", "2020-06-10", "2020-06-20")).toBe(
            true,
        );
    });

    it("keeps dates inside the range enabled", () => {
        expect(isDateDisabled("2020-06-15", "2020-06-10", "2020-06-20")).toBe(
            false,
        );
    });

    // Kalenderen sender ikke-nullpadede datoer som "2020-6-10". Uten normalisering
    // tolkes disse i lokal tid mens min/max tolkes i UTC, slik at min-datoen
    // feilaktig deaktiveres i tidssoner foran UTC (f.eks. Europe/Oslo).
    it("keeps the non-padded min/max boundary dates enabled", () => {
        expect(isDateDisabled("2020-6-10", "2020-06-10", "2020-06-20")).toBe(
            false,
        );
        expect(isDateDisabled("2020-6-20", "2020-06-10", "2020-06-20")).toBe(
            false,
        );
    });

    describe("getSelectableMonths", () => {
        it("returns all twelve months when no min or max is set", () => {
            expect(getSelectableMonths(2026)).toEqual([
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
            ]);
        });

        it("omits months that fall entirely outside min and max", () => {
            // 15. mars – 20. november 2026: jan, feb og des faller bort
            expect(
                getSelectableMonths(2026, "2026-03-15", "2026-11-20"),
            ).toEqual([2, 3, 4, 5, 6, 7, 8, 9, 10]);
        });

        it("keeps a boundary month that still has a selectable day", () => {
            // Kun 31. mars er innenfor -> mars beholdes
            expect(
                getSelectableMonths(2026, "2026-03-31", "2026-12-31"),
            ).toContain(2);
        });

        it("drops a month when its last day is before min", () => {
            // 1. april -> hele mars faller bort
            expect(
                getSelectableMonths(2026, "2026-04-01", "2026-12-31"),
            ).not.toContain(2);
        });

        it("returns no months for a year entirely outside the range", () => {
            expect(
                getSelectableMonths(2025, "2026-03-15", "2026-11-20"),
            ).toEqual([]);
        });
    });
});
