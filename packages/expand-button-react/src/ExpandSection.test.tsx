import { act, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import React, { useState, FC } from "react";
import { ExpandSection } from "./ExpandSection";

const onClickSpy = jest.fn();

const ExpandSectionExample: FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <ExpandSection
            title={
                isExpanded
                    ? "Skjul seksjonen igjen"
                    : "Vis den skjulte seksjonen"
            }
            onClick={(e, expanded) => {
                setIsExpanded(expanded);
                onClickSpy(e);
            }}
        >
            <h2>Skjult seksjon</h2>
            <p>
                Her kommer det masse informasjon som er relevant, men ikke så
                relevant at vi alltid vil vise det.
            </p>
            <p>
                Vi kunne kanskje brukt en Accordion, men vi har ikke{" "}
                <em>flere</em> ting vi vil strukturere på denne måten. Det ser
                litt rart ut med ett AccordionItem, så da bruker vi heller en
                ExpandButton
            </p>
        </ExpandSection>
    );
};

describe("Expand", () => {
    beforeEach(() => {
        onClickSpy.mockClear();
    });

    it("should render the expand button, but not the related content", () => {
        render(<ExpandSectionExample />);
        screen.getByText("Vis den skjulte seksjonen");

        const contentToggle = screen.getByTestId("jkl-expand-section");
        expect(contentToggle).toHaveProperty("open", false);
    });

    it("should render the expand button expanded with the isExpanded prop set to true", () => {
        render(
            <ExpandSection title="Skjul seksjonen igjen" isExpanded={true}>
                <h2>Skjult seksjon</h2>
                <p>
                    Her kommer det masse informasjon som er relevant, men ikke
                    så relevant at vi alltid vil vise det.
                </p>
            </ExpandSection>,
        );
        screen.getByText("Skjult seksjon");

        const contentToggle = screen.getByTestId("jkl-expand-section");
        expect(contentToggle).toHaveProperty("open", true);
    });

    it("should trigger onClick handler on click and expand the content", async () => {
        render(<ExpandSectionExample />);

        const button = screen.getByText("Vis den skjulte seksjonen");
        await act(async () => {
            await userEvent.click(button);
        });

        const contentToggle = screen.getByTestId("jkl-expand-section");
        expect(contentToggle).toHaveProperty("open", true);

        await waitFor(() => expect(onClickSpy).toHaveBeenCalledTimes(1));
    });
});

describe("a11y", () => {
    test("Expand should be a11y compliant", async () => {
        const { container } = render(<ExpandSectionExample />);
        let results = await axe(container);
        expect(results).toHaveNoViolations();

        const button = screen.getByRole("button");
        await act(async () => {
            await userEvent.click(button);
        });

        results = await axe(container);
        expect(results).toHaveNoViolations();
    });
});
