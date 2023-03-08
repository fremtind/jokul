import { render, RenderOptions } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import React from "react";
import { FileUploaderPreview } from ".";

function setup(jsx: JSX.Element, renderOptions?: RenderOptions) {
    return {
        user: userEvent.setup(),
        ...render(jsx, renderOptions),
    };
}

describe("FileUploaderPreview", () => {
    it("should render the given file name", () => {
        const onRemove = jest.fn();
        const { getByText } = setup(
            <FileUploaderPreview
                fileName="test.txt"
                fileType="application/text"
                fileSize={1000}
                file={new File([], "test.txt")}
                isUploading={false}
                onRemove={onRemove}
            />,
        );

        expect(getByText("test.txt")).toBeInTheDocument();
    });

    it("should call onRemove if the button is clicked", async () => {
        const onRemove = jest.fn();
        const { getByRole, user } = setup(
            <FileUploaderPreview
                fileName="test.txt"
                fileType="application/text"
                fileSize={1000}
                file={new File([], "test.txt")}
                isUploading={false}
                onRemove={onRemove}
            />,
        );

        await user.click(getByRole("button"));

        expect(onRemove).toHaveBeenCalled();
    });

    it("should pass jext-axe tests in default state", async () => {
        const onRemove = jest.fn();
        const { container } = render(
            <FileUploaderPreview
                fileName="test.tsx"
                fileType="application/text"
                fileSize={0}
                file={new File([], "test.txt")}
                isUploading={false}
                onRemove={onRemove}
            />,
        );

        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });

    it("should pass jext-axe tests in uploading state", async () => {
        const onRemove = jest.fn();
        const { container } = render(
            <FileUploaderPreview
                fileName="test.tsx"
                fileType="application/text"
                fileSize={0}
                file={new File([], "test.txt")}
                isUploading={true}
                onRemove={onRemove}
            />,
        );

        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });
});
