import { renderHook } from "@testing-library/react-hooks";
import { useScrollIntoView } from "./useScrollIntoView";
import { RefObject } from "react";

const expectAfterWait = (timeout: number, expectFn: () => void) =>
    new Promise((resolve) => setTimeout(() => resolve(expectFn()), timeout));

const scrollIntoView = jest.fn();
const ref: RefObject<HTMLElement> = {
    // @ts-ignore:: its a test, we dont need all 200some props
    current: {
        scrollIntoView,
    },
};

beforeEach(scrollIntoView.mockReset);

test("should call scrollIntoView fn by itself", async () => {
    renderHook(() => useScrollIntoView({ ref }));

    await expectAfterWait(0, () => expect(scrollIntoView.mock.calls.length).toBe(1));
});

test("should call scrollIntoView after 20ms", async () => {
    renderHook(() => useScrollIntoView({ ref, timeout: 20 }));

    await expectAfterWait(0, () => expect(scrollIntoView.mock.calls.length).toBe(0));
    await expectAfterWait(30, () => expect(scrollIntoView.mock.calls.length).toBe(1));
});

test("should not call scrollIntoView before click with autoScroll off", async () => {
    const { result } = renderHook(() => useScrollIntoView({ ref, autoScroll: false }));

    await expectAfterWait(0, () => expect(scrollIntoView.mock.calls.length).toBe(0));

    const [scrollFn] = result.current;
    scrollFn();
    expect(scrollIntoView.mock.calls.length).toBe(1);
});
