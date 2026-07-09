import { describe, expect, it } from "vitest";
import {
    getCalendarTable,
    getYearOptions,
    isDateDisabled,
    weekStartsOn,
} from "./utils.js";

describe("getCalendarTable", () => {
    it("returns headers for all weekdays", () => {
        const { headers } = getCalendarTable(2026, 2);
        expect(headers).toHaveLength(7);
    });

    it("starts weeks on configured weekday", () => {
        const { weeks } = getCalendarTable(2026, 2);
        const firstWeek = weeks[0] || [];
        const leadingBlanks = firstWeek.findIndex((day) => day !== null);
        expect(leadingBlanks).toBe(
            (new Date(2026, 2, 1).getDay() - weekStartsOn + 7) % 7,
        );
    });

    it("returns a valid table for leap-year february", () => {
        const { weeks } = getCalendarTable(2024, 1);
        const days = weeks.flat().filter((day): day is number => day !== null);
        expect(days).toContain(29);
    });
});

describe("isDateDisabled", () => {
    it("returns false when no bounds are set", () => {
        expect(isDateDisabled(new Date(2026, 2, 15))).toBe(false);
    });

    it("returns true when date is before min", () => {
        expect(
            isDateDisabled(
                new Date(2026, 2, 14),
                new Date(2026, 2, 15),
                undefined,
            ),
        ).toBe(true);
    });

    it("returns true when date is after max", () => {
        expect(
            isDateDisabled(
                new Date(2026, 2, 16),
                undefined,
                new Date(2026, 2, 15),
            ),
        ).toBe(true);
    });

    it("treats min and max as inclusive", () => {
        expect(
            isDateDisabled(
                new Date(2026, 2, 15),
                new Date(2026, 2, 15),
                new Date(2026, 2, 15),
            ),
        ).toBe(false);
    });

    it("returns true on weekends when disableWeekends is set", () => {
        expect(
            isDateDisabled(new Date(2026, 2, 14), undefined, undefined, true),
        ).toBe(true);
        expect(
            isDateDisabled(new Date(2026, 2, 16), undefined, undefined, true),
        ).toBe(false);
    });
});

describe("getYearOptions", () => {
    it("returns years around current year when no bounds are set", () => {
        const years = getYearOptions(2026, undefined, undefined);
        expect(years).toContain(2021);
        expect(years).toContain(2031);
    });

    it("includes min and max years when they are inside the visible range", () => {
        const years = getYearOptions(
            2025,
            new Date(2020, 1, 1),
            new Date(2030, 1, 1),
        );
        expect(years).toContain(2020);
        expect(years).toContain(2030);
    });

    it("starts at min year when min is after default range", () => {
        const years = getYearOptions(2023, new Date(2028, 2, 11), undefined);
        expect(years).not.toContain(2023);
        expect(years).toContain(2028);
    });

    it("ends at max year when max is before default range", () => {
        const years = getYearOptions(2023, undefined, new Date(2019, 2, 11));
        expect(years).not.toContain(2023);
        expect(years).toContain(2019);
    });
});
