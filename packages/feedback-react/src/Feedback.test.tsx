import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import { Feedback } from "./Feedback";
import userEvent from "@testing-library/user-event";
import { SimplifiedFeedback } from "./SimplifiedFeedback";
import { axe } from "jest-axe";

const mockFn = jest.fn();

beforeEach(() => {
    jest.resetAllMocks();
    cleanup();
});

test("should call onSubmit function with feedback value", async () => {
    render(<Feedback label="feedback" description="some description" onSubmit={mockFn} />);

    userEvent.click(screen.getByTestId("feedback-1"));
    userEvent.click(screen.getByTestId("submit-button"));

    // use findBy to wait until element appears
    // https://testing-library.com/docs/dom-testing-library/api-async#findby-queries
    await screen.findByTestId("feedback-success");

    expect(mockFn).toBeCalledTimes(1);
    expect(mockFn.mock.calls[0][0]).toStrictEqual({ feedbackValue: 1, message: "" });
});

test("should call onSubmit function with feedback value and message", async () => {
    render(<Feedback label="feedback" description="some description" onSubmit={mockFn} />);

    userEvent.click(screen.getByTestId("feedback-1"));
    userEvent.type(screen.getByTestId("feedback-text"), "This is very nice");
    userEvent.click(screen.getByTestId("submit-button"));

    await screen.findByTestId("feedback-success");

    expect(mockFn).toBeCalledTimes(1);
    expect(mockFn.mock.calls[0][0]).toStrictEqual({ feedbackValue: 1, message: "This is very nice" });
});

test("should call onSubmit function with feedback value and message with changes", async () => {
    render(<Feedback label="feedback" description="some description" onSubmit={mockFn} />);

    userEvent.click(screen.getByTestId("feedback-1"));
    userEvent.type(screen.getByTestId("feedback-text"), "This is very nice");
    userEvent.click(screen.getByTestId("feedback-2"));
    userEvent.click(screen.getByTestId("submit-button"));

    await screen.findByTestId("feedback-success");

    expect(mockFn).toBeCalledTimes(1);
    expect(mockFn.mock.calls[0][0]).toStrictEqual({ feedbackValue: 2, message: "This is very nice" });
});

test("should show custom feedback message", async () => {
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

    await screen.findByTestId("custom-feedback");

    screen.getByText("1");
    screen.getByText("This is very nice");

    expect(mockFn).toBeCalledTimes(1);
    expect(mockFn.mock.calls[0][0]).toStrictEqual({ feedbackValue: 1, message: "This is very nice" });
});

test("simplified should call onSubmit function with feedback value and message with changes", async () => {
    render(<SimplifiedFeedback description="feedback" label="feedback" onSubmit={mockFn} />);

    userEvent.click(screen.getByLabelText("3"));
    userEvent.type(screen.getByTestId("feedback-text"), "This is very nice");
    userEvent.click(screen.getByTestId("submit-button"));

    await screen.findByTestId("feedback-success");

    expect(mockFn).toBeCalledTimes(1);
    expect(mockFn.mock.calls[0][0]).toStrictEqual({ feedbackValue: 3, message: "This is very nice" });
});

test("should call onSubmit function if the component is unmounted", () => {
    const { unmount } = render(<Feedback label="feedback" description="some description" onSubmit={mockFn} />);

    userEvent.click(screen.getByTestId("feedback-1"));
    unmount();

    expect(mockFn).toBeCalledTimes(1);
});

test("should not call onSubmit on unmount if feedback already is submitted", async () => {
    const { unmount } = render(<Feedback label="feedback" description="some description" onSubmit={mockFn} />);

    userEvent.click(screen.getByTestId("feedback-1"));
    userEvent.type(screen.getByTestId("feedback-text"), "This is very nice");
    userEvent.click(screen.getByTestId("submit-button"));

    await screen.findByTestId("feedback-success");

    expect(mockFn).toBeCalledTimes(1);

    unmount();

    expect(mockFn).toBeCalledTimes(1);
});

test.each([Feedback, SimplifiedFeedback])("Feedback should be a11y compliant", async (Component) => {
    const { container } = render(<Component description="feedback" label="feedback" onSubmit={mockFn} />);
    const inputMode = await axe(container);

    expect(inputMode).toHaveNoViolations();
});
