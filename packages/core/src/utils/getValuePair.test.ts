import { ValuePair } from "../index";
import { getValuePair } from "./getValuePair";

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
