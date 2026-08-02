import { type RenderOptions, render, screen } from "@testing-library/react";
import UserEventModule from "@testing-library/user-event";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import { axe } from "vitest-axe";
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

function getFileInput(): HTMLInputElement {
    return screen.getByLabelText("Last opp dokumenter") as HTMLInputElement;
}

function getDescribedElements(input: HTMLElement): HTMLElement[] {
    return (input.getAttribute("aria-describedby") ?? "")
        .split(/\s+/)
        .filter(Boolean)
        .map((id) => document.getElementById(id))
        .filter((element): element is HTMLElement => element !== null);
}

describe("FileInput", () => {
    it("should pass axe tests in default state", async () => {
        const { container } = setup(
            <FileInput
                label="Last opp dokumenter"
                description="Tillatte formater: JPG og PNG"
            >
                Velg fil
            </FileInput>,
        );

        expect(await axe(container)).toHaveNoViolations();
    });

    it("should render a native file input", () => {
        setup(<FileInput label="Last opp dokumenter">Velg fil</FileInput>);

        expect(getFileInput()).toHaveAttribute("type", "file");
    });

    it("should render the button text", () => {
        setup(<FileInput label="Last opp dokumenter">Velg fil</FileInput>);

        expect(screen.getByText("Velg fil")).toBeInTheDocument();
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
                Velg Fil
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

    it("should be disabled when disabled is true", () => {
        setup(
            <FileInput label="Last opp dokumenter" disabled>
                Velg fil
            </FileInput>,
        );

        expect(getFileInput()).toBeDisabled();
    });

    it("should connect the help text to the input", () => {
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
        const describedElements = getDescribedElements(input);

        expect(input).toHaveAttribute("aria-invalid", "true");
        expect(input).toHaveAttribute("aria-describedby");
        expect(describedElements).toHaveLength(1);
        expect(describedElements[0]).toHaveTextContent("Du må velge en fil");
    });

    it("should prefer the error text over the help text", () => {
        setup(
            <FileInput
                label="Last opp dokumenter"
                helpLabel="Maksimal filstørrelse er 8 MB"
                errorLabel="Du må velge en fil"
            >
                Velg fil
            </FileInput>,
        );

        const input = getFileInput();
        const describedElements = getDescribedElements(input);

        expect(input).toHaveAttribute("aria-invalid", "true");
        expect(describedElements).toHaveLength(1);
        expect(describedElements[0]).toHaveTextContent("Du må velge en fil");
        expect(describedElements[0]).not.toHaveTextContent(
            "Maksimal filstørrelse er 8 MB",
        );
    });
});
