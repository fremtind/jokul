import { render, screen } from "@testing-library/react";
import React, { act } from "react";
import { describe, expect, it, vi } from "vitest";
import { Countdown } from "./Countdown.js";

describe("Countdown", () => {
    it("renders the countdown with correct initial time", () => {
        render(<Countdown from={5000} />);

        expect(screen.getByText("5")).toBeInTheDocument();
    });

    it("counts down correctly", () => {
        vi.useFakeTimers();
        render(<Countdown from={5000} />);

        act(() => {
            vi.advanceTimersByTime(1000);
        });

        expect(screen.getByText("4")).toBeInTheDocument();

        act(() => {
            vi.advanceTimersByTime(1000);
        });

        expect(screen.getByText("3")).toBeInTheDocument();
    });

    it("pauses the countdown when isPaused is true", () => {
        vi.useFakeTimers();
        render(<Countdown from={5000} isPaused={true} />);

        vi.advanceTimersByTime(1000);
        expect(screen.getByText("5")).toBeInTheDocument();
    });

    it("stops countdown at zero", () => {
        vi.useFakeTimers();
        render(<Countdown from={2000} />);

        act(() => {
            vi.advanceTimersByTime(2000);
        });

        act(() => {
            vi.runAllTimers();
        });

        expect(screen.getByTestId("jkl-countdown")).toHaveTextContent("0");
    });
});
