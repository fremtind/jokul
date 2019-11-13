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
});
