import React, { useRef } from "react";
import { useFocusOutside } from "./useFocusOutside";
import { render, cleanup, fireEvent } from "@testing-library/react";

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
    it("should not fire function when focusing an element inside the ref", () => {
        const fn = jest.fn();
        const { getByTestId } = render(<Test fn={fn} />);
        fireEvent.focusIn(getByTestId("withRef"));

        expect(fn).toHaveBeenCalledTimes(0);
    });
    it("should fire function when focusing an element outside the ref", () => {
        const fn = jest.fn();
        const { getByTestId } = render(<Test fn={fn} />);
        fireEvent.focusIn(getByTestId("withoutRef"));

        expect(fn).toHaveBeenCalledTimes(1);
    });
});
