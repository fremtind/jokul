import { validateFile } from "./validateFile.js";

describe("validateFile", () => {
    it("should pass when file is of an expected format and size", () => {
        const file = new File(["asdf"], "test.txt", {
            type: "text/plain",
        });
        const accept = "text/plain";
        const maxSizeBytes = 100_000_000;

        expect(validateFile(file, accept, maxSizeBytes)).toEqual(undefined);
    });

    it("should pass when no restrictions are set", () => {
        const file = new File(["asdf"], "test.txt", {
            type: "text/plain",
        });

        expect(validateFile(file)).toEqual(undefined);
    });

    it("should fail when file is too big", () => {
        const file = new File(["asdf"], "test.txt", {
            type: "text/plain",
        });
        const accept = "text/plain";
        const maxSizeBytes = 1;

        const result = validateFile(file, accept, maxSizeBytes);
        expect(result).toBeTruthy();
        expect(result?.type).toBe("TOO_LARGE");
        expect(result?.message).toMatch(/men kan maksimalt være/);
    });

    it("should fail when file is of unexpected type", () => {
        const file = new File(["asdf"], "test.txt", {
            type: "text/plain",
        });
        const accept = "image/*";
        const maxSizeBytes = 100_000_000;

        const result = validateFile(file, accept, maxSizeBytes);
        expect(result).toBeTruthy();
        expect(result?.type).toBe("WRONG_TYPE");
        expect(result?.message).toMatch(/Filtypen/);
        expect(result?.message).toMatch(/støttes ikke/);
    });
});
