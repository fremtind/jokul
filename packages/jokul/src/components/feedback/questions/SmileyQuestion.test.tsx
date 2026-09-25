import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import { MainQuestionContextProvider } from "../main-question/mainQuestionContext.js";
import type { FeedbackState } from "../types.js";
import { SmileyQuestion } from "./SmileyQuestion.js";

const renderSmileyQuestion = (
    currentValue?: FeedbackState["currentValue"],
    options = [
        { label: "Veldig misfornøyd", value: 1 },
        { label: "Fornøyd", value: 4 },
    ],
) => {
    const state: FeedbackState = {
        currentValue,
        setCurrentValue: vi.fn(),
        message: undefined,
        setMessage: vi.fn(),
        submitted: false,
        handleSubmit: vi.fn(),
    };

    render(
        <MainQuestionContextProvider state={state}>
            <SmileyQuestion label="Hvor fornøyd er du?" options={options} />
        </MainQuestionContextProvider>,
    );
};

describe("SmileyQuestion tracking", () => {
    it("renders tracking attributes on the visible label", () => {
        renderSmileyQuestion();

        const input = screen.getByLabelText(
            "Veldig misfornøyd",
        ) as HTMLInputElement;
        const label = input.labels?.[0];

        expect(label).toHaveAttribute("data-jkl-tracked", "SmileyQuestion");
        expect(label).not.toHaveAttribute("data-jkl-checked");
        expect(input).not.toHaveAttribute("data-jkl-tracked");
    });

    it("reflects the checked state on the visible label", () => {
        renderSmileyQuestion({ label: "Fornøyd", value: 4 });

        const selectedInput = screen.getByLabelText(
            "Fornøyd",
        ) as HTMLInputElement;
        const unselectedInput = screen.getByLabelText(
            "Veldig misfornøyd",
        ) as HTMLInputElement;

        expect(selectedInput.labels?.[0]).toHaveAttribute(
            "data-jkl-checked",
            "true",
        );
        expect(unselectedInput.labels?.[0]).not.toHaveAttribute(
            "data-jkl-checked",
        );
    });
});
