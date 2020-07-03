import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Card } from ".";
import { axe } from "jest-axe";

describe("Card", () => {
    it("renders without exploding", () => {
        render(
            <Card title="Hello">
                <p>Hello world</p>
            </Card>,
        );

        expect(screen.getByText("Hello world")).toBeInTheDocument();
    });

    it("renders the given title", () => {
        render(<Card title="Fremtind" />);
        expect(screen.getByText("Fremtind")).toBeInTheDocument();
    });

    it("renders without title", () => {
        const { queryByTestId } = render(<Card />);
        expect(queryByTestId("jkl-card__title")).not.toBeInTheDocument();
    });

    it("has an image", () => {
        render(<Card title="Test" media={{ src: "image.jpg", alt: "Image" }} />);

        const component = screen.getByRole("img");
        expect(component).toBeInTheDocument();
    });

    it("renders image with label", () => {
        render(<Card title="Test" media={{ src: "image.jpg", alt: "Man with dog" }} />);
        expect(screen.getByAltText("Man with dog")).toBeInTheDocument();
    });

    it("renders with darkmode", () => {
        render(<Card title="Test" dark />);

        const component = screen.getByTestId("jkl-card");
        expect(component).toHaveClass("jkl-card--dark");
    });

    it("uses the passed class name", () => {
        render(<Card title="Test" className="test-class" />);

        const component = screen.getByTestId("jkl-card");
        expect(component).toHaveClass("test-class");
    });

    it("has a button", () => {
        render(<Card title="Test" action={{ type: "secondary", name: "Test", onClick: () => {} }} />);

        const component = screen.getByRole("button");
        expect(component).toBeInTheDocument();
    });

    it("renders the given button", () => {
        render(<Card title="Test" action={{ type: "tertiary", name: "Click me", onClick: () => {} }}></Card>);

        const component = screen.getByRole("button");
        expect(component).toHaveClass("jkl-button--tertiary");
    });

    it("executes the onclick function on button", () => {
        const clickHandler = jest.fn();
        render(<Card title="Test" action={{ type: "primary", name: "Click me", onClick: clickHandler }} />);

        const button = screen.getByText("Click me");

        fireEvent.click(button);

        expect(clickHandler).toHaveBeenCalled();
    });
});

describe("a11y", () => {
    test("card should be a11y compliant", async () => {
        const { container } = render(<Card title="Card" clickable={{ href: "#" }} />);
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });

    test("dark card should be a11y compliant", async () => {
        const { container } = render(<Card title="Dark Card" clickable={{ href: "#" }} dark />);
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });
});
