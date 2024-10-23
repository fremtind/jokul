import { isValidDogId } from "./isValidDogId.js";

describe("isValidDogId", () => {
    it("should return true if id starts with 5780 and has 15-digit numbers", () => {
        expect(isValidDogId("578012345678912")).toBe(true);
    });

    it("should return false if id starts with 5780 and do NOT have 15-digit numbers", () => {
        expect(isValidDogId("578012345623432423423423423")).toBe(false);
    });

    it("should return false if id do NOT start with 5780 and has 15-digit numbers", () => {
        expect(isValidDogId("123456789123456")).toBe(false);
    });

    it("should return false if any letters", () => {
        expect(isValidDogId("doggo123")).toBe(false);
    });
});
