import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import React from "react";
import { FileUploaderPreview } from ".";

describe("FileUploaderPreview", () => {
    it("should render", () => {
        const onRemove = jest.fn();
        render(<FileUploaderPreview file={new File([], "test.txt")} isUploading={false} onRemove={onRemove} />);

        screen.getByText("Edit me!");
    });
});

describe("a11y", () => {
    test("FileUploaderPreview should be a11y compliant", async () => {
        const onRemove = jest.fn();
        const { container } = render(
            <FileUploaderPreview file={new File([], "test.txt")} isUploading={false} onRemove={onRemove} />,
        );

        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });
});
