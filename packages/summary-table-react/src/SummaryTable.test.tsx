import React from "react";
import { render, screen } from "@testing-library/react";
import { SummaryTable } from "./SummaryTable";
import { axe } from "jest-axe";
import { mockProps } from "../mocks";

test("renders footer when footer is specified in props", () => {
    render(<SummaryTable {...mockProps} />);
    expect(screen.getByText("Total sum")).toBeInTheDocument();
    expect(screen.getByText("693,50 kr/mnd")).toBeInTheDocument();
});

test("SummaryTable should be a11y compliant", async () => {
    const { container } = render(<SummaryTable {...mockProps} />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
});
