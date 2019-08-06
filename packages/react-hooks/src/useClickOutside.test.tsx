import React, { useRef } from "react";
import { useClickOutside } from "./useClickOutside";
import { render, cleanup } from "@testing-library/react";

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
        const { getByTestId } = render(<Test fn={fn} />);
        getByTestId("withRef").click();

        expect(fn).toHaveBeenCalledTimes(0);
    });
    test("should fire function when click is outside the ref", () => {
        const fn = jest.fn();
        const { getByTestId } = render(<Test fn={fn} />);
        getByTestId("withoutRef").click();

        expect(fn).toHaveBeenCalledTimes(1);
    });
});
