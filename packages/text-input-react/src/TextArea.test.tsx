import React, { useState } from "react";
import { cleanup, render, fireEvent, act } from "@testing-library/react";
import { TextArea } from ".";
import { axe } from "jest-axe";

afterEach(cleanup);

describe("TextArea", () => {
    it("renders with correct label", () => {
        const { getByLabelText } = render(<TextArea label="Cool text field" />);

        expect(getByLabelText("Cool text field")).toBeInTheDocument();
    });

    it("uses the passed class name", () => {
        const { getByTestId } = render(<TextArea label="testing" className="test-class" />);

        const component = getByTestId("jkl-text-field");
        expect(component).toHaveClass("test-class");
    });
});

describe("TextArea with autoExpand", () => {
    beforeEach(() => {
        // Mock getComputedStyle which doesn't work in the browser
        // @ts-ignore
        global.getComputedStyle = () => {
            return { lineHeight: "16px" };
        };
    });

    function TextAreaWithValueState(props: PropTypeFor<typeof TextArea>) {
        const [value, setValue] = useState("");

        return (
            <TextArea
                label={"testing"}
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                }}
                {...props}
            />
        );
    }

    it("should calculate the height and set it as style for 1 row", () => {
        const { getByLabelText } = render(
            <TextAreaWithValueState rows={1} autoExpand label="testing" className="test-class" />,
        );

        const textAreaElement = getByLabelText("testing");

        act(() => {
            fireEvent.focus(textAreaElement);
            fireEvent.change(textAreaElement, { target: { value: "123" } });
            fireEvent.blur(textAreaElement);
        });

        expect(textAreaElement.style.height).toBe("24px");
    });

    it("should calculate the height and set it as style for 3 rows", async () => {
        const { getByLabelText } = render(
            <TextAreaWithValueState autoExpand rows={1} label="testing" className="test-class" />,
        );

        const textAreaElement = getByLabelText("testing");

        act(() => {
            fireEvent.focus(textAreaElement);
            fireEvent.change(textAreaElement, { target: { value: "First row \nSecond row \n Third row" } });
            fireEvent.blur(textAreaElement);
        });

        expect(textAreaElement.style.height).toBe("56px");
    });

    it("should keep the height 1 row higher than the actual row when textarea has focus", async () => {
        const { getByLabelText } = render(
            <TextAreaWithValueState autoExpand rows={1} label="testing" className="test-class" />,
        );

        const textAreaElement = getByLabelText("testing");

        act(() => {
            fireEvent.focus(textAreaElement);
            fireEvent.change(textAreaElement, { target: { value: "First row \nSecond row \n Third row" } });
        });

        expect(textAreaElement.style.height).toBe("72px");
    });

    it("should keep the height equal to props.rows when there is input that has fewer rows than props.rows", async () => {
        const { getByLabelText } = render(
            <TextAreaWithValueState autoExpand rows={5} label="testing" className="test-class" />,
        );

        const textAreaElement = getByLabelText("testing");

        act(() => {
            fireEvent.focus(textAreaElement);
            fireEvent.change(textAreaElement, { target: { value: "First row \nSecond row \n Third row" } });
            fireEvent.blur(textAreaElement);
        });

        expect(textAreaElement.style.height).toBe("88px");
    });

    it("should keep the height equal to props.rows when there is input that has fewer than props.rows", async () => {
        const { getByLabelText } = render(
            <TextAreaWithValueState autoExpand rows={5} label="testing" className="test-class" />,
        );

        const textAreaElement = getByLabelText("testing");

        act(() => {
            fireEvent.focus(textAreaElement);
            fireEvent.change(textAreaElement, { target: { value: "First row \nSecond row \n Third row" } });
            fireEvent.blur(textAreaElement);
        });

        expect(textAreaElement.style.height).toBe("88px");
    });
});

describe("a11y", () => {
    test("text-area should be a11y compliant", async () => {
        const { container } = render(<TextArea label="testing" helpLabel="tips" />);
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });
});

type PropTypeFor<T extends (arg: any) => any> = T extends (arg: infer P) => any ? P : never;
