import { describe, expect, it } from "vitest";
import { formatDateString } from "./formatDate.js";

describe("formatDateString", () => {
    it("formats 6-digit dates correctly", () => {
        expect(formatDateString("141086")).toEqual("14.10.86");
        expect(formatDateString("14/10/86")).toEqual("14.10.86");
        expect(formatDateString("14.10.86")).toEqual("14.10.86");
        expect(formatDateString("14 10 86")).toEqual("14.10.86");
        expect(formatDateString("1 4 1 0 8 6")).toEqual("14.10.86");
    });
    it("formats 8-digit dates correctly", () => {
        expect(formatDateString("14101986")).toEqual("14.10.1986");
        expect(formatDateString("14/10/1986")).toEqual("14.10.1986");
        expect(formatDateString("14.10.1986")).toEqual("14.10.1986");
        expect(formatDateString("1 4 1 0 19 86")).toEqual("14.10.1986");
    });
});
