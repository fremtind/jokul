import { render, screen } from "@testing-library/react";
import React from "react";
import { InfoCard } from "./InfoCard";

describe("InfoCard", () => {
    it("renders without exploding", () => {
        render(
            <InfoCard title="Hello">
                <p>Hello world</p>
            </InfoCard>,
        );

        expect(screen.getByText("Hello world")).toBeInTheDocument();
    });
});
