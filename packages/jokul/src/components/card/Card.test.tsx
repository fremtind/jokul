import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import React from "react";
import { Card, CARD_PADDINGS, CARD_VARIANTS } from "./Card.js";

describe("Card", () => {
    it("rendrer uten å kræsje", () => {
        render(
            <Card>
                <p>Hello world</p>
            </Card>,
        );

        expect(screen.getByText("Hello world")).toBeInTheDocument();
    });

    CARD_VARIANTS.forEach((variant) => {
        it("setter riktig klasse for variant", () => {
            render(<Card variant={variant}>Hello, world</Card>);
            expect(screen.getByText("Hello, world")).toHaveClass(`jkl-card--${variant}`);
        });
    });

    CARD_PADDINGS.forEach((padding) => {
        it("setter riktig attributt for padding", () => {
            render(<Card padding={padding}>Hello, world</Card>);
            expect(screen.getByText("Hello, world")).toHaveAttribute("data-padding", padding);
        });
    });

    it("setter riktig klasse for klikkbart kort", () => {
        render(<Card clickable>Hello, world</Card>);

        const component = screen.getByTestId("jkl-card");
        expect(component).toHaveAttribute("data-clickable");
    });

    it("bruker innsendte klassenavn", () => {
        render(<Card className="test-class">Hello, world</Card>);

        const component = screen.getByTestId("jkl-card");
        expect(component).toHaveClass("test-class");
    });

    it("rendrer som et div-element som standard", () => {
        render(<Card>Hello, world</Card>);

        expect(screen.getByText("Hello, world").tagName).toEqual("DIV");
    });

    it("rendrer som innsendt HTML-element", () => {
        render(
            <Card as="a" href="/">
                Hello, world
            </Card>,
        );

        expect(screen.getByText("Hello, world").tagName).toEqual("A");
    });

    it("rendrer som child med riktige attributter", () => {
        render(
            <Card asChild data-foo="bar" className="my-card">
                <a href="/" className="my-link">
                    Hello, world
                </a>
            </Card>,
        );

        const component = screen.getByText("Hello, world");

        expect(component.tagName).toEqual("A");
        expect(component).toHaveAttribute("data-foo", "bar");
        expect(component).toHaveAttribute("href", "/");
        expect(component).toHaveClass("my-card");
        expect(component).toHaveClass("my-link");
    });
});

describe("a11y", () => {
    test("card should be a11y compliant", async () => {
        const { container } = render(
            <Card asChild clickable padding="s" variant="high">
                <a href="/faktura/12345" className="flex gap-x-40">
                    <div className="flex flex-column gap-4">
                        <p className="jkl-heading-2">
                            18 856 kr
                            <span aria-hidden> →</span>
                        </p>
                        <p className="jkl-body">Frist 20.03.2023</p>
                    </div>
                    <div className="flex flex-column gap-12">
                        Ubetalt
                        <p className="jkl-body">Purring</p>
                    </div>
                </a>
            </Card>,
        );
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });
});
