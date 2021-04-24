import React from "react";
import { render, screen } from "@testing-library/react";
import { Feedback } from "./Feedback";
import userEvent from "@testing-library/user-event";
import { SimplifiedFeedback } from "./SimplifiedFeedback";
import { axe } from "jest-axe";

const mockFn = jest.fn();

beforeEach(() => {
    jest.resetAllMocks();
});

test("should call onSubmit function with feedback value", () => {
    render(<Feedback label="feedback" description="some description" onSubmit={mockFn} />);
    userEvent.click(screen.getByTestId("feedback-1"));
    userEvent.click(screen.getByTestId("submit-button"));
    screen.queryByTestId("feedback-success");
    expect(mockFn).toBeCalledTimes(1);
    expect(mockFn.mock.calls[0][0]).toStrictEqual({ feedbackValue: 1, message: "" });
});

test("should call onSubmit function with feedback value and message", () => {
    render(<Feedback label="feedback" description="some description" onSubmit={mockFn} />);
    userEvent.click(screen.getByTestId("feedback-1"));
    userEvent.type(screen.getByTestId("feedback-text"), "This is very nice");
    userEvent.click(screen.getByTestId("submit-button"));
    screen.queryByTestId("feedback-success");

    expect(mockFn).toBeCalledTimes(1);
    expect(mockFn.mock.calls[0][0]).toStrictEqual({ feedbackValue: 1, message: "This is very nice" });
});

test("should call onSubmit function with feedback value and message with changes", () => {
    render(<Feedback label="feedback" description="some description" onSubmit={mockFn} />);
    userEvent.click(screen.getByTestId("feedback-1"));
    userEvent.type(screen.getByTestId("feedback-text"), "This is very nice");
    userEvent.click(screen.getByTestId("feedback-2"));
    userEvent.click(screen.getByTestId("submit-button"));
    screen.queryByTestId("feedback-success");

    expect(mockFn).toBeCalledTimes(1);
    expect(mockFn.mock.calls[0][0]).toStrictEqual({ feedbackValue: 2, message: "This is very nice" });
});

test("should show custom feedback message", () => {
    render(
        <Feedback
            label="feedback"
            onSubmit={mockFn}
            description="some description"
            renderCustomSuccess={(props) => (
                <div data-testid="custom-feedback">
                    <span>{props.value}</span>
                    <span>{props.message}</span>
                </div>
            )}
        />,
    );
    userEvent.click(screen.getByTestId("feedback-1"));
    userEvent.type(screen.getByTestId("feedback-text"), "This is very nice");
    userEvent.click(screen.getByTestId("submit-button"));
    screen.queryByTestId("custom-feedback");
    screen.getByText("veldig trist smilefjes");
    screen.getByText("This is very nice");
    screen.getByText("some description");

    expect(mockFn).toBeCalledTimes(1);
    expect(mockFn.mock.calls[0][0]).toStrictEqual({ feedbackValue: 1, message: "This is very nice" });
});

test("simplified should call onSubmit function with feedback value and message with changes", () => {
    render(<SimplifiedFeedback description="feedback" label="feedback" onSubmit={mockFn} />);
    userEvent.click(screen.getByLabelText("3"));
    userEvent.type(screen.getByTestId("feedback-text"), "This is very nice");
    userEvent.click(screen.getByTestId("submit-button"));
    screen.queryByTestId("feedback-success");

    expect(mockFn).toBeCalledTimes(1);
    expect(mockFn.mock.calls[0][0]).toStrictEqual({ feedbackValue: 3, message: "This is very nice" });
});

test.each([Feedback, SimplifiedFeedback])("Feedback should be a11y compliant", async (Component) => {
    const { container } = render(<Component description="feedback" label="feedback" onSubmit={mockFn} />);
    const inputMode = await axe(container);

    expect(inputMode).toHaveNoViolations();
});
