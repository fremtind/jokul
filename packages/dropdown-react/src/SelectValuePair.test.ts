import { SelectValuePair, getSelectValuePairFrom } from "./SelectValuePair";

describe("getSelectValuePairFrom", () => {
    it("should convert a string to the correct SelectValuePair", () => {
        const valuePair = getSelectValuePairFrom("hello");

        expect(valuePair.label).toEqual("hello");
        expect(valuePair.value).toEqual(valuePair.label);
    });

    it("should return a SelectValuePair unchanged", () => {
        const valuePair: SelectValuePair = {
            value: "hello",
            label: "hello",
        };

        expect(getSelectValuePairFrom(valuePair)).toBe(valuePair);
    });
});
