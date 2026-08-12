import { type RenderOptions, render, screen } from "@testing-library/react";
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

    it("should connect help text to the input", () => {
        setup(
            <FileInput
                label="Last opp dokumenter"
                helpLabel="Maksimal filstørrelse er 8 MB"
            >
                Velg fil
            </FileInput>,
        );

        const input = getFileInput();
        const helpText = screen.getByText("Maksimal filstørrelse er 8 MB");

        const describedBy = input.getAttribute("aria-describedby")?.split(" ");

        expect(describedBy).toContain(helpText.closest("[id]")?.id);
    });
});
