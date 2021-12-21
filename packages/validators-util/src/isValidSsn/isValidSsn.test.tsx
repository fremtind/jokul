import { isValidSsn } from "./isValidSsn";

describe("isValidSsn", () => {
    // testdata ssn
    it("should return true valid ssn", () => {
        expect(isValidSsn("15129449648")).toBe(true);
    });

    // testdata ssn
    it("should return true valid ssn", () => {
        expect(isValidSsn("02029000436")).toBe(true);
    });

    // testdata ssn
    it("should return true valid ssn", () => {
        expect(isValidSsn("01105743900")).toBe(true);
    });

    it("should return false if not valid ssn", () => {
        expect(isValidSsn("34123449648")).toBe(false);
    });
});
