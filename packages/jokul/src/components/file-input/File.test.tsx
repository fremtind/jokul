import { render, RenderOptions } from "@testing-library/react";
import UserEventModule from "@testing-library/user-event";
import { axe } from "jest-axe";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import { File } from "./File.js";

// https://github.com/testing-library/user-event/issues/1146
// @ts-ignore typecheck liker ikke at default muligens ikke finnes
const userEvent = UserEventModule.default ?? UserEventModule;

function setup(jsx: JSX.Element, renderOptions?: RenderOptions) {
    return {
        user: userEvent.setup(),
        ...render(jsx, renderOptions),
    };
}

describe("File", () => {
    it("should render the given file name", () => {
        const onRemove = vi.fn();
        const { getByText } = setup(
            <File
                fileName="test.txt"
                fileType="application/text"
                fileSize={1000}
                file={new window.File([], "test.txt")}
                onRemove={onRemove}
            />,
        );

        expect(getByText("test.txt")).toBeInTheDocument();
    });

    it("should call onRemove if the button is clicked", async () => {
        const onRemove = vi.fn();
        const { getByRole, user } = setup(
            <File
                fileName="test.txt"
                fileType="application/text"
                fileSize={1000}
                file={new window.File([], "test.txt")}
                onRemove={onRemove}
            />,
        );

        await user.click(getByRole("button"));

        expect(onRemove).toHaveBeenCalled();
    });

    it("should pass jext-axe tests in default state", async () => {
        const onRemove = vi.fn();
        const { container } = render(
            <File
                fileName="test.tsx"
                fileType="application/text"
                fileSize={0}
                file={new window.File([], "test.txt")}
                onRemove={onRemove}
            />,
        );

        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });
});
