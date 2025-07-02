import * as matchers from "@testing-library/jest-dom/matchers";
import { cleanup } from "@testing-library/react";
import { toHaveNoViolations } from "jest-axe";
import { afterAll, afterEach, beforeAll, expect, vi } from "vitest";

expect.extend(matchers);
expect.extend(toHaveNoViolations);

const defaultResizeObserver = globalThis.ResizeObserver;

beforeAll(() => {
    // Framer Motion og Floating UI bruker ResizeObserver i koden sin,
    // men den finnes ikke i JSDOM. Mock den, slik at testene kjører.
    globalThis.ResizeObserver = vi.fn().mockImplementation(() => ({
        observe: vi.fn(),
        unobserve: vi.fn(),
        disconnect: vi.fn(),
    }));
});

afterEach(() => {
    cleanup();
});

afterAll(() => {
    // Rydd opp etter mock av ResizeObserver
    globalThis.ResizeObserver = defaultResizeObserver;
});
