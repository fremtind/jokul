import { act, render, screen } from "@testing-library/react";
import UserEventModule from "@testing-library/user-event";
import React, { useRef } from "react";
import { describe, expect, it, vi } from "vitest";
import { useClickOutside } from "./useClickOutside.js";

// https://github.com/testing-library/user-event/issues/1146
const userEvent = UserEventModule.default ?? UserEventModule;

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

describe("useClickOutside", () => {
    it("should not fire function when click is inside the ref", async () => {
        const fn = vi.fn();
        render(<Test fn={fn} />);
        await act(async () => {
            await userEvent.click(screen.getByTestId("withRef"));
        });

        expect(fn).toHaveBeenCalledTimes(0);
    });
    it("should fire function when click is outside the ref", async () => {
        const fn = vi.fn();
        render(<Test fn={fn} />);
        await act(async () => {
            await userEvent.click(screen.getByTestId("withoutRef"));
        });
        expect(fn).toHaveBeenCalledTimes(1);
    });
});
