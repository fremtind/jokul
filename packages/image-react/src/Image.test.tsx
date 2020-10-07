import React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { Image } from ".";

jest.mock("@fremtind/jkl-react-hooks", () => ({
    useProgressiveImg: () => ({ src: "hest", isBlurred: false }),
}));

describe("Image", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("should render image container", () => {
        render(<Image alt="" defaultSize={"image"} isSmallDevice={false} />);
        const image = screen.getByTestId("jkl-image");

        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute("src", "hest");
    });
    test("compact buttons should be a11y compliant", async () => {
        const { container } = render(<Image alt="" defaultSize={"image"} isSmallDevice={false} />);
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });
});
