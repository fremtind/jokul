import {
    type RenderOptions,
    fireEvent,
    render,
    screen,
} from "@testing-library/react";
import UserEventModule from "@testing-library/user-event";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import { FileInput } from "./index.js";

// https://github.com/testing-library/user-event/issues/1146
// @ts-ignore typecheck liker ikke at default muligens ikke finnes
const userEvent = UserEventModule.default ?? UserEventModule;

function setup(jsx: React.ReactElement, renderOptions?: RenderOptions) {
    return {
        user: userEvent.setup(),
        ...render(jsx, renderOptions),
    };
}

function getFileInput() {
    return screen.getByLabelText("Last opp dokumenter") as HTMLInputElement;
}

function getDropzone(): HTMLLabelElement {
    const dropzone = screen.getByText("eller slipp fil her").closest("label");

    if (!(dropzone instanceof HTMLLabelElement)) {
        throw new Error("Fant ikke dropzone");
    }

    return dropzone;
}

function createFileList(files: File[]): FileList {
    const fileList = {
        ...files,
        length: files.length,
        item: (index: number) => files[index] ?? null,
        [Symbol.iterator]: () => files[Symbol.iterator](),
    };

    return fileList as FileList;
}

function createFileDataTransfer(files: File[] = []) {
    return {
        files: createFileList(files),
        items: files.map((file) => ({ kind: "file", type: file.type })),
    };
}

function getDescribedElements(input: HTMLElement): HTMLElement[] {
    return (input.getAttribute("aria-describedby") ?? "")
        .split(/\s+/)
        .filter(Boolean)
        .map((id) => document.getElementById(id))
        .filter((element): element is HTMLElement => element !== null);
}

describe("FileInput", () => {
    it("should visually hide the native file name when requested", () => {
        setup(
            <FileInput label="Last opp dokumenter" hideFileName>
                Velg fil
            </FileInput>,
        );

        expect(getFileInput()).toHaveAttribute("data-hide-file-name");
        expect(getFileInput()).not.toHaveAttribute("aria-hidden");
    });

    it("should call onChange when a file is selected", async () => {
        const onChange = vi.fn();

        const file = new File(["innhold"], "dokument.pdf", {
            type: "application/pdf",
        });

        const { user } = setup(
            <FileInput
                label="Last opp dokumenter"
                accept=".pdf"
                onChange={onChange}
            >
                Velg fil
            </FileInput>,
        );

        const input = getFileInput();

        await user.upload(input, file);

        expect(onChange).toHaveBeenCalledOnce();
        expect(input.files).toHaveLength(1);
        expect(input.files?.[0]).toEqual(file);
    });

    it("should expose drag-over state while files are over the dropzone", () => {
        setup(
            <FileInput label="Last opp dokumenter" variant="dropzone">
                Velg fil
            </FileInput>,
        );

        const dropzone = getDropzone();
        const dataTransfer = createFileDataTransfer([
            new File(["innhold"], "dokument.pdf", {
                type: "application/pdf",
            }),
        ]);

        expect(fireEvent.dragOver(dropzone, { dataTransfer })).toBe(false);

        expect(dropzone).toHaveAttribute("data-drag-over", "true");

        const internalDragLeave = new Event("dragleave", { bubbles: true });
        Object.defineProperty(internalDragLeave, "relatedTarget", {
            value: dropzone,
        });
        fireEvent(screen.getByText("Velg fil"), internalDragLeave);

        expect(dropzone).toHaveAttribute("data-drag-over", "true");

        fireEvent.dragLeave(dropzone, { dataTransfer });

        expect(dropzone).not.toHaveAttribute("data-drag-over");
    });

    it("should pass dropped files through the native input", () => {
        const onChange = vi.fn();
        const file = new File(["innhold"], "dokument.pdf", {
            type: "application/pdf",
        });

        setup(
            <FileInput
                label="Last opp dokumenter"
                variant="dropzone"
                onChange={onChange}
            >
                Velg fil
            </FileInput>,
        );

        const input = getFileInput();
        const dropzone = getDropzone();
        const dataTransfer = createFileDataTransfer([file]);

        Object.defineProperty(input, "files", {
            configurable: true,
            value: createFileList([]),
            writable: true,
        });

        fireEvent.dragOver(dropzone, { dataTransfer });
        fireEvent.drop(dropzone, { dataTransfer });

        expect(input.files).toHaveLength(1);
        expect(input.files?.[0]).toEqual(file);
        expect(onChange).toHaveBeenCalledOnce();
        expect(dropzone).not.toHaveAttribute("data-drag-over");
    });

    it("should support multiple files", async () => {
        const files = [
            new File(["første"], "første.pdf", {
                type: "application/pdf",
            }),
            new File(["andre"], "andre.pdf", {
                type: "application/pdf",
            }),
        ];

        const { user } = setup(
            <FileInput label="Last opp dokumenter" multiple>
                Velg filer
            </FileInput>,
        );

        const input = getFileInput();

        await user.upload(input, files);

        expect(input).toHaveAttribute("multiple");
        expect(Array.from(input.files ?? [])).toEqual(files);
    });

    it("should connect the description to the input", () => {
        setup(
            <FileInput
                label="Last opp dokumenter"
                description="Maksimal filstørrelse er 8 MB"
            >
                Velg fil
            </FileInput>,
        );

        const input = getFileInput();
        const describedElements = getDescribedElements(input);

        expect(input).toHaveAttribute("aria-describedby");
        expect(describedElements).toHaveLength(1);
        expect(describedElements[0]).toHaveTextContent(
            "Maksimal filstørrelse er 8 MB",
        );
    });

    it("should support the deprecated helpLabel", () => {
        setup(
            <FileInput
                label="Last opp dokumenter"
                helpLabel="Maksimal filstørrelse er 8 MB"
            >
                Velg fil
            </FileInput>,
        );

        const input = getFileInput();
        const describedElements = getDescribedElements(input);

        expect(input).toHaveAttribute("aria-describedby");
        expect(describedElements).toHaveLength(1);
        expect(describedElements[0]).toHaveTextContent(
            "Maksimal filstørrelse er 8 MB",
        );
    });

    it("should expose an error state", () => {
        setup(
            <FileInput
                label="Last opp dokumenter"
                errorLabel="Du må velge en fil"
            >
                Velg fil
            </FileInput>,
        );

        const input = getFileInput();

        expect(input).toHaveAttribute("aria-invalid", "true");
        expect(screen.getByText("Du må velge en fil")).toBeInTheDocument();
    });
});
