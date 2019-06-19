import { getColumnsByScreenSize } from "./getColumnsByScreenSize";

describe("getColumnsByScreenSize", () => {
    test("should return a string of grid columns for each device", () => {
        const res = getColumnsByScreenSize({ small: 1, medium: 1, large: 1 });

        expect(res).toBe(
            "jkl-grid__element--1__small-device jkl-grid__element--1__medium-device jkl-grid__element--1__large-device",
        );
    });
    test("should return a string of grid columns for each device with one screen size missing", () => {
        const res = getColumnsByScreenSize({ small: 1, large: 1 });

        expect(res).toBe("jkl-grid__element--1__small-device jkl-grid__element--1__large-device");
    });
    test("should return a string of grid columns for each device with only one screen size", () => {
        const res = getColumnsByScreenSize({ small: 1 });

        expect(res).toBe("jkl-grid__element--1__small-device");
    });
});
