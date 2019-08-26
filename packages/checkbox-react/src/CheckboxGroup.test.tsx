import React from "react";
import { cleanup, render } from "@testing-library/react";
import { CheckboxGroup } from ".";

afterEach(cleanup);

describe("CheckboxGroup", () => {
    it("should render the correct legend", () => {
        const { getByText } = render(<CheckboxGroup legend="Choices" choices={[]} />);

        expect(getByText("Choices")).toBeInTheDocument;
    });

    it("should render all passed choices", () => {
        const choices = ["one", "two", "three"];
        const { getByText } = render(<CheckboxGroup legend="Choices" choices={choices} />);

        expect(getByText("one")).toBeInTheDocument;
        expect(getByText("two")).toBeInTheDocument;
        expect(getByText("three")).toBeInTheDocument;
    });

    it("should call the passed onChange method when any choice is clicked", () => {
        const choices = ["checkbox one", "checkbox two", "checkbox three"];
        const dummyFn = jest.fn();
        const { getAllByLabelText } = render(<CheckboxGroup legend="Choices" choices={choices} onChange={dummyFn} />);

        const boxes = getAllByLabelText(/checkbox */);
        boxes.map((box) => box.click());

        expect(dummyFn).toHaveBeenCalledTimes(3);
    });

    it("should call the passed onChange method with correct parameters", () => {
        const choices = ["checkbox one", "checkbox two"];
        const dummyFn = jest.fn();
        const { getByLabelText } = render(<CheckboxGroup legend="Choices" choices={choices} onChange={dummyFn} />);

        const box1 = getByLabelText("checkbox one");
        const box2 = getByLabelText("checkbox two");
        box2.click();
        box2.click();
        box1.click();

        expect(dummyFn).toHaveBeenNthCalledWith(1, "checkbox two", true);
        expect(dummyFn).toHaveBeenNthCalledWith(2, "checkbox two", false);
        expect(dummyFn).toHaveBeenNthCalledWith(3, "checkbox one", true);
    });
});
