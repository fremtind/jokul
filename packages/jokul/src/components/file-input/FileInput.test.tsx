import { type RenderOptions, fireEvent, render } from "@testing-library/react";
import UserEventModule from "@testing-library/user-event";
import React, { useState } from "react";
import { describe, expect, it, vi } from "vitest";
import { axe } from "vitest-axe";
import { File } from "../file/index.js";
import { FileInput } from "./index.js";
import type { UploadedFile } from "./types.js";

// https://github.com/testing-library/user-event/issues/1146
// @ts-ignore typecheck liker ikke at default muligens ikke finnes
const userEvent = UserEventModule.default ?? UserEventModule;

function setup(jsx: JSX.Element, renderOptions?: RenderOptions) {
    return {
        user: userEvent.setup(),
        ...render(jsx, renderOptions),
    };
}

describe("FileInput", () => {
    const files: UploadedFile[] = [];

    it("should render", () => {
        const onChange = vi.fn();
        const { getByText, queryByText } = setup(
            <FileInput legend="Vedlegg" onChange={onChange} value={files}>
                {files.map((file) => (
                    <File
                        key={file.file.name}
                        fileName={file.file.name}
                        fileType={file.file.type}
                        fileSize={file.file.size}
                    />
                ))}
            </FileInput>,
        );

        expect(getByText("Legg til fil")).toBeInTheDocument();
        expect(
            queryByText(/^Maksimum filstørrelse er/),
        ).not.toBeInTheDocument();
    });

    it("should render hint about max size if given one", () => {
        const onChange = vi.fn();
        const { getByText } = setup(
            <FileInput
                legend="Vedlegg"
                onChange={onChange}
                value={files}
                maxSizeBytes={8_000_000}
            >
                {files.map((file) => (
                    <File
                        key={file.file.name}
                        fileName={file.file.name}
                        fileType={file.file.type}
                        fileSize={file.file.size}
                    />
                ))}
            </FileInput>,
        );

        expect(getByText(/per fil/)).toBeInTheDocument();
    });

    it("should only pass on one dropped file when multiple is false", () => {
        const onChange = vi.fn();
        const { container } = setup(
            <FileInput
                legend="Vedlegg"
                onChange={onChange}
                value={files}
                multiple={false}
            />,
        );

        fireEvent.drop(
            container.querySelector(".jkl-file-input__dropzone") as Element,
            {
                dataTransfer: {
                    files: [
                        new window.File(["a"], "a.png", { type: "image/png" }),
                        new window.File(["b"], "b.png", { type: "image/png" }),
                    ],
                },
            },
        );

        expect(onChange).toHaveBeenCalledOnce();
        expect(onChange.mock.calls[0][1]).toHaveLength(1);
        expect(onChange.mock.calls[0][1][0].file.name).toBe("a.png");
    });

    it("should ignore dropped files when disabled", () => {
        const onChange = vi.fn();
        const { container } = setup(
            <FileInput
                legend="Vedlegg"
                onChange={onChange}
                value={files}
                disabled
            />,
        );

        fireEvent.drop(
            container.querySelector(".jkl-file-input__dropzone") as Element,
            {
                dataTransfer: {
                    files: [
                        new window.File(["a"], "a.png", { type: "image/png" }),
                    ],
                },
            },
        );

        expect(onChange).not.toHaveBeenCalled();
    });

    it("should announce the number of selected files", () => {
        const onChange = vi.fn();
        const file: UploadedFile = {
            file: new window.File(["a"], "a.png", { type: "image/png" }),
            state: undefined,
            uploadProgress: 0,
        };
        const { getByText, rerender } = setup(
            <FileInput legend="Vedlegg" onChange={onChange} value={[]} />,
        );
        expect(getByText("Ingen filer valgt")).toHaveAttribute(
            "aria-live",
            "polite",
        );

        rerender(
            <FileInput legend="Vedlegg" onChange={onChange} value={[file]} />,
        );
        expect(getByText("1 fil valgt")).toBeInTheDocument();

        rerender(
            <FileInput
                legend="Vedlegg"
                onChange={onChange}
                value={[file, file]}
            />,
        );
        expect(getByText("2 filer valgt")).toBeInTheDocument();
    });

    it("should move focus to the file picker when a file is removed", async () => {
        const createFile = (name: string): UploadedFile => ({
            file: new window.File(["a"], name, { type: "text/plain" }),
            state: undefined,
            uploadProgress: 0,
        });
        const Wrapper = () => {
            const [value, setValue] = useState([
                createFile("a.txt"),
                createFile("b.txt"),
            ]);
            return (
                <FileInput legend="Vedlegg" onChange={vi.fn()} value={value}>
                    {value.map(({ file }) => (
                        <File
                            key={file.name}
                            fileName={file.name}
                            fileType={file.type}
                            fileSize={file.size}
                            onRemove={() =>
                                setValue((prev) =>
                                    prev.filter((f) => f.file !== file),
                                )
                            }
                        />
                    ))}
                </FileInput>
            );
        };
        const { getByRole, getByLabelText, user } = setup(<Wrapper />);

        await user.click(getByRole("button", { name: "Fjern a.txt" }));

        expect(getByLabelText("Legg til flere filer")).toHaveFocus();
    });

    it("should pass jext-axe tests in default state", async () => {
        const onChange = vi.fn();
        const { container } = setup(
            <FileInput legend="Vedlegg" onChange={onChange} value={files}>
                {files.map((file) => (
                    <File
                        key={file.file.name}
                        fileName={file.file.name}
                        fileType={file.file.type}
                        fileSize={file.file.size}
                    />
                ))}
            </FileInput>,
        );

        const result = await axe(container);

        expect(result).toHaveNoViolations();
    });
});
