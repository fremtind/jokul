import { renderHook } from "@testing-library/react-hooks";
import { useScrollIntoView } from "./useScrollIntoView";

const expectAfterWait = (timeout: number, expectFn: () => void) =>
    new Promise((resolve) => setTimeout(() => resolve(expectFn()), timeout));

const scrollIntoView = jest.fn();
const ref = {
    current: {
        scrollIntoView,
    },
};

beforeEach(scrollIntoView.mockReset);

test("should call scrollIntoView fn by itself", async () => {
    // @ts-ignore
    renderHook(() => useScrollIntoView({ ref }));

    await expectAfterWait(0, () => expect(scrollIntoView.mock.calls.length).toBe(1));
});

test("should call scrollIntoView after 20ms", async () => {
    // @ts-ignore
    renderHook(() => useScrollIntoView({ ref, timeout: 20 }));

    await expectAfterWait(0, () => expect(scrollIntoView.mock.calls.length).toBe(0));
    await expectAfterWait(30, () => expect(scrollIntoView.mock.calls.length).toBe(1));
});

test("should not call scrollIntoView before click with autoScroll off", async () => {
    // @ts-ignore
    const { result } = renderHook(() => useScrollIntoView({ ref, autoScroll: false }));

    await expectAfterWait(0, () => expect(scrollIntoView.mock.calls.length).toBe(0));

    const [scrollFn] = result.current;
    scrollFn();
    expect(scrollIntoView.mock.calls.length).toBe(1);
});
