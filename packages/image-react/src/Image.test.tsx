import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import React from "react";
import { Image } from ".";

jest.mock("@fremtind/jkl-react-hooks", () => ({
    useElementDimensions: () => [() => {}, { width: 600, height: 400 }],
    useImageLoadingStatus: () => [() => {}, true],
}));

describe("Image", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("accepts regular sources", () => {
        const src = "test.jpg";

        render(<Image src={src} alt="" />);
        const image = screen.getByTestId("jkl-image__image");

        expect(image).toHaveAttribute("src", "test.jpg");
    });

    it("accepts source sets", () => {
        const src = "test.jpg";
        const srcSet = "test400.jpg 400w, test800.jpg 800w";

        render(<Image {...{ src, srcSet }} alt="" />);
        const image = screen.getByTestId("jkl-image__image");

        expect(image).toHaveAttribute("src", "test.jpg");
        expect(image).toHaveAttribute(
            "srcSet",
            "test400.jpg 400w, test800.jpg 800w",
        );
    });

    it("accepts alt text", () => {
        const altText = "Beskrivende tekst";

        render(<Image src="test.jpg" alt={altText} />);
        const image = screen.getByTestId("jkl-image__image");

        expect(image).toHaveAttribute("alt", altText);
    });

    test("is a11y compliant", async () => {
        const { container } = render(
            <Image
                src="test.jpg"
                srcSet="test400.jpg 400w, test800.jpg 800w"
                alt=""
            />,
        );
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });
});
