import { render, screen, waitFor } from "@testing-library/react";
import UserEventModule from "@testing-library/user-event";
import { axe } from "jest-axe";
import React from "react";
import { Tooltip } from "./Tooltip.js";
import { TooltipContent } from "./TooltipContent.js";
import { TooltipTrigger } from "./TooltipTrigger.js";

// https://github.com/testing-library/user-event/issues/1146
const userEvent = UserEventModule.default ?? UserEventModule;

describe("Tooltip", () => {
    it("should show tooltip when hovering over trigger", async () => {
        render(
            <Tooltip delay={0}>
                <TooltipTrigger>Tekst som skal forklares</TooltipTrigger>
                <TooltipContent>Forklarende tekst</TooltipContent>
            </Tooltip>,
        );

        const user = userEvent.setup();
        const tooltipTrigger = screen.queryByText(/Tekst som skal forklares/);
        expect(screen.queryByText(/Forklarende tekst/, { ignore: "[hidden]" })).not.toBeInTheDocument();

        await user.hover(tooltipTrigger as HTMLElement);
        await waitFor(() => expect(screen.queryByText(/Forklarende tekst/, { ignore: "[hidden]" })).toBeVisible());
    });

    it("should NOT show tooltip on hover when triggerOn is 'click'", async () => {
        render(
            <Tooltip triggerOn="click">
                <TooltipTrigger>Tekst som skal forklares</TooltipTrigger>
                <TooltipContent>Forklarende tekst</TooltipContent>
            </Tooltip>,
        );

        const user = userEvent.setup();
        const tooltipTrigger = screen.queryByText(/Tekst som skal forklares/);
        expect(screen.queryByText(/Forklarende tekst/)).not.toBeInTheDocument();

        await user.hover(tooltipTrigger as HTMLElement);
        () => expect(screen.queryByText(/Forklarende tekst/)).not.toBeInTheDocument();
    });

    it("should show tooltip on click when triggerOn is 'click'", async () => {
        render(
            <Tooltip triggerOn="click">
                <TooltipTrigger>Tekst som skal forklares</TooltipTrigger>
                <TooltipContent>Forklarende tekst</TooltipContent>
            </Tooltip>,
        );

        const user = userEvent.setup();
        const tooltipTrigger = screen.queryByText(/Tekst som skal forklares/);
        expect(screen.queryByText(/Forklarende tekst/)).not.toBeInTheDocument();

        await user.click(tooltipTrigger as HTMLElement);
        await waitFor(() => expect(screen.queryByText(/Forklarende tekst/)).toBeVisible());
    });

    describe("Trigger", () => {
        it("should render the provided content", () => {
            render(
                <Tooltip>
                    <TooltipTrigger>Tekst som skal forklares</TooltipTrigger>
                </Tooltip>,
            );

            const tooltipTrigger = screen.queryByText(/Tekst som skal forklares/);
            expect(tooltipTrigger).toBeVisible();
        });

        it("should render as a button element by default", () => {
            render(
                <Tooltip>
                    <TooltipTrigger>Tekst som skal forklares</TooltipTrigger>
                </Tooltip>,
            );

            const tooltipTrigger = screen.queryByText(/Tekst som skal forklares/);
            expect(tooltipTrigger?.tagName).toBe("BUTTON");
        });

        it("should render as the provided content element", () => {
            render(
                <Tooltip triggerOn="click">
                    <TooltipTrigger>
                        <p>Tekst som skal forklares</p>
                    </TooltipTrigger>
                </Tooltip>,
            );

            const tooltipTrigger = screen.queryByText(/Tekst som skal forklares/);
            expect(tooltipTrigger?.tagName).toBe("P");
        });
    });

    describe("Content", () => {
        it("should render the provided content", () => {
            render(
                <Tooltip initialOpen>
                    <TooltipContent>Forklarende tekst</TooltipContent>
                </Tooltip>,
            );

            const tooltipContent = screen.queryByText(/Forklarende tekst/, { ignore: "[hidden]" });
            expect(tooltipContent).toBeInTheDocument();
        });
    });

    describe("a11y", () => {
        test("tooltip should be a11y compliant", async () => {
            const { container } = render(
                <Tooltip initialOpen>
                    <TooltipContent>Forklarende tekst</TooltipContent>
                </Tooltip>,
            );
            const results = await axe(container);

            expect(results).toHaveNoViolations();
        });
    });
});
