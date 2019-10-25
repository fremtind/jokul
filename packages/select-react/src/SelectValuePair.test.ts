import { SelectValuePair, getSelectValuePair } from "./SelectValuePair";

describe("getSelectValuePair", () => {
    it("should convert a string to the correct SelectValuePair", () => {
        const valuePair = getSelectValuePair("hello");

        expect(valuePair.label).toEqual("hello");
        expect(valuePair.value).toEqual(valuePair.label);
    });

    it("should return a SelectValuePair unchanged", () => {
        const valuePair: SelectValuePair = {
            value: "hello",
            label: "hello",
        };

        expect(getSelectValuePair(valuePair)).toBe(valuePair);
    });
});
