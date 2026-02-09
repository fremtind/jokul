import * as matchers from "@testing-library/jest-dom/matchers";
import { cleanup } from "@testing-library/react";
import { afterAll, afterEach, beforeAll, expect, vi } from "vitest";
import * as axeMatchers from "vitest-axe/matchers";

expect.extend(matchers);
expect.extend(axeMatchers);

// Feil: "HTMLCanvasElement.prototype.getContext is not implemented" i JSDOM.
// Axe trenger canvas for color-contrast, så vi slår av regelen her og lar Playwright teste kontrast.
vi.mock("vitest-axe", async () => {
    const actual = await vi.importActual("vitest-axe");
    const mod = actual.default ?? actual;
    const { configureAxe } = mod;

    return {
        ...mod,
        axe: configureAxe({
            rules: {
                "color-contrast": { enabled: false },
            },
        }),
    };
});

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
