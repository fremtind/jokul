import { act, render, screen } from "@testing-library/react";
import UserEventModule from "@testing-library/user-event";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import { axe } from "vitest-axe";
import { Checkbox } from "./Checkbox.js";

// https://github.com/testing-library/user-event/issues/1146
// @ts-ignore typecheck liker ikke at default muligens ikke finnes
const userEvent = UserEventModule.default ?? UserEventModule;

describe("checkbox", () => {
    it("should be checked after clicking the label", async () => {
        render(
            <Checkbox value="iamgroot" name="iamgroot">
                I am groot!
            </Checkbox>,
        );

        const label = screen.getByText("I am groot!");
        const input = screen.getByTestId(
            "jkl-checkbox-input",
        ) as HTMLInputElement;

        expect(input.checked).toBe(false);

        await act(async () => {
            await userEvent.click(label);
        });

        expect(input.checked).toBe(true);
    });

    it("should be checked after clicking the input ", async () => {
        render(
            <Checkbox value="iamgroot" name="iamgroot">
                I am groot!
            </Checkbox>,
        );

        const input = screen.getByTestId(
            "jkl-checkbox-input",
        ) as HTMLInputElement;

        expect(input.checked).toBe(false);

        await act(async () => {
            await userEvent.click(input);
        });

        expect(input.checked).toBe(true);
    });

    it("should be checked if checked is true", () => {
        render(
            <Checkbox
                value="iamgroot"
                name="iamgroot"
                checked={true}
                onChange={() => {}}
            >
                I am groot!
            </Checkbox>,
        );

        const input = screen.getByTestId(
            "jkl-checkbox-input",
        ) as HTMLInputElement;

        expect(input).toHaveProperty("checked", true);
        expect(input.checked).toBe(true);
    });

    it("should be unchecked if checked is true and input is clicked", async () => {
        const TestCheckbox = () => {
            const [checked, toggle] = React.useState(true);
            return (
                <Checkbox
                    value="iamgroot"
                    name="iamgroot"
                    checked={checked}
                    onChange={() => toggle(!checked)}
                >
                    I am groot!
                </Checkbox>
            );
        };

        render(<TestCheckbox />);

        const input = screen.getByTestId(
            "jkl-checkbox-input",
        ) as HTMLInputElement;

        expect(input.checked).toBe(true);

        await act(async () => {
            await userEvent.click(input);
        });

        expect(input.checked).toBe(false);
    });

    it("should call the passed onChange method when clicked", async () => {
        const onChange = vi.fn();
        render(
            <Checkbox value="switchme" name="switchme" onChange={onChange}>
                Switch me!
            </Checkbox>,
        );

        const input = screen.getByLabelText("Switch me!");
        await act(async () => {
            await userEvent.click(input);
        });

        expect(onChange).toHaveBeenCalled();
    });

    it("should have data-testautoid", () => {
        render(
            <Checkbox
                value="iamgroot"
                name="iamgroot"
                data-testautoid="jkl-checkbox__testautoid"
            >
                I am groot!
            </Checkbox>,
        );

        const input = screen.getByTestId(
            "jkl-checkbox-input",
        ) as HTMLInputElement;
        const testAutoId = input.getAttribute("data-testautoid");
        expect(testAutoId).toEqual("jkl-checkbox__testautoid");
    });
});

describe("a11y", () => {
    it("checkbox should be a11y compliant", async () => {
        const { container } = render(
            <Checkbox name="box" value="checkbox">
                I am special
            </Checkbox>,
        );
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });

    it("checked checkbox should be a11y compliant", async () => {
        const { container } = render(
            <Checkbox name="box" value="static" checked onChange={() => {}}>
                I am special
            </Checkbox>,
        );
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });

    it("invalid checkbox should be a11y compliant", async () => {
        const { container } = render(
            <Checkbox name="box" value="static" invalid>
                I am special
            </Checkbox>,
        );
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });

    it("inline checkbox should be a11y compliant", async () => {
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
