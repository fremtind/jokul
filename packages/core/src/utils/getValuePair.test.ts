import { getValuePair } from "./getValuePair";
import { ValuePair } from "../index";

describe("getValuePair", () => {
    it("should convert a string to the correct SelectValuePair", () => {
        const valuePair = getValuePair("hello");

        expect(valuePair.label).toEqual("hello");
        expect(valuePair.value).toEqual(valuePair.label);
    });

    it("should return a SelectValuePair unchanged", () => {
        const valuePair: ValuePair = {
            value: "hello",
            label: "hello",
        };

        expect(getValuePair(valuePair)).toBe(valuePair);
    });
});
