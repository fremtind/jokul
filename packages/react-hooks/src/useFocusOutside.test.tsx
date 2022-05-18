import { render, fireEvent, screen } from "@testing-library/react";
import React, { useRef } from "react";
import { useFocusOutside } from "./useFocusOutside";

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

describe("useFocusOutside", () => {
    it("should not fire function when focusing an element inside the ref", () => {
        const fn = jest.fn();
        render(<Test fn={fn} />);
        fireEvent.focusIn(screen.getByTestId("withRef"));

        expect(fn).toHaveBeenCalledTimes(0);
    });
    it("should fire function when focusing an element outside the ref", () => {
        const fn = jest.fn();
        render(<Test fn={fn} />);
        fireEvent.focusIn(screen.getByTestId("withoutRef"));

        expect(fn).toHaveBeenCalledTimes(1);
    });
});
