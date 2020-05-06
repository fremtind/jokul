import React from "react";
import { cleanup, render } from "@testing-library/react";
import { Select } from ".";
import { axe } from "jest-axe";

afterEach(cleanup);

describe("Select", () => {
    it("should render correct amount of options", () => {
        const { getAllByTestId } = render(<Select items={["drop", "it", "like", "its", "hot"]} label="Snoop" />);

        const options = getAllByTestId("jkl-select__option");

        expect(options.length).toBe(5);
    });

    it("should be inline when specified", () => {
        const { getByTestId } = render(<Select inline items={["drop", "it", "like", "its", "hot"]} label="Snoop" />);

        const dropdown = getByTestId("jkl-select");
        expect(dropdown).toHaveClass("jkl-select--inline");
    });

    it("should use the specified value", () => {
        const onChange = jest.fn();
        const value = "drop";
        const { getByTestId } = render(
            <Select onChange={onChange} items={["drop", "it", "like", "its", "hot"]} label="Snoop" value={value} />,
        );

        const button = getByTestId("jkl-select__button");

        expect(onChange).toHaveBeenCalledTimes(0);
        expect(button).toHaveTextContent(value);
    });

    it("should have default text value in button when no option selected", () => {
        const { getByTestId } = render(<Select items={["drop", "it", "like", "its", "hot"]} label="Snoop" />);

        const button = getByTestId("jkl-select__button");

        expect(button).toHaveTextContent("Velg");
    });

    it("can be forced into compact mode", () => {
        const { getByTestId } = render(<Select items={["1", "2"]} label="test" forceCompact />);

        expect(getByTestId("jkl-select")).toHaveClass("jkl-select--compact");
    });

    it("displays the ValuePair label of selected item on first render", () => {
        const valuePairs = [{ value: "datagreier", label: "Fin lesbar tekst" }];

        const { getByTestId } = render(
            <Select label="test" items={valuePairs} value={"datagreier"} onChange={() => {}} />,
        );

        expect(getByTestId("jkl-select__button").innerHTML).toBe("Fin lesbar tekst");
    });
});

describe("a11y", () => {
    test("select should be a11y compliant", async () => {
        const { container } = render(<Select label="Select" items={["1", "2"]} value="1" helpLabel="Velg en av to" />);
        const results = await axe(container, {
            rules: {
                "aria-input-field-name": { enabled: false },
            },
        });

        expect(results).toHaveNoViolations();
    });

    test("compact select should be a11y compliant", async () => {
        const { container } = render(
            <Select forceCompact label="Select" items={["1", "2"]} value="1" helpLabel="Velg en av to" />,
        );
        const results = await axe(container, {
            rules: {
                "aria-input-field-name": { enabled: false },
            },
        });

        expect(results).toHaveNoViolations();
    });
});
