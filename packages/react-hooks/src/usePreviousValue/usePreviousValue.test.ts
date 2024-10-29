import { renderHook } from "@testing-library/react";
import { usePreviousValue } from "./usePreviousValue";

describe("usePreviousValue", () => {
    it("usePreviousValue returns previous value", () => {
        const { result, rerender } = renderHook(
            ({ testVerdi }) => usePreviousValue(testVerdi),
            {
                initialProps: { testVerdi: "initial value" },
            },
        );

        rerender({ testVerdi: "another value" });
        rerender({ testVerdi: "yet another value" });

        expect(result.current).toEqual("another value");
    });
});
