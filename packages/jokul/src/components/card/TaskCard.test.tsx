import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import React from "react";
import { TaskCard } from "./TaskCard.js";

describe("TaskCard", () => {
    it("renders without exploding", () => {
        render(
            <TaskCard>
                <p>Hello world</p>
            </TaskCard>,
        );

        expect(screen.getByText("Hello world")).toBeInTheDocument();
    });
});

describe("a11y", () => {
    test("card should be a11y compliant", async () => {
        const { container } = render(
            <TaskCard>
                <p>Hello world</p>
            </TaskCard>,
        );
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });
});
