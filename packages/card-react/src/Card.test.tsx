import React from "react";
import { cleanup, render } from "@testing-library/react";
import { Card } from ".";

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
        const { getByText } = render(<Card title="Fremtind"></Card>);
        expect(getByText("Fremtind")).toBeInTheDocument();
    });

    it("renders image with label", () => {
        const { getByAltText } = render(
            <Card
                title="Image"
                media={{ src: "https://fremtind.papirfly.no/readimage.aspx?asset=315&quality=6", alt: "Man with dog" }}
            ></Card>,
        );

        expect(getByAltText("Man with dog")).toBeInTheDocument();
    });

    it("renders with darkmode"),
        () => {
            const { getByTestId } = render(<Card title="darkmode" dark />);

            const component = getByTestId("jkl-card");
            expect(component).toHaveClass("jkl-card--dark");
        };
});
