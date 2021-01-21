import React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { Image } from ".";

describe("Image empty", () => {
    it("should render blur container", () => {
        render(<Image alt="" defaultSize={"image"} isSmallDevice={false} />);

        const blurContainer = screen.getByTestId("jkl-image-blurred");
        expect(blurContainer).toBeInTheDocument();
        expect(blurContainer).toHaveClass("jkl-image__blur-container--blur");
        expect(blurContainer).toHaveClass("jkl-image__blur-container--no-thumbnail");
    });

    it("should render blur container background color", () => {
        render(<Image alt="" defaultSize={"image"} isSmallDevice={false} backgroundColor="deeppink" />);

        const blurContainer = screen.getByTestId("jkl-image-blurred");
        const image = screen.getByTestId("jkl-image");
        expect(blurContainer).toBeInTheDocument();
        expect(blurContainer).toHaveClass("jkl-image__blur-container--blur");
        expect(blurContainer).toHaveClass("jkl-image__blur-container--no-thumbnail");
        expect(blurContainer).toHaveAttribute("style", "object-position: initial; background-color: deeppink;");
        expect(image).toHaveAttribute("style", "object-position: initial; background-color: deeppink;");
    });

    it("should render blur container object postition", () => {
        render(<Image alt="" defaultSize={"image"} isSmallDevice={false} objectPosition="center center" />);

        const blurContainer = screen.getByTestId("jkl-image-blurred");
        const image = screen.getByTestId("jkl-image");
        expect(blurContainer).toBeInTheDocument();
        expect(blurContainer).toHaveClass("jkl-image__blur-container--blur");
        expect(blurContainer).toHaveClass("jkl-image__blur-container--no-thumbnail");
        expect(blurContainer).toHaveAttribute("style", "object-position: center center;");
        expect(image).toHaveAttribute("style", "object-position: center center;");
    });

    it("should render empty image container", () => {
        render(<Image alt="" defaultSize={"image"} isSmallDevice={false} />);
        const image = screen.getByTestId("jkl-image");

        expect(image).toBeInTheDocument();
        expect(image).toHaveClass("jkl-image--empty");
    });

    test("compact buttons should be a11y compliant", async () => {
        const { container } = render(<Image alt="" defaultSize={"image"} isSmallDevice={false} />);
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });
});
