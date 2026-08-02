import type { ComponentPropsWithoutRef } from "react";
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
    label: string;
    /**
     * Tekst på label til InputGroup.
     *
     * @default "Last opp dokumenter"
     */
    children: string;
    /**
     * Tekst på knappen.
     *
     * @default "Velg fil"
     */
    description?: string;
    errorLabel?: string;
    helpLabel?: string;
};
