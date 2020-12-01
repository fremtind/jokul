import React from "react";
import { render, screen } from "@testing-library/react";
import { SummaryTable } from "./SummaryTable";
import { axe } from "jest-axe";
import { mockProps, mockFooter } from "../mocks";

test("renders footer when footer is specified in props", () => {
    render(<SummaryTable {...mockProps} />);
    expect(screen.getByText(mockFooter.label)).toBeInTheDocument();
    expect(screen.getByText(mockFooter.value)).toBeInTheDocument();
});

test("SummaryTable should be a11y compliant", async () => {
    const { container } = render(<SummaryTable {...mockProps} />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
});
