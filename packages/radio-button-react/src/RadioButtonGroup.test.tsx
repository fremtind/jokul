import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import React, { ChangeEventHandler } from "react";
import "@testing-library/jest-dom/extend-expect";
import { RadioButton, RadioButtonGroup } from "./";

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
        const onChange = jest.fn();
        render(
            <RadioButtonGroup legend="Er du fornøyd?" name="happy" value="n" onChange={onChange}>
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
        const onChange = jest.fn(((e) => {
            value = e.target.value;
        }) as ChangeEventHandler<HTMLInputElement>);
        render(
            <RadioButtonGroup legend="Er du fornøyd?" name="happy" value={value} onChange={onChange}>
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
        expect(component.getAttribute("data-testautoid")).toEqual("jkl-radio-button-group__testautoid");
    });
});

describe("a11y", () => {
    test("radio buttons should be a11y compliant", async () => {
        const { container } = render(
            <RadioButtonGroup legend="Er du fornøyd?" name="happy">
                <RadioButton value="y">Ja</RadioButton>
                <RadioButton value="n">Nei</RadioButton>
            </RadioButtonGroup>,
        );
        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });

    test("inline radio buttons should be a11y compliant", async () => {
        const { container } = render(
            <RadioButtonGroup legend="Er du fornøyd?" name="happy" inline>
                <RadioButton value="y">Ja</RadioButton>
                <RadioButton value="n">Nei</RadioButton>
            </RadioButtonGroup>,
        );
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });

    test("compact radio buttons should be a11y compliant", async () => {
        const { container } = render(
            <RadioButtonGroup legend="Er du fornøyd?" name="happy" forceCompact>
                <RadioButton value="y">Ja</RadioButton>
                <RadioButton value="n">Nei</RadioButton>
            </RadioButtonGroup>,
        );
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });

    test("invalid radio buttons should be a11y compliant", async () => {
        const onChange = jest.fn();
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
