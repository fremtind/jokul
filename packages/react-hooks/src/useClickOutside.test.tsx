import React, { useRef } from "react";
import { useClickOutside } from "./useClickOutside";
import { render, cleanup, fireEvent, screen } from "@testing-library/react";

interface Props {
    fn: () => void;
}

function Test({ fn }: Props) {
    const ref = useRef(null);
    useClickOutside(ref, fn);
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

describe("useClickOutside", () => {
    test("should not fire function when click is inside the ref", () => {
        const fn = jest.fn();
        render(<Test fn={fn} />);
        fireEvent.click(screen.getByTestId("withRef"));

        expect(fn).toHaveBeenCalledTimes(0);
    });
    test("should fire function when click is outside the ref", () => {
        const fn = jest.fn();
        render(<Test fn={fn} />);
        fireEvent.click(screen.getByTestId("withoutRef"));

        expect(fn).toHaveBeenCalledTimes(1);
    });
});
