import { isEmail } from "./isEmail";

describe("isEmail", () => {
    it("expect to be CORRECT mail", () => {
        expect(isEmail("foo@bar.com")).toBe(true);
    });

    it("expect to be INCORRECT mail", () => {
        expect(isEmail("foo@bar")).toBe(false);
    });
});
