import { render, RenderOptions } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import React from "react";
import { File } from ".";

function setup(jsx: JSX.Element, renderOptions?: RenderOptions) {
    return {
        user: userEvent.setup(),
        ...render(jsx, renderOptions),
    };
}

describe("File", () => {
    it("should render the given file name", () => {
        const onRemove = jest.fn();
        const { getByText } = setup(
            <File
                fileName="test.txt"
                fileType="application/text"
                fileSize={1000}
                file={new window.File([], "test.txt")}
                isUploading={false}
                onRemove={onRemove}
            />,
        );

        expect(getByText("test.txt")).toBeInTheDocument();
    });

    it("should render a progress indicator when uploading", () => {
        const onRemove = jest.fn();
        const { getByText } = setup(
            <File
                fileName="test.txt"
                fileType="application/text"
                fileSize={1000}
                file={new window.File([], "test.txt")}
                isUploading={true}
                onRemove={onRemove}
            />,
        );

        expect(getByText("Laster opp test.txt")).toBeInTheDocument();
    });

    it("should call onRemove if the button is clicked", async () => {
        const onRemove = jest.fn();
        const { getByRole, user } = setup(
            <File
                fileName="test.txt"
                fileType="application/text"
                fileSize={1000}
                file={new window.File([], "test.txt")}
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
            <File
                fileName="test.tsx"
                fileType="application/text"
                fileSize={0}
                file={new window.File([], "test.txt")}
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
            <File
                fileName="test.tsx"
                fileType="application/text"
                fileSize={0}
                file={new window.File([], "test.txt")}
                isUploading={true}
                onRemove={onRemove}
            />,
        );

        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });
});
