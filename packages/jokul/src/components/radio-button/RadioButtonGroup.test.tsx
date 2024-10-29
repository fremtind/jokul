import { act, render, screen } from "@testing-library/react";
import UserEventModule from "@testing-library/user-event";
import React, { ChangeEventHandler } from "react";
import { describe, expect, it, vi } from "vitest";
import { axe } from "vitest-axe";
import { RadioButton } from "./RadioButton.js";
import { RadioButtonGroup } from "./RadioButtonGroup.js";

// https://github.com/testing-library/user-event/issues/1146
// @ts-ignore typecheck liker ikke at default muligens ikke finnes
const userEvent = UserEventModule.default ?? UserEventModule;

describe("RadioButtons", () => {
    it("renders a legend with the correct value", () => {
        render(
            <RadioButtonGroup legend="Er du fornøyd?" name="happy">
                <RadioButton value="y">Ja</RadioButton>
                <RadioButton value="n">Nei</RadioButton>
            </RadioButtonGroup>,
        );
        expect(screen.getByText("Er du fornøyd?")).toBeInTheDocument();
    });

    it("renders radio buttons for each choice", () => {
        render(
            <RadioButtonGroup legend="Er du fornøyd?" name="happy">
                <RadioButton value="y">Ja</RadioButton>
                <RadioButton value="n">Nei</RadioButton>
            </RadioButtonGroup>,
        );
        expect(screen.getByLabelText("Ja")).toBeInTheDocument();
        expect(screen.getByLabelText("Nei")).toBeInTheDocument();
    });

    it("selects the correct value from given props", () => {
        const onChange = vi.fn();
        render(
            <RadioButtonGroup
                legend="Er du fornøyd?"
                name="happy"
                value="n"
                onChange={onChange}
            >
                <RadioButton value="y">Ja</RadioButton>
                <RadioButton value="n">Nei</RadioButton>
            </RadioButtonGroup>,
        );
        expect(screen.getByLabelText("Nei")).toHaveAttribute("checked");
    });

    it("does not preselect a value if empty", () => {
        render(
            <RadioButtonGroup legend="Er du fornøyd?" name="happy">
                <RadioButton value="y">Ja</RadioButton>
                <RadioButton value="n">Nei</RadioButton>
            </RadioButtonGroup>,
        );
        expect(screen.getByLabelText("Ja")).not.toHaveAttribute("checked");
        expect(screen.getByLabelText("Nei")).not.toHaveAttribute("checked");
    });

    it("calls onChange function as expected", async () => {
        let value = "n";
        const onChange = vi.fn(((e) => {
            value = e.target.value;
        }) as ChangeEventHandler<HTMLInputElement>);
        render(
            <RadioButtonGroup
                legend="Er du fornøyd?"
                name="happy"
                value={value}
                onChange={onChange}
            >
                <RadioButton value="y">Ja</RadioButton>
                <RadioButton value="n">Nei</RadioButton>
            </RadioButtonGroup>,
        );
        await act(async () => {
            await userEvent.click(screen.getByLabelText("Ja"));
        });
        expect(onChange).toHaveBeenCalledWith(expect.any(Object));
        expect(value).toBe("y");
    });

    it("should have data-testautoid for TestComplete", async () => {
        render(
            <RadioButtonGroup
                legend="Er du fornøyd?"
                name="happy"
                data-testid="jkl-radio-button-group"
                data-testautoid="jkl-radio-button-group__testautoid"
            >
                <RadioButton value="y">Ja</RadioButton>
                <RadioButton value="n">Nei</RadioButton>
            </RadioButtonGroup>,
        );
        const component = await screen.findByTestId("jkl-radio-button-group");
        expect(component.getAttribute("data-testautoid")).toEqual(
            "jkl-radio-button-group__testautoid",
        );
    });

    it("should not override RadioButton name if not set on RadioButtonGroup", async () => {
        // This would be similar to how `react-hook-form` sets up the name prop.
        render(
            <RadioButtonGroup
                legend="Er du fornøyd?"
                data-testid="jkl-radio-button-group"
                data-testautoid="jkl-radio-button-group__testautoid"
            >
                <RadioButton name="happy" value="y">
                    Ja
                </RadioButton>
                <RadioButton name="happy" value="n">
                    Nei
                </RadioButton>
            </RadioButtonGroup>,
        );
        const component = screen.getByLabelText("Ja");
        expect(component.getAttribute("name")).toEqual("happy");
    });
});

describe("a11y", () => {
    it("radio buttons should be a11y compliant", async () => {
        const { container } = render(
            <RadioButtonGroup legend="Er du fornøyd?" name="happy">
                <RadioButton value="y">Ja</RadioButton>
                <RadioButton value="n">Nei</RadioButton>
            </RadioButtonGroup>,
        );
        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });

    it("inline radio buttons should be a11y compliant", async () => {
        const { container } = render(
            <RadioButtonGroup legend="Er du fornøyd?" name="happy" inline>
                <RadioButton value="y">Ja</RadioButton>
                <RadioButton value="n">Nei</RadioButton>
            </RadioButtonGroup>,
        );
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });

    it("compact radio buttons should be a11y compliant", async () => {
        const { container } = render(
            <RadioButtonGroup
                legend="Er du fornøyd?"
                name="happy"
                density="compact"
            >
                <RadioButton value="y">Ja</RadioButton>
                <RadioButton value="n">Nei</RadioButton>
            </RadioButtonGroup>,
        );
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });

    it("invalid radio buttons should be a11y compliant", async () => {
        const onChange = vi.fn();
        const { container } = render(
            <RadioButtonGroup
                legend="Er du fornøyd?"
                name="happy"
                errorLabel="Will not continue until morale improves"
                value="n"
                onChange={onChange}
            >
                <RadioButton value="y">Ja</RadioButton>
                <RadioButton value="n">Nei</RadioButton>
            </RadioButtonGroup>,
        );
        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });
});
