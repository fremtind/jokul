import { describe, expect, it } from "vitest";
import { getValuePair, type ValuePair } from "./valuePair.js";

describe("getValuePair", () => {
    it("should convert a string to the correct ValuePair", () => {
        const valuePair = getValuePair("hello");

        expect(valuePair.label).toEqual("hello");
        expect(valuePair.value).toEqual(valuePair.label);
    });

    it("should return a ValuePair unchanged", () => {
        const valuePair: ValuePair = {
            value: "hello",
            label: "hello",
        };

        expect(getValuePair(valuePair)).toBe(valuePair);
    });
});
