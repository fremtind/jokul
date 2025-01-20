import { render, screen } from "@testing-library/react";
import React, { act } from "react";
import { Countdown } from "./Countdown";

describe("Countdown", () => {
    test("renders the countdown with correct initial time", () => {
        render(<Countdown from={5000} />);

        expect(screen.getByText("5")).toBeInTheDocument();
    });

    test("counts down correctly", () => {
        jest.useFakeTimers();
        render(<Countdown from={5000} />);

        act(() => {
            jest.advanceTimersByTime(1000);
        });

        expect(screen.getByText("4")).toBeInTheDocument();

        act(() => {
            jest.advanceTimersByTime(1000);
        });

        expect(screen.getByText("3")).toBeInTheDocument();
    });

    test("pauses the countdown when isPaused is true", () => {
        jest.useFakeTimers();
        render(<Countdown from={5000} isPaused={true} />);

        jest.advanceTimersByTime(1000);
        expect(screen.getByText("5")).toBeInTheDocument();
    });

    test("stops countdown at zero", () => {
        jest.useFakeTimers();
        render(<Countdown from={2000} />);

        act(() => {
            jest.advanceTimersByTime(2000);
        });

        act(() => {
            jest.runAllTimers();
        });

        expect(screen.getByTestId("jkl-countdown")).toHaveTextContent("0");
    });
});
