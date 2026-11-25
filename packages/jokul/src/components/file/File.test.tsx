import { type RenderOptions, render } from "@testing-library/react";
import UserEventModule from "@testing-library/user-event";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import { axe } from "vitest-axe";
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

    it("should not render the thumbnail when hideThumbnail is true", () => {
        const onRemove = vi.fn();
        const { container } = render(
            <File
                fileName="test.txt"
                fileType="application/text"
                fileSize={1000}
                file={new window.File([], "test.txt")}
                onRemove={onRemove}
                hideThumbnail
            />,
        );

        expect(
            container.querySelector(".jkl-file__thumbnail"),
        ).not.toBeInTheDocument();
    });

    it("should create one object URL per file and revoke it on unmount", () => {
        const createObjectURL = vi.fn(() => "blob:preview");
        const revokeObjectURL = vi.fn();
        vi.stubGlobal("URL", { ...URL, createObjectURL, revokeObjectURL });

        const file = new window.File(["a"], "bilde.png", { type: "image/png" });
        const props = {
            fileName: "bilde.png",
            fileType: "image/png",
            fileSize: 1,
            file,
        };
        const { container, rerender, unmount } = render(<File {...props} />);
        rerender(<File {...props} />);

        expect(createObjectURL).toHaveBeenCalledOnce();
        expect(container.querySelector("img")).toHaveAttribute(
            "src",
            "blob:preview",
        );

        unmount();
        expect(revokeObjectURL).toHaveBeenCalledWith("blob:preview");

        vi.unstubAllGlobals();
    });

    it("should describe the remove button with the error label", () => {
        const { getByRole } = setup(
            <File
                fileName="test.txt"
                fileType="text/plain"
                fileSize={1}
                state="error"
                errorLabel="Filen er for stor"
                onRemove={vi.fn()}
            />,
        );

        expect(
            getByRole("button", { name: "Fjern test.txt" }),
        ).toHaveAccessibleDescription("Filen er for stor");
    });
});
