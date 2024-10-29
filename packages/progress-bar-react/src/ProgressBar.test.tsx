import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import React from "react";
import { calculatePercentage } from "./ProgressBar";
import { ProgressBar } from ".";

const defaultProps = {
    "aria-valuenow": 50,
    "aria-valuemax": 100,
};

describe("ProgressBar", () => {
    test("should render to document", () => {
        render(<ProgressBar {...defaultProps} />);

        expect(screen.getByTestId("jkl-progress-bar")).toBeInTheDocument();
        expect(
            screen.getByTestId("jkl-progress-bar__tracker"),
        ).toBeInTheDocument();
    });

    [0, 10, 50, 90, 100].map((current) => {
        test(`should render progress bar at ${current}%`, () => {
            render(<ProgressBar aria-valuenow={current} aria-valuemax={100} />);

            const progress = screen.getByTestId("jkl-progress-bar__tracker");

            const style = progress.getAttribute("style");
            expect(style).toBe(`width: ${current}%;`);
        });
    });

    [0, 1, 5, 9, 10].map((current) => {
        test(`should render progress bar at ${
            current * 10
        }% with ${current} of total 10`, () => {
            render(<ProgressBar aria-valuenow={current} aria-valuemax={10} />);

            const progress = screen.getByTestId("jkl-progress-bar__tracker");

            const style = progress.getAttribute("style");
            expect(style).toBe(`width: ${current * 10}%;`);
        });
    });

    test("should show custom className", () => {
        render(<ProgressBar {...defaultProps} className="customClass" />);

        expect(screen.getByTestId("jkl-progress-bar")).toHaveClass(
            "customClass",
        );
    });

    test("should have progressbar as role", () => {
        render(<ProgressBar {...defaultProps} />);

        expect(screen.getByRole("progressbar")).toBeInTheDocument();
    });

    test("should have correct aria values", () => {
        render(<ProgressBar {...defaultProps} />);

        const progressBar = screen.getByTestId("jkl-progress-bar");

        expect(progressBar).toHaveAttribute("aria-valuenow", "50");
        expect(progressBar).toHaveAttribute("aria-valuemin", "0");
        expect(progressBar).toHaveAttribute("aria-valuemax", "100");
        expect(progressBar).not.toHaveAttribute("aria-valuetext", "");
    });

    test("should have correct aria values and value text", () => {
        render(
            <ProgressBar
                aria-valuenow={1}
                aria-valuemax={2}
                aria-valuetext="Almost there"
            />,
        );

        const progressBar = screen.getByTestId("jkl-progress-bar");

        expect(progressBar).toHaveAttribute("aria-valuenow", "1");
        expect(progressBar).toHaveAttribute("aria-valuemin", "0");
        expect(progressBar).toHaveAttribute("aria-valuemax", "2");
        expect(progressBar).toHaveAttribute("aria-valuetext", "Almost there");
    });
});

describe("calculatePercentage", () => {
    test("should not fail by dividing by 0", () => {
        const res = calculatePercentage(0, 0);
        expect(res).toEqual(0);
    });

    test("should calculate 50% correctly 1/2", () => {
        const res = calculatePercentage(1, 2);
        expect(res).toEqual(50);
    });

    test("should calculate 100% correctly 1/1", () => {
        const res = calculatePercentage(1, 1);
        expect(res).toEqual(100);
    });

    test("should calculate 200% correctly 2/1", () => {
        const res = calculatePercentage(2, 1);
        expect(res).toEqual(200);
    });
});

describe("a11y", () => {
    it("progress bar should be a11y compliant", async () => {
        const { container } = render(<ProgressBar {...defaultProps} />);
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });
});
