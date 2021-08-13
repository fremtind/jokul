import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import { Feedback, PRESETS } from "./";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { FeedbackQuestion } from "./types";

const mockFn = jest.fn();

const followUpQuestions: FeedbackQuestion[] = [
    {
        type: "single",
        label: "Hvordan opplevde du å bestille forsikring på nett?",
        name: "opplevelse",
        options: [
            { label: "Enkelt og greit", value: "enkelt" },
            { label: "Midt på treet", value: "ok" },
            { label: "Tungvindt", value: "tungvindt" },
        ],
    },
    {
        type: "multiple",
        label: "Hva er viktig for deg?",
        name: "viktig",
        options: [
            { label: "At det går raskt å bestille", value: "hurtighet" },
            { label: "God informasjon", value: "info" },
            { label: "At det ser fint ut", value: "utseende" },
            { label: "At forsikringen er billig", value: "pris" },
        ],
    },
];

beforeEach(() => {
    jest.resetAllMocks();
    cleanup();
});

describe("Feedback", () => {
    it("calls onSubmit function with feedback value", async () => {
        render(<Feedback {...PRESETS["Fant du"]} onSubmit={mockFn} />);

        userEvent.click(screen.getByText("Ja"));
        userEvent.click(screen.getByText("Send"));

        // use findBy to wait until element appears
        // https://testing-library.com/docs/dom-testing-library/api-async#findby-queries
        await screen.findByTestId("jkl-feedback__feedback-success");

        expect(mockFn).toBeCalledTimes(1);
        expect(mockFn.mock.calls[0][0]).toStrictEqual({ feedbackValue: "ja", message: undefined });
    });

    it("calls onSubmit function with feedback value and message", async () => {
        render(<Feedback {...PRESETS["Fant du"]} onSubmit={mockFn} />);

        userEvent.click(screen.getByText("Ja"));
        userEvent.type(screen.getByTestId("jkl-feedback__open-question"), "This is very nice");
        userEvent.click(screen.getByText("Send"));

        await screen.findByTestId("jkl-feedback__feedback-success");

        expect(mockFn).toBeCalledTimes(1);
        expect(mockFn.mock.calls[0][0]).toStrictEqual({ feedbackValue: "ja", message: "This is very nice" });
    });

    it("calls onSubmit function with feedback value and message with changes", async () => {
        render(<Feedback {...PRESETS["Fant du"]} onSubmit={mockFn} />);

        userEvent.click(screen.getByText("Ja"));
        userEvent.type(screen.getByTestId("jkl-feedback__open-question"), "This is very nice");
        userEvent.click(screen.getByText("Nei"));
        userEvent.click(screen.getByText("Send"));

        await screen.findByTestId("jkl-feedback__feedback-success");

        expect(mockFn).toBeCalledTimes(1);
        expect(mockFn.mock.calls[0][0]).toStrictEqual({ feedbackValue: "nei", message: "This is very nice" });
    });

    it("calls onSubmit function if the component is unmounted", () => {
        const { unmount } = render(<Feedback {...PRESETS["Fant du"]} onSubmit={mockFn} />);

        userEvent.click(screen.getByText("Ja"));
        unmount();

        expect(mockFn).toBeCalledTimes(1);
    });

    it("does not call onSubmit on unmount if feedback already is submitted", async () => {
        const { unmount } = render(<Feedback {...PRESETS["Fant du"]} onSubmit={mockFn} />);

        userEvent.click(screen.getByText("Ja"));
        userEvent.type(screen.getByTestId("jkl-feedback__open-question"), "This is very nice");
        userEvent.click(screen.getByText("Send"));

        await screen.findByTestId("jkl-feedback__feedback-success");

        expect(mockFn).toBeCalledTimes(1);

        unmount();

        expect(mockFn).toBeCalledTimes(1);
    });

    it("does not call followup onSubmit function on unload if no answers given", () => {
        const { unmount } = render(
            <Feedback
                {...PRESETS["Fant du"]}
                followUp={{ onSubmit: mockFn, questions: followUpQuestions }}
                onSubmit={() => null}
            />,
        );

        userEvent.click(screen.getByText("Ja"));
        userEvent.click(screen.getByText("Send"));
        userEvent.click(screen.getByText("Jeg har tid!"));

        unmount();

        expect(mockFn).toBeCalledTimes(0);
    });

    it("calls followup onSubmit function on unload with only answered questions", () => {
        const { unmount } = render(
            <Feedback
                {...PRESETS["Fant du"]}
                followUp={{ onSubmit: mockFn, questions: followUpQuestions }}
                onSubmit={() => null}
            />,
        );

        userEvent.click(screen.getByText("Ja"));
        userEvent.click(screen.getByText("Send"));
        userEvent.click(screen.getByText("Jeg har tid!"));
        userEvent.click(screen.getByText("Tungvindt"));
        userEvent.click(screen.getByText("Neste"));

        unmount();

        expect(mockFn).toBeCalledTimes(1);
        expect(mockFn.mock.calls[0][0][0].value).toEqual("tungvindt");
    });

    it("calls followup onSubmit function on submitting final question", () => {
        render(
            <Feedback
                {...PRESETS["Fant du"]}
                followUp={{ onSubmit: mockFn, questions: followUpQuestions }}
                onSubmit={() => null}
            />,
        );

        userEvent.click(screen.getByText("Ja"));
        userEvent.click(screen.getByText("Send"));
        userEvent.click(screen.getByText("Jeg har tid!"));

        userEvent.click(screen.getByText("Tungvindt"));
        userEvent.click(screen.getByText("Neste"));

        userEvent.click(screen.getByText("God informasjon"));
        userEvent.click(screen.getByText("At det ser fint ut"));
        userEvent.click(screen.getByText("Send inn"));

        expect(mockFn).toBeCalledTimes(1);
        expect(mockFn.mock.calls[0][0][0].value).toEqual("tungvindt");
        expect(mockFn.mock.calls[0][0][1].value).toEqual(["info", "utseende"]);
    });

    it("does not call followup onSubmit function on unload if already submitted", () => {
        const { unmount } = render(
            <Feedback
                {...PRESETS["Fant du"]}
                followUp={{ onSubmit: mockFn, questions: followUpQuestions }}
                onSubmit={() => null}
            />,
        );

        userEvent.click(screen.getByText("Ja"));
        userEvent.click(screen.getByText("Send"));
        userEvent.click(screen.getByText("Jeg har tid!"));
        userEvent.click(screen.getByText("Neste"));
        userEvent.click(screen.getByText("Send inn"));

        unmount();

        expect(mockFn).toBeCalledTimes(1);
    });

    it("is a11y compliant", async () => {
        const { container } = render(<Feedback {...PRESETS["Fant du"]} onSubmit={mockFn} />);
        const inputMode = await axe(container);

        expect(inputMode).toHaveNoViolations();
    });
});
