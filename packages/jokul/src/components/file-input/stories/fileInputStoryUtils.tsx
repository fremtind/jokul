import React from "react";
import * as cow from "../../../../stories/assets/cow.jpg";
import { File } from "../../file/File.js";
import type { FileProps } from "../../file/types.js";
import type { UploadedFile } from "../types.js";

// Mock-filer har ikke ekte innhold, så de vises med kua. Faktiske opplastinger vises som de er.
const mockFiles = new WeakSet<globalThis.File>();

export const createUploadedFile = (
    name: string,
    type = "image/png",
    state?: UploadedFile["state"],
): UploadedFile => {
    const file = new window.File(["x".repeat(3_490_000)], name, { type });
    mockFiles.add(file);
    return { file, state, uploadProgress: 0 };
};

export const createUploadedFiles = (names: string[]): UploadedFile[] =>
    names.map((name) =>
        createUploadedFile(
            name,
            name.endsWith(".pdf") ? "application/pdf" : "image/png",
        ),
    );

export const renderFiles = (
    files: UploadedFile[],
    onRemove: (index: number) => void,
    variant?: FileProps["variant"],
) =>
    files.map(({ file, state }, index) => (
        <File
            key={`${file.name}-${index}`}
            fileName={file.name}
            fileType={file.type}
            fileSize={file.size}
            file={mockFiles.has(file) ? undefined : file}
            path={
                mockFiles.has(file) && file.type.startsWith("image/")
                    ? cow.default
                    : undefined
            }
            state={state}
            variant={variant}
            onRemove={state !== "loading" ? () => onRemove(index) : undefined}
        />
    ));
