import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { Tooltip } from "./Tooltip";

describe("Tooltip", () => {
    test("should render button for showing tooltip", () => {
        render(<Tooltip content={<p className="jkl-small">Dette er en tooltip</p>} />);

        const tooltipButton = screen.getByRole("button", { name: /Vis hjelpetekst/ });
        expect(tooltipButton).toBeInTheDocument();
    });

    test("should not render tooltip text when tooltip is not activated", () => {
        render(<Tooltip content={<p className="jkl-small">Dette er en tooltip</p>} />);

        const tooltipText = screen.queryByText(/Dette er en tooltip/);
        expect(tooltipText).not.toBeInTheDocument();
    });

    test("should not render tooltip text when tooltip is HOVERED", async () => {
        render(<Tooltip content={<p className="jkl-small">Dette er en tooltip</p>} />);
        const user = userEvent.setup();

        const tooltipButton = screen.getByRole("button", { name: /Vis hjelpetekst/ });
        await user.hover(tooltipButton);
        expect(screen.queryByText(/Dette er en tooltip/)).not.toBeInTheDocument();
    });

    test("should not render tooltip text when tooltip is FOCUSED", () => {
        render(<Tooltip content={<p className="jkl-small">Dette er en tooltip</p>} />);

        const tooltipButton = screen.getByRole("button", { name: /Vis hjelpetekst/ });
        fireEvent.focus(tooltipButton);
        expect(screen.queryByText(/Dette er en tooltip/)).not.toBeInTheDocument();
    });

    test("should render tooltip text when tooltip is CLICKED", async () => {
        render(<Tooltip content={<p className="jkl-small">Dette er en tooltip</p>} />);
        const user = userEvent.setup();

        const tooltipButton = screen.getByRole("button", { name: /Vis hjelpetekst/ });
        await user.click(tooltipButton);
        expect(screen.getByText(/Dette er en tooltip/)).toBeInTheDocument();
    });
});
