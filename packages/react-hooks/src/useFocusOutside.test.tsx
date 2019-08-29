import React, { useRef } from "react";
import { useFocusOutside } from "./useFocusOutside";
import { render, cleanup } from "@testing-library/react";

interface Props {
    fn: () => void;
}

function Test({ fn }: Props) {
    const ref = useRef(null);
    useFocusOutside(ref, fn);
    return (
        <div>
            <button data-testid="withoutRef">Not with ref</button>
            <button data-testid="withRef" ref={ref}>
                With ref
            </button>
        </div>
    );
}

afterEach(cleanup);

describe("useFocusOutside", () => {
    test("should not fire function when focusing an element inside the ref", () => {
        const fn = jest.fn();
        const { getByTestId } = render(<Test fn={fn} />);
        getByTestId("withRef").focus();

        expect(fn).toHaveBeenCalledTimes(0);
    });
    test("should fire function when focusing an element outside the ref", () => {
        const fn = jest.fn();
        const { getByTestId } = render(<Test fn={fn} />);
        getByTestId("withoutRef").focus();

        expect(fn).toHaveBeenCalledTimes(1);
    });
});
