import type { ComponentPropsWithoutRef, ReactNode } from "react";
import type { FileProps } from "../file/types.js";

export interface UploadedFileValidation {
    type: "TOO_LARGE" | "WRONG_TYPE";
    message: string;
}

export interface UploadedFile {
    file: File;
    validation?: UploadedFileValidation;
    state: FileProps["state"];
    uploadProgress: number;
}

export type FileInputProps = Omit<
    ComponentPropsWithoutRef<"input">,
    "type" | "value" | "children"
> & {
    /**
     * Innholdet i knappen.
     *
     * @default "Velg fil"
     */
    label?: string;
};
