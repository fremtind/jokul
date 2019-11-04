import React from "react";
import { cleanup, render } from "@testing-library/react";
import { ProgressBar } from ".";
import { calculatePercentage } from "./ProgressBar";

afterEach(cleanup);

const defaultProps = {
    progress: {
        current: 50,
        total: 100,
    },
};

describe("ProgressBar", () => {
    test("should render to document", () => {
        const { getByTestId } = render(<ProgressBar {...defaultProps} />);

        expect(getByTestId("jkl-progress-bar")).toBeInTheDocument();
        expect(getByTestId("jkl-progress-bar__tracker")).toBeInTheDocument();
    });

    [0, 10, 50, 90, 100].map((current) => {
        test(`should render progress bar at ${current}%`, () => {
            const { getByTestId } = render(<ProgressBar progress={{ current, total: 100 }} />);

            const progress = getByTestId("jkl-progress-bar__tracker");

            const style = progress.getAttribute("style");
            expect(style).toBe(`width: ${current}%;`);
        });
    });

    [0, 1, 5, 9, 10].map((current) => {
        test(`should render progress bar at ${current * 10}% with ${current} of total 10`, () => {
            const { getByTestId } = render(<ProgressBar progress={{ current, total: 10 }} />);

            const progress = getByTestId("jkl-progress-bar__tracker");

            const style = progress.getAttribute("style");
            expect(style).toBe(`width: ${current * 10}%;`);
        });
    });

    test("should show custom className", () => {
        const { getByTestId } = render(<ProgressBar {...defaultProps} className="customClass" />);

        expect(getByTestId("jkl-progress-bar")).toHaveClass("customClass");
    });

    test("should have progressbar as role", () => {
        const { getByRole } = render(<ProgressBar {...defaultProps} />);

        expect(getByRole("progressbar")).toBeInTheDocument();
    });

    test("should have correct aria values", () => {
        const { getByTestId } = render(<ProgressBar {...defaultProps} />);

        const progressBar = getByTestId("jkl-progress-bar");

        expect(progressBar).toHaveAttribute("aria-valuenow", "50");
        expect(progressBar).toHaveAttribute("aria-valuemin", "0");
        expect(progressBar).toHaveAttribute("aria-valuemax", "100");
        expect(progressBar).not.toHaveAttribute("aria-valuetext", "");
    });

    test("should have correct aria values and value text", () => {
        const { getByTestId } = render(
            <ProgressBar progress={{ current: 1, total: 2 }} progressTextValue="Almost there" />,
        );

        const progressBar = getByTestId("jkl-progress-bar");

        expect(progressBar).toHaveAttribute("aria-valuenow", "1");
        expect(progressBar).toHaveAttribute("aria-valuemin", "0");
        expect(progressBar).toHaveAttribute("aria-valuemax", "2");
        expect(progressBar).toHaveAttribute("aria-valuetext", "Almost there");
    });
});

describe("calculatePercentage", () => {
    test("should not fail by dividing by 0", () => {
        const res = calculatePercentage({ current: 0, total: 0 });
        expect(res).toEqual(0);
    });

    test("should calculate 50% correctly 1/2", () => {
        const res = calculatePercentage({ current: 1, total: 2 });
        expect(res).toEqual(50);
    });

    test("should calculate 100% correctly 1/1", () => {
        const res = calculatePercentage({ current: 1, total: 1 });
        expect(res).toEqual(100);
    });

    test("should calculate 200% correctly 2/1", () => {
        const res = calculatePercentage({ current: 2, total: 1 });
        expect(res).toEqual(200);
    });
});
