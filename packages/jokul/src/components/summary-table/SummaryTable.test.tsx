import { render, screen } from "@testing-library/react";
import React from "react";
import { expect, it } from "vitest";
import { axe } from "vitest-axe";
import { mockProps } from "./mocks.js";
import { SummaryTable } from "./SummaryTable.js";

it("renders footer when footer is specified in props", () => {
    render(<SummaryTable {...mockProps} />);
    expect(screen.getByText("Total sum")).toBeInTheDocument();
    expect(screen.getByText("693,50 kr/mnd")).toBeInTheDocument();
});

it("SummaryTable should be a11y compliant", async () => {
    const { container } = render(<SummaryTable {...mockProps} />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
});
