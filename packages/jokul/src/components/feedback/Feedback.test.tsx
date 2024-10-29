import { cleanup, render, screen } from "@testing-library/react";
import UserEventModule from "@testing-library/user-event";
import React from "react";
import { act } from "react-dom/test-utils";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { axe } from "vitest-axe";
import { Feedback } from "./Feedback.js";
import { PRESETS } from "./presets.js";
import { FollowupQuestion } from "./types.js";

// https://github.com/testing-library/user-event/issues/1146
// @ts-ignore typecheck liker ikke at default muligens ikke finnes
const userEvent = UserEventModule.default ?? UserEventModule;

const mockFn = vi.fn();

const followUpQuestions: FollowupQuestion[] = [
    {
        type: "radio",
        label: "Hvordan opplevde du å bestille forsikring på nett?",
        name: "opplevelse",
        options: [
            { label: "Enkelt og greit", value: "enkelt" },
            { label: "Midt på treet", value: "ok" },
            { label: "Tungvindt", value: "tungvindt" },
        ],
    },
    {
        type: "checkbox",
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
    vi.resetAllMocks();
    cleanup();
});

describe("Feedback", () => {
    it("calls onSubmit function with feedback value", async () => {
        render(<Feedback {...PRESETS["Fant du"]} onSubmit={mockFn} />);

        await act(async () => {
            await userEvent.click(screen.getByText("Ja"));
            await userEvent.click(screen.getByText("Send"));
        });

        // use findBy to wait until element appears
        // https://testing-library.com/docs/dom-testing-library/api-async#findby-queries
        await screen.findByTestId("feedback");

        expect(mockFn).toBeCalledTimes(1);
        expect(mockFn.mock.calls[0][0]).toStrictEqual({
            feedbackValue: "ja",
            intentionalSubmit: true,
        });
    });

    it("calls onSubmit function with feedback value and message", async () => {
        render(<Feedback {...PRESETS["Fant du"]} onSubmit={mockFn} />);

        await act(async () => {
            await userEvent.click(screen.getByText("Ja"));
            await userEvent.type(
                screen.getByTestId("jkl-feedback__open-question"),
                "This is very nice",
            );
            await userEvent.click(screen.getByText("Send"));
        });

        await screen.findByTestId("feedback");

        expect(mockFn).toBeCalledTimes(1);
        expect(mockFn.mock.calls[0][0]).toStrictEqual({
            feedbackValue: "ja",
            intentionalSubmit: true,
            message: "This is very nice",
        });
    });

    it("calls onSubmit function with feedback value and message with changes", async () => {
        render(<Feedback {...PRESETS["Fant du"]} onSubmit={mockFn} />);

        await act(async () => {
            await userEvent.click(screen.getByText("Ja"));
            await userEvent.type(
                screen.getByTestId("jkl-feedback__open-question"),
                "This is very nice",
            );
            await userEvent.click(screen.getByText("Nei"));
            await userEvent.click(screen.getByText("Send"));
        });
        await screen.findByTestId("feedback");

        expect(mockFn).toBeCalledTimes(1);
        expect(mockFn.mock.calls[0][0]).toStrictEqual({
            feedbackValue: "nei",
            intentionalSubmit: true,
            message: "This is very nice",
        });
    });

    it("calls onSubmit function if the component is unmounted", async () => {
        const { unmount } = render(
            <Feedback {...PRESETS["Fant du"]} onSubmit={mockFn} />,
        );

        await act(async () => {
            await userEvent.click(screen.getByText("Ja"));
        });
        unmount();

        expect(mockFn).toBeCalledTimes(1);
    });

    it("sets intentionalSubmit to false if submitted on unload", async () => {
        const { unmount } = render(
            <Feedback {...PRESETS["Fant du"]} onSubmit={mockFn} />,
        );

        await act(async () => {
            await userEvent.click(screen.getByText("Ja"));
        });
        unmount();

        expect(mockFn).toBeCalledTimes(1);
        expect(mockFn.mock.calls[0][0]).toStrictEqual({
            feedbackValue: "ja",
            intentionalSubmit: false,
        });
    });

    it("does not submit message if submitted on unload", async () => {
        const { unmount } = render(
            <Feedback {...PRESETS["Fant du"]} onSubmit={mockFn} />,
        );

        await act(async () => {
            await userEvent.click(screen.getByText("Ja"));
            await userEvent.type(
                screen.getByTestId("jkl-feedback__open-question"),
                "This is very nice",
            );
        });

        unmount();

        expect(mockFn).toBeCalledTimes(1);
        expect(mockFn.mock.calls[0][0]).toStrictEqual({
            feedbackValue: "ja",
            intentionalSubmit: false,
        });
    });

    it("does not call onSubmit on unmount if feedback already is submitted", async () => {
        const { unmount } = render(
            <Feedback {...PRESETS["Fant du"]} onSubmit={mockFn} />,
        );

        await act(async () => {
            await userEvent.click(screen.getByText("Ja"));
            await userEvent.type(
                screen.getByTestId("jkl-feedback__open-question"),
                "This is very nice",
            );
            await userEvent.click(screen.getByText("Send"));
        });
        await screen.findByTestId("feedback");

        expect(mockFn).toBeCalledTimes(1);

        unmount();

        expect(mockFn).toBeCalledTimes(1);
    });

    it("does not call followup onSubmit function on unload if no answers given", async () => {
        const { unmount } = render(
            <Feedback
                {...PRESETS["Fant du"]}
                followup={{ questions: followUpQuestions, onSubmit: mockFn }}
                onSubmit={() => null}
            />,
        );

        await act(async () => {
            await userEvent.click(screen.getByText("Ja"));
            await userEvent.click(screen.getByText("Send"));
        });

        await screen.findByText("Jeg har tid!");

        await act(async () => {
            await userEvent.click(screen.getByText("Jeg har tid!"));
        });

        unmount();

        expect(mockFn).toBeCalledTimes(0);
    });

    it("calls followup onSubmit function on unload with only answered questions", async () => {
        const { unmount } = render(
            <Feedback
                {...PRESETS["Fant du"]}
                followup={{ questions: followUpQuestions, onSubmit: mockFn }}
                onSubmit={() => null}
            />,
        );
        await act(async () => {
            await userEvent.click(screen.getByText("Ja"));
            await userEvent.click(screen.getByText("Send"));
        });

        await screen.findByText("Jeg har tid!");

        await act(async () => {
            await userEvent.click(screen.getByText("Jeg har tid!"));
        });
        await act(async () => {
            await userEvent.click(screen.getByText("Tungvindt"));
        });
        await act(async () => {
            await userEvent.click(screen.getByText("Neste"));
        });

        unmount();

        expect(mockFn).toBeCalledTimes(1);
        expect(mockFn.mock.calls[0][0][0].value).toEqual("tungvindt");
    });

    it("calls followup onSubmit function on submitting final question", async () => {
        render(
            <Feedback
                {...PRESETS["Fant du"]}
                followup={{ questions: followUpQuestions, onSubmit: mockFn }}
                onSubmit={() => null}
            />,
        );

        await act(async () => {
            await userEvent.click(screen.getByText("Ja"));
            await userEvent.click(screen.getByText("Send"));
        });

        await screen.findByText("Jeg har tid!");

        await act(async () => {
            await userEvent.click(screen.getByText("Jeg har tid!"));
        });
        await act(async () => {
            await userEvent.click(screen.getByText("Tungvindt"));
            await userEvent.click(screen.getByText("Neste"));
        });

        await act(async () => {
            await userEvent.click(screen.getByText("God informasjon"));
            await userEvent.click(screen.getByText("At det ser fint ut"));

            await userEvent.click(screen.getByText("Send inn"));
        });

        await screen.findByText("Takk, igjen!");

        expect(mockFn).toBeCalledTimes(1);
        expect(mockFn.mock.calls[0][0][0].value).toEqual("tungvindt");
        expect(mockFn.mock.calls[0][0][1].value).toEqual(["info", "utseende"]);
    });

    it("does not call followup onSubmit function on unload if already submitted", async () => {
        const { unmount } = render(
            <Feedback
                {...PRESETS["Fant du"]}
                followup={{ questions: followUpQuestions, onSubmit: mockFn }}
                onSubmit={() => null}
            />,
        );

        await act(async () => {
            await userEvent.click(screen.getByText("Ja"));
            await userEvent.click(screen.getByText("Send"));
        });

        await screen.findByText("Jeg har tid!");

        await act(async () => {
            await userEvent.click(screen.getByText("Jeg har tid!"));
        });
        await act(async () => {
            await userEvent.click(screen.getByText("Neste"));
        });
        await act(async () => {
            await userEvent.click(screen.getByText("Send inn"));
        });

        await screen.findByText("Takk, igjen!");

        unmount();

        expect(mockFn).toBeCalledTimes(1);
    });

    it("clears state of second followup question (#4001)", async () => {
        render(
            <Feedback
                {...PRESETS["Fant du"]}
                followup={{
                    questions: [
                        {
                            type: "text",
                            label: "Er det noe mer du vil legge til?",
                            name: "annet",
                        },
                        {
                            type: "text",
                            label: "Er det noe mer mer du vil legge til?",
                            name: "mer-annet",
                        },
                    ],
                    onSubmit: mockFn,
                }}
                onSubmit={() => null}
            />,
        );

        await act(async () => {
            await userEvent.click(screen.getByText("Ja"));
            await userEvent.click(screen.getByText("Send"));
        });

        await act(async () => {
            await userEvent.click(screen.getByText("Jeg har tid!"));
        });

        await act(async () => {
            await userEvent.type(
                screen.getByLabelText("Er det noe mer du vil legge til?"),
                "mer",
            );
            await userEvent.click(screen.getByText("Neste"));
        });

        await act(async () => {
            const oldTextarea = await screen.queryByDisplayValue("mer");
            expect(oldTextarea).not.toBeInTheDocument();

            const newTextarea = await screen.queryByDisplayValue("");
            expect(newTextarea).toBeInTheDocument();
        });
    });

    it("submits correct contact information", async () => {
        render(
            <Feedback
                {...PRESETS["Fant du"]}
                onSubmit={() => null}
                contactQuestion={{ onSubmit: mockFn, withPhone: true }}
            />,
        );

        const email = "test@test.com";
        const phone = "48484848";

        await act(async () => {
            await userEvent.click(screen.getByText("Ja"));
            await userEvent.click(screen.getByText("Send"));
        });

        await screen.findByText("E-post");

        await act(async () => {
            await userEvent.type(screen.getByLabelText("E-post"), email);
            await userEvent.type(screen.getByLabelText("Telefonnummer"), phone);
            await userEvent.click(screen.getByText("Sett meg på lista!"));
        });

        expect(mockFn).toBeCalledWith({ email, phone });
    });

    it("is accessible", async () => {
        const { container } = render(
            <Feedback
                {...PRESETS["Fant du"]}
                followup={{ questions: followUpQuestions, onSubmit: mockFn }}
                contactQuestion={{ onSubmit: () => null }}
                onSubmit={mockFn}
            />,
        );

        // test main feedback
        let results = await axe(container);
        expect(results).toHaveNoViolations();

        await act(async () => {
            // test followup invitation
            await userEvent.click(screen.getByText("Ja"));
            await userEvent.click(screen.getByText("Send"));
        });

        results = await axe(container);
        expect(results).toHaveNoViolations();

        await act(async () => {
            // test followup question
            await userEvent.click(screen.getByText("Jeg har tid!"));
        });

        results = await axe(container);
        expect(results).toHaveNoViolations();

        await act(async () => {
            // test contact question
            await userEvent.click(screen.getByText("Neste"));
        });
        await act(async () => {
            await userEvent.click(screen.getByText("Send inn"));
        });

        results = await axe(container);
        expect(results).toHaveNoViolations();
    });
});
