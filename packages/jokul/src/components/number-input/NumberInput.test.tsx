import {
    createEvent,
    fireEvent,
    render,
    screen,
} from "@testing-library/react";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import { axe } from "vitest-axe";
import { NumberInput } from "./NumberInput.js";

describe("NumberInput", () => {
    it("renders with correct label and native number type", () => {
        render(<NumberInput label="Antall" />);

        const input = screen.getByLabelText("Antall");
        expect(input).toBeInTheDocument();
        expect(input).toHaveAttribute("type", "number");
    });

    it("forces input type number even if type is passed at runtime", () => {
        render(
            <NumberInput
                label="Antall"
                {...({ type: "text" } as Record<string, string>)}
            />,
        );

        expect(screen.getByLabelText("Antall")).toHaveAttribute(
            "type",
            "number",
        );
    });

    it("uses the passed class name", () => {
        render(<NumberInput label="testing" className="test-class" />);

        expect(screen.getByTestId("jkl-number-input")).toHaveClass(
            "test-class",
        );
    });

    it("uses the passed input class name", () => {
        render(
            <NumberInput
                label="testing"
                inputClassName="test-input-class"
            />,
        );

        expect(screen.getByLabelText("testing")).toHaveClass(
            "test-input-class",
        );
    });

    it("supports right alignment", () => {
        render(<NumberInput label="testing" align="right" />);

        expect(screen.getByLabelText("testing")).toHaveClass(
            "jkl-number-input__input--align-right",
        );
    });

    it("centers text when stepper is enabled, regardless of align prop", () => {
        render(<NumberInput label="testing" align="right" stepper />);

        expect(screen.getByLabelText("testing")).not.toHaveClass(
            "jkl-number-input__input--align-right",
        );
        expect(screen.getByLabelText("testing")).toHaveClass(
            "jkl-number-input__input--stepper",
        );
    });

    it("renders as size small when specified", () => {
        render(<NumberInput label="testing" data-size="small" />);

        expect(screen.getByTestId("jkl-number-input")).toHaveAttribute(
            "data-size",
            "small",
        );
    });

    it("should have data-testautoid", () => {
        render(
            <NumberInput
                label="testing"
                data-testautoid="jkl-number-input__testautoid"
            />,
        );

        expect(screen.getByLabelText("testing")).toHaveAttribute(
            "data-testautoid",
            "jkl-number-input__testautoid",
        );
    });

    it("supports width", () => {
        render(<NumberInput label="testing" width="12rem" />);

        const wrapper = screen
            .getByTestId("jkl-number-input")
            .querySelector(".jkl-number-input__wrapper");

        expect(wrapper).toHaveStyle({ width: "12rem" });
    });

    it("forwards style to the input wrapper", () => {
        render(
            <NumberInput
                label="testing"
                style={{ backgroundColor: "rgb(255, 0, 0)" }}
            />,
        );

        const wrapper = screen
            .getByTestId("jkl-number-input")
            .querySelector(".jkl-number-input__wrapper");

        expect(wrapper).toHaveStyle({ backgroundColor: "rgb(255, 0, 0)" });
    });

    it("forwards min, max and step attributes", () => {
        render(
            <NumberInput
                label="testing"
                min={0}
                max={100}
                step={0.5}
                placeholder="0"
            />,
        );

        const input = screen.getByLabelText("testing");
        expect(input).toHaveAttribute("min", "0");
        expect(input).toHaveAttribute("max", "100");
        expect(input).toHaveAttribute("step", "0.5");
        expect(input).toHaveAttribute("placeholder", "0");
    });

    it("supports controlled values and change events", () => {
        const handleChange = vi.fn();

        const ControlledNumberInput = () => {
            const [value, setValue] = React.useState<string | number>(12);

            return (
                <NumberInput
                    label="testing"
                    value={value}
                    onChange={(event) => {
                        handleChange(event);
                        setValue(event.target.value);
                    }}
                />
            );
        };

        render(<ControlledNumberInput />);

        const input = screen.getByLabelText("testing");
        expect(input).toHaveValue(12);

        fireEvent.change(input, { target: { value: "24" } });

        expect(handleChange).toHaveBeenCalledTimes(1);
        expect(input).toHaveValue(24);
    });

    it("renders errorLabel when given", () => {
        render(<NumberInput label="testing" errorLabel="det går nok ikke" />);

        expect(screen.getByText("det går nok ikke")).toBeInTheDocument();
        expect(screen.getByLabelText("testing")).toHaveAttribute(
            "aria-invalid",
            "true",
        );
    });

    it("sets data-invalid on the wrapper when errorLabel is given", () => {
        render(<NumberInput label="testing" errorLabel="det går nok ikke" />);

        const wrapper = screen
            .getByTestId("jkl-number-input")
            .querySelector(".jkl-number-input__wrapper");

        expect(wrapper).toHaveAttribute("data-invalid", "true");
    });

    it("does not render helpLabel if both helpLabel and errorLabel are given", () => {
        render(
            <NumberInput
                label="testing"
                helpLabel="help"
                errorLabel="error"
            />,
        );

        expect(screen.queryByText("help")).not.toBeInTheDocument();
        expect(screen.getByText("error")).toBeInTheDocument();
    });

    it("supports labels only for screen readers", () => {
        render(<NumberInput label="testing" labelProps={{ srOnly: true }} />);

        expect(screen.getByText("testing")).toHaveClass("jkl-label--sr-only");
    });

    it("renders no stepper controls by default", () => {
        render(<NumberInput label="testing" />);

        expect(
            screen.queryByRole("button", { name: "Senk verdien" }),
        ).not.toBeInTheDocument();
        expect(
            screen.queryByRole("button", { name: "Øk verdien" }),
        ).not.toBeInTheDocument();
    });

    it("renders stepper controls when enabled", () => {
        render(<NumberInput label="testing" stepper />);

        expect(
            screen.getByRole("button", { name: "Senk verdien" }),
        ).toBeInTheDocument();
        expect(
            screen.getByRole("button", { name: "Øk verdien" }),
        ).toBeInTheDocument();
    });

    it("uses wrapper classes instead of part data attributes", () => {
        render(<NumberInput label="testing" stepper />);

        const wrapper = screen
            .getByTestId("jkl-number-input")
            .querySelector(".jkl-number-input__wrapper");

        expect(wrapper).toHaveClass("jkl-number-input__wrapper--stepper");
        expect(wrapper).not.toHaveAttribute("data-part");
        expect(wrapper).not.toHaveAttribute("data-stepper");
    });

    it("prevents pointerdown on stepper buttons from taking focus", () => {
        render(<NumberInput label="testing" stepper />);

        const increment = screen.getByRole("button", { name: "Øk verdien" });
        const event = createEvent.pointerDown(increment);

        fireEvent(increment, event);

        expect(event.defaultPrevented).toBe(true);
    });

    it("increments and decrements with the stepper", () => {
        render(<NumberInput label="testing" stepper defaultValue={2} />);

        const input = screen.getByLabelText("testing");
        const decrement = screen.getByRole("button", { name: "Senk verdien" });
        const increment = screen.getByRole("button", { name: "Øk verdien" });

        fireEvent.click(increment);
        expect(input).toHaveValue(3);

        fireEvent.click(decrement);
        expect(input).toHaveValue(2);
    });

    it("respects native min and max when stepping", () => {
        render(
            <NumberInput
                label="testing"
                stepper
                min={1}
                max={2}
                defaultValue={2}
            />,
        );

        const input = screen.getByLabelText("testing");
        const decrement = screen.getByRole("button", { name: "Senk verdien" });
        const increment = screen.getByRole("button", { name: "Øk verdien" });

        fireEvent.click(increment);
        expect(input).toHaveValue(2);

        fireEvent.click(decrement);
        expect(input).toHaveValue(1);

        fireEvent.click(decrement);
        expect(input).toHaveValue(1);
    });

    it("supports controlled values and change events from the stepper", () => {
        const handleChange = vi.fn();

        const ControlledNumberInput = () => {
            const [value, setValue] = React.useState<string | number>(2);

            return (
                <NumberInput
                    label="testing"
                    stepper
                    value={value}
                    onChange={(event) => {
                        handleChange(event);
                        setValue(event.target.value);
                    }}
                />
            );
        };

        render(<ControlledNumberInput />);

        const input = screen.getByLabelText("testing");
        const increment = screen.getByRole("button", { name: "Øk verdien" });

        fireEvent.click(increment);

        expect(handleChange).toHaveBeenCalledTimes(1);
        expect(input).toHaveValue(3);
    });

    it("disables stepper buttons for disabled inputs", () => {
        render(<NumberInput label="testing" stepper disabled />);

        expect(screen.getByRole("button", { name: "Senk verdien" })).toBeDisabled();
        expect(screen.getByRole("button", { name: "Øk verdien" })).toBeDisabled();
    });

    it("disables the decrement button when the value is at min", () => {
        render(
            <NumberInput
                label="testing"
                stepper
                min={1}
                max={5}
                defaultValue={1}
            />,
        );

        expect(
            screen.getByRole("button", { name: "Senk verdien" }),
        ).toBeDisabled();
        expect(
            screen.getByRole("button", { name: "Øk verdien" }),
        ).not.toBeDisabled();
    });

    it("disables the increment button when the value is at max", () => {
        render(
            <NumberInput
                label="testing"
                stepper
                min={1}
                max={5}
                defaultValue={5}
            />,
        );

        expect(
            screen.getByRole("button", { name: "Øk verdien" }),
        ).toBeDisabled();
        expect(
            screen.getByRole("button", { name: "Senk verdien" }),
        ).not.toBeDisabled();
    });

    it("disables the decrement button when the initial value is below min", () => {
        render(
            <NumberInput
                label="testing"
                stepper
                min={1}
                max={5}
                defaultValue={0}
            />,
        );

        expect(
            screen.getByRole("button", { name: "Senk verdien" }),
        ).toBeDisabled();
    });

    it("disables the increment button when the initial value is above max", () => {
        render(
            <NumberInput
                label="testing"
                stepper
                min={1}
                max={5}
                defaultValue={10}
            />,
        );

        expect(
            screen.getByRole("button", { name: "Øk verdien" }),
        ).toBeDisabled();
    });

    it("keeps stepper buttons enabled when the value is empty", () => {
        render(<NumberInput label="testing" stepper min={1} max={5} />);

        expect(
            screen.getByRole("button", { name: "Senk verdien" }),
        ).not.toBeDisabled();
        expect(
            screen.getByRole("button", { name: "Øk verdien" }),
        ).not.toBeDisabled();
    });

    it("updates stepper disabled state after stepping to min or max", () => {
        render(
            <NumberInput
                label="testing"
                stepper
                min={1}
                max={3}
                defaultValue={2}
            />,
        );

        const decrement = screen.getByRole("button", { name: "Senk verdien" });
        const increment = screen.getByRole("button", { name: "Øk verdien" });

        expect(decrement).not.toBeDisabled();
        expect(increment).not.toBeDisabled();

        fireEvent.click(increment);
        expect(increment).toBeDisabled();
        expect(decrement).not.toBeDisabled();

        fireEvent.click(decrement);
        fireEvent.click(decrement);
        expect(decrement).toBeDisabled();
        expect(increment).not.toBeDisabled();
    });

    it("updates stepper disabled state for controlled inputs", () => {
        const ControlledNumberInput = () => {
            const [value, setValue] = React.useState<string | number>(2);

            return (
                <NumberInput
                    label="testing"
                    stepper
                    min={1}
                    max={3}
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                />
            );
        };

        render(<ControlledNumberInput />);

        const decrement = screen.getByRole("button", { name: "Senk verdien" });
        const increment = screen.getByRole("button", { name: "Øk verdien" });

        fireEvent.click(increment);
        expect(increment).toBeDisabled();

        fireEvent.click(decrement);
        fireEvent.click(decrement);
        expect(decrement).toBeDisabled();
    });

    it("uses native number validity instead of wrapper data-invalid state", () => {
        render(<NumberInput label="testing" min={10} defaultValue={5} />);

        const input = screen.getByLabelText("testing") as HTMLInputElement;
        const wrapper = screen
            .getByTestId("jkl-number-input")
            .querySelector(".jkl-number-input__wrapper");

        expect(input.checkValidity()).toBe(false);
        expect(wrapper).not.toHaveAttribute("data-invalid");
    });
});

describe("NumberInput a11y", () => {
    it("is a11y compliant", async () => {
        const { container } = render(
            <NumberInput label="testing" helpLabel="some help 4 u" />,
        );
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });

});
