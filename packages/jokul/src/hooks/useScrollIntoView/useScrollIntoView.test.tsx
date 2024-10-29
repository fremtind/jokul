import { renderHook } from "@testing-library/react";
import { RefObject } from "react";
import { beforeEach, expect, it, vi } from "vitest";
import { useScrollIntoView } from "./useScrollIntoView.js";

const expectAfterWait = (timeout: number, expectFn: () => void) =>
    new Promise((resolve) => setTimeout(() => resolve(expectFn()), timeout));

const scrollIntoView = vi.fn();
const ref: RefObject<HTMLElement> = {
    // @ts-ignore:: its a test, we dont need all 200some props
    current: {
        scrollIntoView,
    },
};

beforeEach(scrollIntoView.mockReset);

it("should call scrollIntoView fn by itself", async () => {
    renderHook(() => useScrollIntoView({ ref }));

    await expectAfterWait(0, () =>
        expect(scrollIntoView.mock.calls.length).toBe(1),
    );
});

it("should call scrollIntoView after 20ms", async () => {
    renderHook(() => useScrollIntoView({ ref, timeout: 20 }));

    await expectAfterWait(0, () =>
        expect(scrollIntoView.mock.calls.length).toBe(0),
    );
    await expectAfterWait(30, () =>
        expect(scrollIntoView.mock.calls.length).toBe(1),
    );
});

it("should not call scrollIntoView before click with autoScroll off", async () => {
    const { result } = renderHook(() =>
        useScrollIntoView({ ref, autoScroll: false }),
    );

    await expectAfterWait(0, () =>
        expect(scrollIntoView.mock.calls.length).toBe(0),
    );

    const [scrollFn] = result.current;
    scrollFn();
    expect(scrollIntoView.mock.calls.length).toBe(1);
});
