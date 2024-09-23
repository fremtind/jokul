import { parseNumber } from "./parseNumber";

describe("parseNumber", () => {
    it("does not change numbers", () => {
        expect(parseNumber(1234)).toEqual(1234);
        expect(parseNumber(1234.56)).toEqual(1234.56);
    });

    it("handles valid numbers in a string", () => {
        expect(parseNumber("1234")).toEqual(1234);
        expect(parseNumber("1234,56")).toEqual(1234.56);
        expect(parseNumber("123.456,78")).toEqual(123456.78);
        expect(parseNumber("1 234,56")).toEqual(1234.56);
        expect(parseNumber("123 456")).toEqual(123456);
        expect(parseNumber("123 456,78")).toEqual(123456.78);
        expect(parseNumber("23.4453434")).toEqual(23.4453434);
        expect(parseNumber("123,456.78")).toEqual(123456.78);
    });
});
