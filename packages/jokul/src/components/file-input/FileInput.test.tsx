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

function getDropzone(): HTMLDivElement {
    const dropzone = screen
        .getByText(/eller slipp fil/)
        .closest(".jkl-file-input__dropzone");

    if (!(dropzone instanceof HTMLDivElement)) {
        throw new Error("Fant ikke dropzone");
    }

    return dropzone;
}

function createFileDataTransfer(files: File[] = []) {
    return {
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
    it("should call onChange when a file is selected", async () => {
        const onChange = vi.fn();

        const file = new File(["innhold"], "dokument.pdf", {
            type: "application/pdf",
        });

        const { user } = setup(
            <FileInput
                label="Last opp dokumenter"
                accept=".pdf"
                buttonText="Velg fil"
                onChange={onChange}
            />,
        );

        const input = getFileInput();

        await user.upload(input, file);

        expect(onChange).toHaveBeenCalledOnce();
        expect(input.files).toHaveLength(1);
        expect(input.files?.[0]).toEqual(file);
    });

    it.each(["button", "dropzone"] as const)(
        "should use the InputGroup label as its only accessible label for the %s variant",
        (variant) => {
            setup(
                <FileInput
                    label="Last opp dokumenter"
                    variant={variant}
                    buttonText="Velg fil"
                />,
            );

            const input = getFileInput();

            expect(input.labels).toHaveLength(1);
            expect(input).toHaveAccessibleName("Last opp dokumenter");
        },
    );

    it("should use the default button text", () => {
        setup(<FileInput label="Last opp dokumenter" />);

        expect(screen.getByText("Velg fil")).toBeInTheDocument();
    });

    it("should pass InputGroup layout props to the group", () => {
        setup(
            <FileInput
                label="Last opp dokumenter"
                data-size="small"
                buttonText="Velg fil"
                style={{ maxWidth: "20rem" }}
            />,
        );

        const input = getFileInput();
        const inputGroup = input.closest(".jkl-input-group");

        expect(inputGroup).toHaveAttribute("data-size", "small");
        expect(inputGroup).toHaveStyle({ maxWidth: "20rem" });
        expect(input).not.toHaveAttribute("data-size");
        expect(input).not.toHaveAttribute("style");
    });

    it("should expose drag-over state while files are over the dropzone", () => {
        setup(
            <FileInput
                label="Last opp dokumenter"
                variant="dropzone"
                buttonText="Velg fil"
            />,
        );

        const input = getFileInput();
        const dropzone = getDropzone();

        const dataTransfer = createFileDataTransfer([
            new File(["innhold"], "dokument.pdf", {
                type: "application/pdf",
            }),
        ]);

        fireEvent.dragOver(input, { dataTransfer });

        expect(dropzone).toHaveAttribute("data-drag-over", "true");

        fireEvent.dragLeave(input);

        expect(dropzone).not.toHaveAttribute("data-drag-over", "true");

        fireEvent.dragOver(input, { dataTransfer });
        fireEvent.drop(input);

        expect(dropzone).not.toHaveAttribute("data-drag-over", "true");
    });

    it("should ignore drag-over events without files", () => {
        setup(
            <FileInput
                label="Last opp dokumenter"
                variant="dropzone"
                buttonText="Velg fil"
            />,
        );

        const input = getFileInput();
        const dropzone = getDropzone();

        fireEvent.dragOver(input, {
            dataTransfer: {
                items: [{ kind: "string", type: "text/plain" }],
            },
        });

        expect(dropzone).not.toHaveAttribute("data-drag-over", "true");
    });

    it("should not expose drag-over state when disabled", () => {
        setup(
            <FileInput
                label="Last opp dokumenter"
                variant="dropzone"
                buttonText="Velg fil"
                disabled
            />,
        );

        const input = getFileInput();
        const dropzone = getDropzone();
        const dataTransfer = createFileDataTransfer([
            new File(["innhold"], "dokument.pdf", {
                type: "application/pdf",
            }),
        ]);

        fireEvent.dragOver(input, { dataTransfer });

        expect(input).toBeDisabled();
        expect(dropzone).not.toHaveAttribute("data-drag-over", "true");
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
            <FileInput
                label="Last opp dokumenter"
                buttonText="Velg filer"
                multiple
            />,
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
                buttonText="Velg fil"
            />,
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
                buttonText="Velg fil"
            />,
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
                buttonText="Velg fil"
            />,
        );

        const input = getFileInput();

        expect(input).toHaveAttribute("aria-invalid", "true");
        expect(screen.getByText("Du må velge en fil")).toBeInTheDocument();
    });
});
