import React from "react";
import { cleanup, render } from "@testing-library/react";
import { Card } from ".";
import { axe } from "jest-axe";

describe("Card", () => {
    afterAll(cleanup);

    it("renders without exploding", () => {
        const { getByText } = render(
            <Card title="Hello">
                <p>Hello world</p>
            </Card>,
        );

        expect(getByText("Hello world")).toBeInTheDocument();
    });

    it("renders the given title", () => {
        const { getByText } = render(<Card title="Fremtind" />);
        expect(getByText("Fremtind")).toBeInTheDocument();
    });

    it("renders without title", () => {
        const { queryByTestId } = render(<Card />);
        expect(queryByTestId("jkl-card__title")).not.toBeInTheDocument();
    });

    it("has an image", () => {
        const { getByRole } = render(<Card title="Test" media={{ src: "image.jpg", alt: "Image" }} />);

        const component = getByRole("img");
        expect(component).toBeInTheDocument();
    });

    it("renders image with label", () => {
        const { getByAltText } = render(<Card title="Test" media={{ src: "image.jpg", alt: "Man with dog" }} />);
        expect(getByAltText("Man with dog")).toBeInTheDocument();
    });

    it("renders with darkmode", () => {
        const { getByTestId } = render(<Card title="Test" dark />);

        const component = getByTestId("jkl-card");
        expect(component).toHaveClass("jkl-card--dark");
    });

    it("uses the passed class name", () => {
        const { getByTestId } = render(<Card title="Test" className="test-class" />);

        const component = getByTestId("jkl-card");
        expect(component).toHaveClass("test-class");
    });

    it("has a button", () => {
        const { getByRole } = render(
            <Card title="Test" action={{ type: "secondary", name: "Test", onClick: () => {} }} />,
        );

        const component = getByRole("button");
        expect(component).toBeInTheDocument();
    });

    it("renders the given button", () => {
        const { getByRole } = render(
            <Card title="Test" action={{ type: "tertiary", name: "Click me", onClick: () => {} }}></Card>,
        );

        const component = getByRole("button");
        expect(component).toHaveClass("jkl-button--tertiary");
    });

    it("executes the onclick function on button", () => {
        const clickHandler = jest.fn();
        const { getByText } = render(
            <Card title="Test" action={{ type: "primary", name: "Click me", onClick: clickHandler }} />,
        );

        const button = getByText("Click me");

        button.click();

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
