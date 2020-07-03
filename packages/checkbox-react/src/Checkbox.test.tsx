import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import { Checkbox } from ".";
import { axe } from "jest-axe";

afterEach(cleanup);

describe("checkbox", () => {
    it("should be checked after clicking the label", () => {
        render(
            <Checkbox value="iamgroot" name="iamgroot">
                I am groot!
            </Checkbox>,
        );

        const label = screen.getByText("I am groot!");
        const input = screen.getByTestId("jkl-checkbox-input");

        expect(input).toHaveProperty("checked", false);

        label.click();

        expect(input).toHaveProperty("checked", true);
    });

    it("should be checked after clicking the input ", function () {
        render(
            <Checkbox value="iamgroot" name="iamgroot">
                I am groot!
            </Checkbox>,
        );

        const input = screen.getByTestId("jkl-checkbox-input");

        expect(input).toHaveProperty("checked", false);

        input.click();

        expect(input).toHaveProperty("checked", true);
    });

    it("should be checked if checked is true", function () {
        render(
            <Checkbox value="iamgroot" name="iamgroot" checked={true} onChange={() => {}}>
                I am groot!
            </Checkbox>,
        );

        const input = screen.getByTestId("jkl-checkbox-input");

        expect(input).toHaveProperty("checked", true);
    });

    it("should be unchecked if checked is true and input is clicked", function () {
        const TestCheckbox = () => {
            const [checked, toggle] = React.useState(true);
            return (
                <Checkbox value="iamgroot" name="iamgroot" checked={checked} onChange={() => toggle(!checked)}>
                    I am groot!
                </Checkbox>
            );
        };

        render(<TestCheckbox />);

        const input = screen.getByTestId("jkl-checkbox-input");

        expect(input).toHaveProperty("checked", true);

        input.click();

        expect(input).toHaveProperty("checked", false);
    });

    it("should call the passed onChange method when clicked", () => {
        const onChange = jest.fn();
        render(
            <Checkbox value="switchme" name="switchme" onChange={onChange}>
                Switch me!
            </Checkbox>,
        );

        const input = screen.getByLabelText("Switch me!");
        input.click();

        expect(onChange).toHaveBeenCalled();
    });
});

describe("a11y", () => {
    test("checkbox should be a11y compliant", async () => {
        const { container } = render(
            <Checkbox name="box" value="checkbox">
                I am special
            </Checkbox>,
        );
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });

    test("checked checkbox should be a11y compliant", async () => {
        const { container } = render(
            <Checkbox name="box" value="static" checked onChange={() => {}}>
                I am special
            </Checkbox>,
        );
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });

    test("invalid checkbox should be a11y compliant", async () => {
        const { container } = render(
            <Checkbox name="box" value="static" invalid>
                I am special
            </Checkbox>,
        );
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });

    test("inline checkbox should be a11y compliant", async () => {
        const { container } = render(
            <>
                <Checkbox name="box" value="static" inline>
                    I am special
                </Checkbox>
                <Checkbox name="box2" value="static" inline>
                    I am special
                </Checkbox>
            </>,
        );
        const results = await axe(container, {
            rules: {
                "form-field-multiple-labels": { enabled: false },
            },
        });

        expect(results).toHaveNoViolations();
    });
});
