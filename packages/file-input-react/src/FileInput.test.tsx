import { render, RenderOptions } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import React from "react";
import { File, FileInput, FileInputFile } from ".";

function setup(jsx: JSX.Element, renderOptions?: RenderOptions) {
    return {
        user: userEvent.setup(),
        ...render(jsx, renderOptions),
    };
}

describe("FileInput", () => {
    const files: FileInputFile[] = [];

    it("should render", () => {
        const onChange = jest.fn();
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
        const onChange = jest.fn();
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

    it("should pass jext-axe tests in default state", async () => {
        const onChange = jest.fn();
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
