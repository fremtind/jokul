import { isValidEpost } from "./isValidEpost.js";

describe("isValidEpost", () => {
    it("expect to be CORRECT mail", () => {
        expect(isValidEpost("foo@bar.com")).toBe(true);
    });

    it("expect to be INCORRECT mail", () => {
        expect(isValidEpost("foo@bar")).toBe(false);
    });
});
